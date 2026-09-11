import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a
          href="#hero"
          className="group flex items-center gap-1 text-xl font-bold tracking-tight text-brand-ivory sm:text-xl"
        >
          <span>Ihomba92</span>
          <span className="relative -top-2 text-xs font-normal text-brand-muted transition-colors group-hover:text-brand-ivory">
            ®
          </span>
        </a>

        <nav
          aria-label="Main Navigation"
          className="hidden items-center space-x-8 text-sm font-medium text-brand-muted md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-ivory"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild>
          <a href="#contact" className="inline-flex items-center gap-2">
            <span>Contact</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
          </a>
        </Button>
      </div>
    </header>
  )
}
