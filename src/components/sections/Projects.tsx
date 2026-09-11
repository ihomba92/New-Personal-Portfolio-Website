import { ArrowRight, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/data/portfolio"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
      <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-muted">
            Portfolio Highlights
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ivory sm:text-4xl lg:text-5xl">
            Featured Work
          </h2>
        </div>
        <p className="mt-4 max-w-md text-sm text-brand-muted sm:text-base md:mt-0">
          Full-stack builds spanning Flask/PostgreSQL backends and React frontends,
          plus earlier vanilla JS and semantic HTML labs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="group flex flex-col justify-between">
            <div>
              <CardContent className="pb-0">
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                    {project.tag}
                  </span>
                  <Badge variant={project.live ? "live" : "default"}>
                    {project.badge}
                  </Badge>
                </div>
                <CardTitle className="mb-3 transition-colors group-hover:text-neutral-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="mb-2">
                  {project.description}
                </CardDescription>
              </CardContent>
            </div>
            <CardFooter>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-ivory group-hover:underline"
              >
                <span>{project.linkLabel}</span>
                {project.live ? (
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                )}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
