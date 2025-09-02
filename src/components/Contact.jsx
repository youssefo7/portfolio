import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  return (
    <div>
      <h2 className="section-title">CONTACT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-black/80 dark:text-white/80 mb-6">Let's build something together. I'm always open to discussing new opportunities and interesting projects.</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-black/80 dark:text-white/80">
              <FiMail className="w-4 h-4" />
              <span>youssef.ouarad@polymtl.ca</span>
            </div>
            <div className="flex items-center gap-3 text-black/80 dark:text-white/80">
              <FiPhone className="w-4 h-4" />
              <span>(438) 276-6252</span>
            </div>
            <div className="flex items-center gap-3 text-black/80 dark:text-white/80">
              <FiMapPin className="w-4 h-4" />
              <span>Montreal, Canada</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-black/90 dark:text-white/90">Connect With Me</h3>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:youssef.ouarad@polymtl.ca" className="btn-outline">
              <FiMail className="mr-2" /> Email Me
            </a>
            <a href="https://github.com/youssefouarad" target="_blank" rel="noreferrer" className="btn-outline">
              <FiGithub className="mr-2" /> GitHub
            </a>
            <a href="https://linkedin.com/in/youssefouarad" target="_blank" rel="noreferrer" className="btn-outline">
              <FiLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

