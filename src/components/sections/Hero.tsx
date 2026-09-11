import { Download, ExternalLink, FileText, Github, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { coreTech, profile } from "@/data/portfolio"

function TechIcon({ icon }: { icon: (typeof coreTech)[number]["icon"] }) {
  if (icon === "react") {
    return (
      <svg className="h-4 w-4 fill-current text-cyan-400" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2.2" />
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    )
  }
  if (icon === "shield") {
    return <ShieldCheck className="h-4 w-4 text-yellow-400" />
  }
  if (icon === "github") {
    return <Github className="h-4 w-4 fill-current text-white" />
  }
  return (
    <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-blue-400 text-[8px] font-extrabold text-black">
      {icon}
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-7">
          <h1 className="mb-6 text-7xl font-extrabold leading-none tracking-tighter text-white sm:text-8xl md:text-7xl">
            Hello
          </h1>

          <p className="mb-12 max-w-xl text-base font-normal leading-relaxed text-brand-muted sm:text-lg md:text-xl">
            This is <strong className="font-medium text-brand-ivory">{profile.name}</strong>,
            a software engineer building scalable, secure applications with Python and
            Flask on the backend and responsive interfaces with React.js on the front end. I have a strong foundation in Software engineering principles and a passion for creating efficient, user-friendly solutions. My experience spans from developing RESTful APIs to implementing authentication and authorization mechanisms, with a focus on delivering high-quality code. 
          </p>

          <div className="pt-4">
            <h6 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-brand-muted/70">
              Core Tech &amp; Toolset
            </h6>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {coreTech.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-2 rounded-xl border-glass bg-muted px-3.5 py-2 text-xs font-medium text-neutral-300"
                >
                  <TechIcon icon={tech.icon} />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild>
              <a href={profile.resumeFile} download={profile.resumeFile}>
                <Download className="h-4 w-4" />
                <span>Download CV (PDF)</span>
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 text-neutral-400" />
                <span>View Resume (ATS)</span>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
              </a>
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="relative w-[300px] sm:w-[350px] lg:w-[380px]">
            <div className="arch-portrait-frame relative aspect-[3/4] w-full overflow-hidden border-2  bg-neutral-800 ">
              <img
                alt={`${profile.name} - Software Engineer`}
                className="h-full w-full object-cover object-top contrast-105 grayscale-[15%]"
                src="public/WhatsApp Image 2026-03-21 at 12.05.01.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* <div className="absolute -top-3 -right-4 z-20 sm:-right-6">
              <div className="floating-pill rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-white">
                Full-Stack
              </div>
            </div>
            <div className="absolute top-1/2 -left-6 z-20 -translate-y-6 sm:-left-8">
              <div className="floating-pill rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-white">
                Backend
              </div>
            </div>
            <div className="absolute top-2/3 -right-6 z-20 sm:-right-8">
              <div className="floating-pill rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-white">
                React.js
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
