import { profile } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8 lg:px-12">
        <div className="text-xs text-brand-muted">
          © 2026 Ihomba92. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-xs text-brand-muted">
          <a href="#hero" className="transition-colors hover:text-brand-ivory">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
