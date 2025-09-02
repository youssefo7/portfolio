export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="section py-8">
        <p className="text-center text-white/60 text-xs uppercase tracking-widest">
          © {year} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

