import { Download, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { profile } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-secondary py-24">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <span className="mb-8 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-muted">
          About Me
        </span>

        <h2 className="mb-8 text-2xl font-medium leading-snug tracking-tight text-brand-ivory sm:text-3xl md:text-4xl md:leading-tight lg:text-5xl">
          I'm <span className="font-bold text-white">David</span>, a software engineer
          with a foundation in backend development and Information Science, specializing
          in scalable, secure applications and responsive interfaces.
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg">
          I recently designed and shipped Deliveroo, a full-stack parcel delivery
          platform featuring JWT authentication with role-based access control,
          RESTful APIs, real-time courier tracking with Google Maps integration, and
          automated email notifications now live in production. I bring a
          distinctive combination of technical rigor and a background in media
          production and public relations, with strong attention to detail, workflow
          optimization, and clear communication with cross-functional teams.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href={profile.resumeFile} download={profile.resumeFile}>
              <Download className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </Button>
          <Button asChild size="lg">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>View GitHub Repositories</span>
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
