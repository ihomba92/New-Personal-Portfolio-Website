import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Experience } from "@/components/sections/Experience"
import { Footer } from "@/components/sections/Footer"
import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"

function App() {
  return (
    <div className="selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
