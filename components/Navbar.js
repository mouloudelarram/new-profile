import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="text-lg font-semibold tracking-tight">Mouloud El Arram</div>
        <nav className="space-x-6 hidden md:flex text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
