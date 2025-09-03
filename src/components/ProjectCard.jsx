import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  const { title, description, tags, links } = project
  return (
    <article className="grid grid-rows-[auto_1fr_auto] border border-black/10 h-full">

      <div className="p-4 md:p-6 h-64">
        <h3 className="uppercase text-sm font-bold tracking-widest">{title}</h3>
        <p className="mt-3 text-sm text-black/80">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-black/60">
          {tags.map((t) => (
            <li key={t} className="border border-black/10 px-2 py-1">{t}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3 p-4 md:p-6 border-t border-black/10">
        <a href={links.github} className="btn-outline" target="_blank" rel="noreferrer">
          <FiGithub className="mr-2" /> GitHub
        </a>
        {/* <a href={links.demo} className="btn-outline" target="_blank" rel="noreferrer">
          <FiExternalLink className="mr-2" /> Live Demo
        </a> */}
      </div>
    </article>
  )
}

