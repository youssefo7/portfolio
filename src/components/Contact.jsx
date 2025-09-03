import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  return (
    <div>
      <p className="font-bold text-sm mb-6">get in touch</p>
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-sm mb-4">let's build something together. always open to discussing new opportunities and interesting projects.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <FiMail className="w-4 h-4" />
              <span>youssef.ouarad@polymtl.ca</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiPhone className="w-4 h-4" />
              <span>(438) 276-6252</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiMapPin className="w-4 h-4" />
              <span>montreal, canada</span>
            </div>
          </div>
        </div>
        
        <div>
          <p className="font-bold text-sm mb-4">connect with me</p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:youssef.ouarad@polymtl.ca" className="btn-outline">
              <FiMail className="mr-2" /> email
            </a>

            <a href="https://www.linkedin.com/in/youssef-ouarad-069828234/" target="_blank" rel="noreferrer" className="btn-outline">
              <FiLinkedin className="mr-2" /> linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

