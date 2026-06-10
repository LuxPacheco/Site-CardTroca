import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PhoneScroll } from "@/components/sections/PhoneScroll";
import { Problem } from "@/components/sections/Problem";
import { Geolocation } from "@/components/sections/Geolocation";
import { MatchSystem } from "@/components/sections/MatchSystem";
import { Search } from "@/components/sections/Search";
import { Wishlist } from "@/components/sections/Wishlist";
import { Chat } from "@/components/sections/Chat";
import { Security } from "@/components/sections/Security";
import { Plans } from "@/components/sections/Plans";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <PhoneScroll />
        <Problem />
        <Geolocation />
        <MatchSystem />
        <section id="funcionalidades" aria-label="Funcionalidades">
          <Search />
          <Wishlist />
          <Chat />
        </section>
        <Security />
        <Plans />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
