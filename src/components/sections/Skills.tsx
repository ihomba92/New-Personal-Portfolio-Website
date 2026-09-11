import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/data/portfolio"

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-muted">
            Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ivory sm:text-4xl">
            Engineering Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <Card key={skill.title}>
              <CardContent className="pt-7">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-accent">
                  <span className="font-mono text-sm font-bold">{skill.icon}</span>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-brand-ivory">{skill.title}</h4>
                <p className="text-xs leading-relaxed text-brand-muted sm:text-sm">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
