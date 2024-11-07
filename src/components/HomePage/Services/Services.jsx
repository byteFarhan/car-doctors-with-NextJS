import SectionIntro from "@/components/SectionIntro/SectionIntro";
import ServiceCard from "./ServiceCard/ServiceCard";
import getTopServices from "@/lib/getTopServices";
import Link from "next/link";

const Services = async () => {
  const topServices = await getTopServices();

  return (
    <>
      <section id="services" className="mt-32 mb-20">
        <SectionIntro
          sectionCategory="Service"
          sectionTitle="Our Service Area"
          sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topServices &&
            topServices?.map((service) => (
              <ServiceCard key={service.service_id} service={service} />
            ))}
        </div>
        <Link href={"/services"}>
          <button className="block mx-auto my-10 btn-transparent btn-transparent-red">
            More Services
          </button>
        </Link>
      </section>
    </>
  );
};

export default Services;
