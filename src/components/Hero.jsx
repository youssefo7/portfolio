export default function Hero() {
  return (
    <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight">
          YOUSSEF OUARAD
        </h1>
        <p className="mt-3 text-black/80 dark:text-white/80 uppercase tracking-widest text-sm">Software Engineer • Technical Lead • Full-Stack Developer</p>
        <p className="mt-6 max-w-xl text-black/80 dark:text-white/80">
          Software Engineering student at Polytechnique Montreal with experience in full-stack development, 
          technical leadership, and building scalable systems. Currently working at Thales as a Technical Lead.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="btn-outline">View Projects</a>
          <a href="/resume.pdf" className="btn-outline">Download Resume</a>
        </div>
      </div>
      <div className="md:justify-self-end">
        <div className="aspect-square w-56 sm:w-72 md:w-80 border border-black/20 dark:border-white/20 grid place-items-center">
          <span className="text-black/40 dark:text-white/40 uppercase text-xs tracking-widest">PROFILE IMAGE</span>
        </div>
      </div>
    </div>
  )
}

