import Image from 'next/image';
import { BriefcaseIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

type WorkExperience = { company: string; jobTitle: string; start: string; end: string; imgPath: string; link: string };

export default function Card({ cardTitle, cardContent }: { cardTitle: string; cardContent: WorkExperience[] }) {
  return (
    <section aria-label={cardTitle} className="w-full min-w-0 rounded-3xl border border-card p-4 shadow-md sm:p-6">
      <h2 className="flex items-center gap-3 text-lg font-medium text-primary"><BriefcaseIcon aria-hidden="true" className="h-6 w-6 shrink-0" />{cardTitle}</h2>
      <ul className="mt-6 space-y-6">
        {cardContent.map((work, index) => (
          <li key={`${work.company}-${index}`} className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-3 gap-y-1">
            <a href={work.link} target="_blank" rel="noopener noreferrer" aria-label={work.company} className="row-span-2 rounded-full border border-card-company-icon bg-card-company-icon p-1 shadow-sm">
              <Image unoptimized src={work.imgPath} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-contain" />
            </a>
            <div className="min-w-0"><p className="text-base text-primary">{work.company}</p><p className="text-sm leading-relaxed text-secondary">{work.jobTitle}</p></div>
            <p className="text-sm text-secondary">{work.start} – {work.end}</p>
          </li>
        ))}
      </ul>
      <a href="https://drive.google.com/file/d/164LuoyglZpuVC9I8eu_ulqxDKQ-KaPpG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-11 items-center justify-center gap-3 rounded-lg bg-button-filled px-4 py-2 text-button-filled hover:bg-button-filled-hover">View CV <ArrowDownTrayIcon aria-hidden="true" className="h-5 w-5" /></a>
    </section>
  );
}
