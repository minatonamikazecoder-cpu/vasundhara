import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-1/Section1";
import Section2 from "@/shared/sections/index-1/Section4";
import Section5 from "@/shared/sections/index-1/Section11";
import Section6 from "@/shared/sections/about-1/Section4";

export default function Services1Page() {
  return (
    <>
      <PageMeta title="Our Services | Vasundhara Financial Services" />
                <Section1 />
                <Section2 />
                <Section5 classList="border-top-100" />
                <Section6 classList="bg-neutral-50" />
    </>
  );
}
