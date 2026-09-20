import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import Transmissions from "@/components/sections/Transmissions";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ControlRoom from "@/components/sections/ControlRoom";
import About from "@/components/sections/About";
import Formula from "@/components/sections/Formula";
import Insights from "@/components/sections/Insights";
import Footer from "@/components/sections/Footer";
import Preloader from "@/components/ui/Preloader";
import Navigation from "@/components/ui/Navigation";
import HUD from "@/components/ui/HUD";
import { client } from "@/sanity/client";

export const revalidate = 60;

const sectionMap: Record<string, React.FC<any>> = {
  heroSection: Hero,
  statementSection: Statement,
  transmissionsSection: Transmissions,
  servicesSection: Services,
  processSection: Process,
  testimonialsSection: Testimonials,
  controlRoomSection: ControlRoom,
  aboutSection: About,
  formulaSection: Formula,
  insightsSection: Insights,
};

export default async function Home() {
  let page, projects, services, testimonials, insights;
  
  try {
    [page, projects, services, testimonials, insights] = await Promise.all([
      client.fetch(`*[_type == "page" && slug.current == "home"][0]`),
      client.fetch(`*[_type == "project"] | order(orderRank asc)`),
      client.fetch(`*[_type == "service"] | order(orderRank asc)`),
      client.fetch(`*[_type == "testimonial"] | order(orderRank asc)`),
      client.fetch(`*[_type == "insight"] | order(publishedAt desc) {
        _id,
        num,
        category,
        title,
        excerpt,
        readTime,
        "img": image.asset->url
      }`)
    ]);
  } catch (e) {
    console.error("Sanity fetch failed. Falling back to default data.", e);
    projects = []; services = []; testimonials = []; insights = [];
  }

  const globalData = { projects, services, testimonials, insights };

  return (
    <main className="w-full bg-ink min-h-screen text-paper selection:bg-accent selection:text-paper relative">
      <Preloader />
      <Navigation />
      <HUD />
      
      {page?.sections ? (
        page.sections.map((section: any, idx: number) => {
          const Component = sectionMap[section._type];
          if (!Component) return null;
          
          // Map the correct global array to 'data' prop if the component expects it
          let componentData = null;
          if (section._type === 'transmissionsSection') componentData = projects;
          else if (section._type === 'servicesSection') componentData = services;
          else if (section._type === 'testimonialsSection') componentData = testimonials;
          else if (section._type === 'insightsSection') componentData = insights;

          return <Component key={section._key || idx} cmsData={section} data={componentData} />;
        })
      ) : (
        <>
          <Hero />
          <Statement />
          <Transmissions data={projects} />
          <Services data={services} />
          <Process />
          <Testimonials data={testimonials} />
          <ControlRoom />
          <About />
          <Formula />
          <Insights data={insights} />
        </>
      )}
      
      <Footer />
    </main>
  );
}
