import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { getGitHubStats } from "@/lib/github";

export default async function Home() {
  const stats = await getGitHubStats();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About stats={stats} />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
