import About from "@/components/HomePage/AboutUs/AboutUs";
import Carousel from "@/components/HomePage/Carousel/Carousel";
import ContactInfo from "@/components/HomePage/ContactInfo/ContactInfo";
import OurTeam from "@/components/HomePage/OurTeam/OurTeam";
import Services from "@/components/HomePage/Services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Carousel></Carousel>
      <About></About>
      <Services></Services>
      <ContactInfo></ContactInfo>
      <OurTeam></OurTeam>
    </main>
  );
}
