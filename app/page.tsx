import Collab from "@/components/Collab";
import Discover from "@/components/Discover";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import Pricing from "@/components/Pricing";
import QnA from "@/components/QnA";
import RoadMap from "@/components/RoadMap";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex w-11/12 items-center justify-center flex-col mx-auto">
        <Discover />
        <Feature />
        <Identity />
        <RoadMap />
        <Collab />
        <Pricing />
        <Testimonial />
        <QnA />
      </div>
    </div>
  );
}
