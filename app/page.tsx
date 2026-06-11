import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PhoneScroll } from "@/components/sections/PhoneScroll";
import { Problem } from "@/components/sections/Problem";
import { Security } from "@/components/sections/Security";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Problem />
        <PhoneScroll />
        <Security />
      </main>
      <Footer />
    </>
  );
}
