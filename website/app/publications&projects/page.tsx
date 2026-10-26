import { publications, projects } from '@/data/articles';
import Modal from '@/components/modal';

export default function PublicationsProjects() {
  return (
    <div className="mt-12 sm:mt-24 sm:px-8">
      <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Things I’ve made trying to put my dent in the universe.</h1>
      {[{ title: 'Publications', articles: publications }, { title: 'Projects', articles: projects }].map(({ title, articles }) => (
        <section key={title} aria-label={title} className="mt-16 grid gap-6 lg:grid-cols-4">
          <h2 className="border-l-2 border-navBorder pl-5 text-lg text-primary">{title}</h2>
          <div className="flex min-w-0 flex-col gap-8 lg:col-span-3">
            {articles.map(article => <Modal key={article.title} content={article} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
