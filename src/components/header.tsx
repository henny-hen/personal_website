import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Henny Sánchez" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Madrid, Spain
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Software Engineer Intern @ Axon Networks
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a 23 y/o cs undergrad student. I love building things, designing and
        solving problems. I enjoy language design, theoretical computer science
        and I live on the terminal. if i&apos;m not coding, i&apos;m probably
        playing trading card games, listening to podcasts or obsessing over keychains.
      </p>
    </header>
  )
}
