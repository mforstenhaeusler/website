'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';

export type Article = {
  imgPath: string;
  title: string;
  authors: string;
  date: string;
  abstract: string;
  link?: string;
  code?: string;
  pdf?: string;
  conference?: string;
};

export default function Modal({ content }: { content: Article }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const previousOverflow = useRef<string | null>(null);

  useEffect(() => () => {
    if (previousOverflow.current !== null) document.body.style.overflow = previousOverflow.current;
  }, []);

  const open = () => {
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = 'hidden';
  };
  const close = () => dialog.current?.close();

  return (
    <article className="w-full min-w-0 max-w-3xl">
      <button type="button" onClick={open} aria-haspopup="dialog" className="group w-full overflow-hidden rounded-2xl bg-modal-primary text-left transition-colors hover:bg-modal-hover">
        <div className="flex items-stretch">
          <Image unoptimized src={content.imgPath} alt="" width={128} height={160} className="hidden w-32 shrink-0 bg-white object-contain p-2 lg:block" />
          <div className="min-w-0 p-4 sm:p-5">
            <p className="mb-3 border-l-2 border-modal-date pl-3 text-sm text-modal-date">{content.date}</p>
            <h2 className="font-medium leading-relaxed text-primary">{content.title}</h2>
            {content.conference && <p className="mt-1 text-third">{content.conference}</p>}
            <p className="mt-3 text-sm text-modal-link">Read article <span aria-hidden="true">→</span></p>
          </div>
        </div>
      </button>
      <dialog ref={dialog} aria-labelledby={titleId} onClose={() => { document.body.style.overflow = previousOverflow.current ?? ''; previousOverflow.current = null; }} onClick={event => { if (event.target === event.currentTarget) close(); }} className="article-dialog rounded-2xl bg-primary p-0 text-primary shadow-xl">
        <div className="flex max-h-[inherit] flex-col">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-navBorder px-4 py-2 sm:px-6">
            <p className="text-sm text-secondary">Article details</p>
            <button type="button" autoFocus onClick={close} aria-label="Close article" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-modal-hover"><XMarkIcon aria-hidden="true" className="h-6 w-6" /></button>
          </div>
          <div className="min-h-0 overflow-y-auto overscroll-contain">
            <Image unoptimized src={content.imgPath} alt={`Illustration for ${content.title}`} width={960} height={320} className="max-h-48 w-full bg-secondary object-contain sm:max-h-64" />
            <div className="p-4 sm:p-6">
              <p className="text-sm text-secondary">{content.date}</p>
              <h2 id={titleId} className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">{content.title}</h2>
              {content.conference && <p className="mt-2 text-third">{content.conference}</p>}
              <p className="mt-3 text-sm italic text-secondary">{content.authors}</p>
              <p className="mt-5 border-t border-navBorder pt-5 leading-relaxed text-secondary">{content.abstract}</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-modal-link">
                {[['Full article', content.link], ['PDF', content.pdf], ['Code', content.code]].map(([label, href]) => href && <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-modal-link-hover">{label} <span aria-hidden="true" className="ml-1">↗</span></a>)}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </article>
  );
}
