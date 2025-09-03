import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

export default function Hero() {
  return (
    <div className="pt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
      {/* Main hero content */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          hey! i'm youssef
        </h1>
        <p className="mt-3 text-sm">
          morocco (born), canada (raised) & the world (always)
        </p>
        <div className="mt-8 max-w-xl">
          <p className="text-sm">
            software engineering new grad from polytechnique montreal. passionate about <span className="underline">tech</span>, <span className="underline">maths</span>, <span className="underline">financial markets</span>, and <span className="underline">sports</span>. 
            worked for <span className="underline">thales</span> and <span className="underline">ludo</span>, 
            enrolled in a <span className="underline">masters</span> in swe. ultimately want to be a <span className="underline">product manager</span>. :)
          </p>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="#about" className="btn-outline">more about me</a>
          <a href="#projects" className="btn-outline">my work</a>
          <a href="/portfolio/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline">my resume</a>
        </div>
      </div>
      
      {/* Contact sidebar */}
      <div className="lg:col-span-1 border border-black/10 p-6 space-y-6">
        <div>
          <p className="font-bold text-sm mb-4">get in touch</p>
          <p className="text-sm mb-4 text-black/70">let's build something together. always open to discussing new opportunities and interesting projects.</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <FiMail className="w-4 h-4 text-black/60" />
            <span>youssef.ouarad@polymtl.ca</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <FiMapPin className="w-4 h-4 text-black/60" />
            <span>montreal, canada</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-black/10">
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/in/youssef-ouarad-069828234/" target="_blank" rel="noreferrer" className="btn-outline text-xs">
              <FiLinkedin className="mr-2" /> linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

