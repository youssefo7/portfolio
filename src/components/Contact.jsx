import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Contact() {
  return (
    <div>
      <h2 className="section-title">CONTACT</h2>
      <p className="text-white/80">Let's build something together.</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href="mailto:you@example.com" className="btn-outline">Email Me</a>
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer" className="btn-outline">
          <FiGithub className="mr-2" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" className="btn-outline">
          <FiLinkedin className="mr-2" /> LinkedIn
        </a>
        <a href="https://twitter.com/yourname" target="_blank" rel="noreferrer" className="btn-outline">
          <FiTwitter className="mr-2" /> Twitter
        </a>
      </div>
    </div>
  )
}

