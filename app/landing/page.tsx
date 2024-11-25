"use client";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}
