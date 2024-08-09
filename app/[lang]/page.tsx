import React, { cache } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import TestimonialsSection from "./components/Testimonials";
import ContactSection from "./components/Contact";
import FaqSection from "./components/Faq";
import Footer from "./components/Footer";

const getLandingPageData = async (lang: any) => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;
  /*  let req = await fetch(url, { next: { revalidate: 10 } }); */
  let req = await fetch(url, { cache: "no-cache" });

  const storyData = await req.json();
  const {
    nav_section,
    hero_section,
    services_section,
    testimonials_section,
    contact_section,
    faq_section,
    footer_section,
  } = storyData.story.content;
  //Hello world
  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
    testimonials_section: testimonials_section[0],
    contact_section: contact_section[0],
    faq_section: faq_section[0],
    footer_section: footer_section[0],
  };
};

const Home = async ({ params: { lang } }: any) => {
  const storyData = await getLandingPageData(lang);
  return (
    <>
      <Navbar data={storyData.nav_section} />
      <HeroSection data={storyData.hero_section} />
      <ServicesSection data={storyData.services_section} />
      <TestimonialsSection data={storyData.testimonials_section} />
      <ContactSection data={storyData.contact_section} />
      <FaqSection data={storyData.faq_section} />
      <Footer data={storyData.footer_section} />
    </>
  );
};

export default Home;
