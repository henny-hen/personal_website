import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "Axon Networks",
    role: "Software Engineer Intern",
    period: "jan 2025 - may 2025",
    description:
      "Optimizing and maintaining the company's internal platforms and products' algorithms, focusing on performance improvements, new features, and scalability.",
    href: "https://www.axon-networks.com/",
  },
  {
    title: "Zaleos",
    role: "Software Engineer Intern",
    period: "sep 2025 - mar 2026",
    description:
      "Delivering features in Java and Golang under the NGCS Call Location and Services team on a Linux-based environment.",
    href: "https://zaleos.net/es/",
  },
]

const projectItems = [
  {
    title: "DASOS UPM",
    role: "creator and maintainer",
    description:
      "open-source project for the extraction and analysis of data from the UPM's academic system, using statistic advanced metrics.",
    href: "https://dasos-upm-e2ck.vercel.app/",
  },
  {
    title: "Planificator",
    role: "creator",
    description: "Android calendar application with mood-based event registry for daily activity tracking.",
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
