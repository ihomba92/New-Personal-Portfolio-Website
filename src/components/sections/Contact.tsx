import { Github, Linkedin, Mail, Phone } from "lucide-react"

import { profile } from "@/data/portfolio"

const links = [
  {
    href: profile.linkedin,
    icon: Linkedin,
    label: "LinkedIn Profile",
    iconClassName: "text-[#0a66c2]",
  },
  {
    href: profile.github,
    icon: Github,
    label: "GitHub Profile",
    iconClassName: "text-white",
  },
  {
    href: `mailto:${profile.email}`,
    icon: Mail,
    label: "Direct Email",
    iconClassName: "text-emerald-400",
  },
  {
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
    label: profile.phone,
    iconClassName: "text-neutral-300",
  },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-muted">
          Start a Conversation
        </span>
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-brand-ivory sm:text-5xl md:text-6xl">
          Let's work together.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
          Open to software engineer roles, backend and full-stack opportunities,
          collaborative projects, and freelance engagements. Based in {profile.location}.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mb-14 inline-block text-xl font-medium text-brand-ivory underline decoration-brand-accent/40 underline-offset-8 transition-all hover:text-brand-accent hover:decoration-brand-accent sm:text-2xl md:text-3xl"
        >
          {profile.email}
        </a>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "davidihomba@gmail.com" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="floating-pill flex items-center gap-2 rounded-full px-5 py-3 text-xs font-medium text-neutral-200"
            >
              <link.icon className={`h-4 w-4 ${link.iconClassName}`} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
