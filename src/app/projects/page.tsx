import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "DASOS UPM",
    description:
      "Data Analysis System for University Projects - a comprehensive TypeScript-based platform for academic data processing and visualization",
    role: "creator and maintainer",
    period: "feb 2025 - present",
    achievements: [
      "developed robust data processing pipeline for academic research",
      "implemented real-time visualization dashboard for data analysis",
      "created comprehensive documentation for university-wide adoption",
      "integrated with multiple data sources and APIs"
    ],
    technologies: [
      "typescript",
      "node.js",
      "python",
      "chart.js",
      "academic research tools",
      "api integration"
    ],
    href: "https://dasos-upm-e2ck.vercel.app/",
  },
  {
    title: "Planificator",
    description: "Android calendar application with mood-based event registry for daily activity tracking",
    role: "creator and maintainer",
    period: "apr 2024",
    achievements: [
      "developed intuitive mood-based event categorization system",
      "implemented local data persistence for daily event tracking",
      "designed user-friendly interface for seamless calendar interaction",
      "created custom mood indicators and analytics dashboard"
    ],
    technologies: ["java", "android", "sqlite", "material design"],
    href: "https://github.com/henny-hen/Planificator",
  },
  {
    title: "PDL-final",
    description: "Programming Language Processor implementing JavaScript-like syntax with lexical, syntactic and semantic analyzers",
    role: "creator",
    period: "jun 2023",
    achievements: [
      "implemented complete language processor from scratch using PyLex",
      "built lexical analyzer for tokenization and pattern recognition",
      "developed syntactic analyzer for parsing and AST generation",
      "created semantic analyzer for type checking and error detection"
    ],
    technologies: ["python", "pylex", "compiler design", "language processing"],
    href: "https://github.com/henny-hen/PDL-final",
  },
  {
    title: "proyectoEmocional",
    description: "Intelligent system for emotional analysis of tweets with interactive GUI and sentiment classification",
    role: "creator",
    period: "may 2023",
    achievements: [
      "built machine learning pipeline for sentiment analysis on social media data",
      "implemented natural language processing for Spanish tweet analysis",
      "developed interactive GUI for real-time emotion detection and visualization",
      "integrated Twitter API for live data collection and processing"
    ],
    technologies: ["java", "machine learning", "nlp", "twitter api", "sentiment analysis"],
    href: "https://github.com/henny-hen/proyectoEmocional",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i love building tools
        that make people&apos; lives easier and exploring new technologies
        along the way.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.nexxel.dev/og/home?title=projects",
      },
    ],
  },
}
