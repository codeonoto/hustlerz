import Discover from "@/components/Discover";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Discover/>
      <Feature/>
    </div>
  );
}
