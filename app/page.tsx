import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Experience from "@/components/portfolio/Experience";
import Header from "@/components/portfolio/Header";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kovalchuk Portfolio</title>
        <meta name="description" content="A software engineer's portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
