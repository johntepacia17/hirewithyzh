import { About } from "@/components/sections/About";
import { Banner } from "@/components/sections/Banner";
import { Founder } from "@/components/sections/Founder";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <HowItWorks />
      <Services />
      <Founder />
    </>
  );
}
