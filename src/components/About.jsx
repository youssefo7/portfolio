export default function About() {
  return (
    <div className="section">
      <h2 className="section-title">About</h2>
      <div className="max-w-3xl space-y-6">
        <p className="text-black/80 dark:text-white/80 leading-relaxed">
          I'm a Software Engineering student at Polytechnique Montreal with a minor in Cybersecurity, 
          graduating in 2025 with a 3.4/4 GPA. Currently serving as a Technical Lead at Thales, 
          where I lead a 3-person engineering team and modernize legacy systems.
        </p>
        <p className="text-black/80 dark:text-white/80 leading-relaxed">
          My expertise spans full-stack development with languages like C++, Python, Java, JavaScript/TypeScript, 
          and Go. I work with modern frameworks including React and Angular, and have experience with 
          cloud technologies like AWS and Azure, along with DevOps practices.
        </p>
        <p className="text-black/80 dark:text-white/80 leading-relaxed">
          Beyond my professional work, I founded Aube, where I develop quantitative trading models 
          using Python and C++, managing portfolios while maintaining a Sharpe ratio above 1. 
          I'm passionate about building scalable systems and optimizing performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-black/90 dark:text-white/90">Technical Skills</h3>
            <ul className="text-black/80 dark:text-white/80 text-sm space-y-1">
              <li>Languages: C++, Python, Java, JavaScript/TypeScript, Go</li>
              <li>Frameworks: React, Angular, Electron</li>
              <li>Cloud/DevOps: AWS, Azure, Docker, Kubernetes, CI/CD</li>
              <li>Data: MySQL, PostgreSQL, MongoDB</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-black/90 dark:text-white/90">Languages</h3>
            <ul className="text-black/80 dark:text-white/80 text-sm space-y-1">
              <li>French - Fluent (spoken and written)</li>
              <li>English - Fluent (spoken and written)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}