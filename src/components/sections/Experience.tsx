import { Briefcase, Download, ExternalLink, FileText, GraduationCap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { education, experience, profile } from "@/data/portfolio"

type TimelineItem = {
  period: string
  accent: boolean
  title: string
  subtitle: string
  description: string
  tags: string[]
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-12 border-l border-white/10 pl-8">
      {items.map((item) => (
        <div key={item.title} className="group relative">
          <div
            className={`absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-secondary transition-colors group-hover:border-white ${
              item.accent ? "border-white/30" : "border-white/20"
            }`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${item.accent ? "bg-brand-accent" : "bg-neutral-400"}`}
            />
          </div>
          <div
            className={`mb-3 inline-block rounded-full px-3 py-1 font-mono text-[11px] font-medium ${
              item.accent ? "bg-white/10 text-neutral-300" : "bg-white/5 text-brand-muted"
            }`}
          >
            {item.period}
          </div>
          <h4 className="text-lg font-semibold text-brand-ivory">{item.title}</h4>
          <div className="mb-3 text-xs font-medium text-brand-muted sm:text-sm">
            {item.subtitle}
          </div>
          <p className="mb-4 text-xs leading-relaxed text-brand-muted sm:text-sm">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Experience() {
  const experienceItems: TimelineItem[] = experience.map((item) => ({
    period: item.period,
    accent: item.accent,
    title: item.role,
    subtitle: item.org,
    description: item.description,
    tags: item.tags,
  }))

  const educationItems: TimelineItem[] = education.map((item) => ({
    period: item.period,
    accent: item.accent,
    title: item.title,
    subtitle: item.org,
    description: item.description,
    tags: item.tags,
  }))

  return (
    <section id="experience" className="border-t border-white/10 bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-muted">
            Career &amp; Background
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ivory sm:text-4xl lg:text-5xl">
            Experience &amp; Education
          </h2>
          <p className="mt-4 max-w-xl text-sm text-brand-muted sm:text-base">
            A chronology of practical software development, client-facing projects,
            and dedicated technical education.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            <Button asChild>
              <a href={profile.resumeFile} download={profile.resumeFile}>
                <Download className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 text-neutral-400" />
                <span>View Full CV (ATS)</span>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-accent">
                <Briefcase className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-brand-ivory">
                Work Experience
              </h3>
            </div>
            <Timeline items={experienceItems} />
          </div>

          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand-accent">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-brand-ivory">
                Education &amp; Credentials
              </h3>
            </div>
            <Timeline items={educationItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
