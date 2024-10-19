import About from "@/components/HomePage/AboutUs/AboutUs";
import Carousel from "@/components/HomePage/Carousel/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Carousel></Carousel>
      <About></About>
    </main>
  );
}
