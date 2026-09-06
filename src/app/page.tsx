import { AwardSection } from "@/components/AwardSection";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { QuickInfo } from "@/components/QuickInfo";
import { Reveal } from "@/components/Reveal";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { SocialSection } from "@/components/SocialSection";
import { VisitSection } from "@/components/VisitSection";

export default function Home() {
  return (
    <main id="main" className="block w-full">
      <Hero />
      <QuickInfo />
      <Reveal>
        <ReviewCarousel />
      </Reveal>
      <Reveal>
        <AwardSection />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <VisitSection />
      </Reveal>
      <Reveal>
        <SocialSection />
      </Reveal>
    </main>
  );
}
