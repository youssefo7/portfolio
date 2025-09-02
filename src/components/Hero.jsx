export default function Hero() {
  return (
    <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight">
          YOUR NAME
        </h1>
        <p className="mt-3 text-white/80 uppercase tracking-widest text-sm">Software Engineer • Frontend • React</p>
        <p className="mt-6 max-w-xl text-white/80">
          I build fast, accessible web apps with a focus on clean design and delightful UX.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="btn-outline">View Projects</a>
          <a href="/resume.pdf" className="btn-outline">Download Resume</a>
        </div>
      </div>
      <div className="md:justify-self-end">
        <div className="aspect-square w-56 sm:w-72 md:w-80 border border-white/20 grid place-items-center">
          <span className="text-white/40 uppercase text-xs tracking-widest">PROFILE IMAGE</span>
        </div>
      </div>
    </div>
  )
}

