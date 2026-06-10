import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2, Megaphone } from "lucide-react"

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
        <div className="font-bold flex items-center gap-2 text-green-400">
          <Megaphone className="w-4 h-4" />
          Looking for a job!!
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up text-white">
        I&apos;m a 24 y/o studying the European Master's in Software Engineering. I love building and solving for the people. I enjoy language design. If I&apos;m not coding, I&apos;m probably
        playing trading card games, listening to podcasts or helping my community in my university.
      </p>
    </header>
  )
}
