import HeroSection from "@/components/HeroSection";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import SomeSection from "@/components/SomeSection";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className={cn("w-full", "[&>section]:h-dvh [&>section]:w-full")}>
      <HeroSection />
      <HorizontalScrollSection />
      <SomeSection />
    </main>
  );
}
