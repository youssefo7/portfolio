export default function Hero() {
  return (
    <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          hey! i'm youssef
        </h1>
        <p className="mt-3 text-sm">
          morocco (born), canada (raised) & the world (always)
        </p>
        <div className="mt-8 max-w-xl">
          <p className="text-sm">
            software engineering new grad from polytechnique montreal. passionate about <span className="underline">chess</span>, <span className="underline">sports</span>, and <span className="underline">traveling</span>. 
            worked at <span className="underline">ludo</span> and <span className="underline">thales</span>, 
            currently enrolled in software <span className="underline">masters at poly</span>. ultimately want to be a <span className="underline">product manager</span>. :)
          </p>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="#about" className="btn-outline">more about me</a>
          <a href="#projects" className="btn-outline">my work</a>
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

