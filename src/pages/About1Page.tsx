import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/about-1/Section1";
import Section2 from "@/shared/sections/index-2/Section9";
import Section3 from "@/shared/sections/about-1/Section2";
import Section8 from "@/shared/sections/about-1/Section5";

export default function About1Page() {
  return (
    <>
      <PageMeta title="About Us | Vasundhara Financial Services" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section8 />
    </>
  );
}
