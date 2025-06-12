import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "Axon Networks",
    role: "Software Engineer Intern",
    period: "sep 2024 - may 2025",
    description:
      "building a decentralized identity protocol as part of ENS labs",
    href: "https://www.axon-networks.com/",
  },
]

const projectItems = [
  {
    title: "DASOS UPM",
    role: "creator and maintainer",
    description:
      "open-source project for the extraction and analysis of data from the UPM's academic system",
    href: "https://dasos-upm-e2ck.vercel.app/",
  },
  {
    title: "Planificator",
    role: "creator",
    description: "Android calendar application with mood-based event registry for daily activity tracking",
    href: "https://github.com/henny-hen/Planificator",
  },
]

{/**       <BlogSection /> */}

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workItems} />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
