import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { FadeUp } from "./FadeUp";
import { ArrowLeft } from "lucide-react";
import { Header, Footer } from "./Shared";
import { motion } from "motion/react";
import { useParallax } from "../hooks/useParallax";
import { MediaCarousel } from "./MediaCarousel";

const sidebarLinks = [
  "Overview",
  "Problem",
  "Solution",
  "Research",
  "Design Process",
  "Outcomes",
  "Reflection",
];

const overviewDetails = [
  { header: "Role", subheader: "Co-Designer" },
  { header: "Timeline", subheader: "3 months" },
  { header: "Tools", subheader: "Figma" },
  { header: "Team", subheader: "2 designers" },
];

function ParallaxSubsection({
  title,
  text,
  textNodes,
  imageSrc,
  imagePlaceholder,
  imageClassName = "w-full h-auto",
  mediaElement,
}: {
  title: string;
  text?: string;
  textNodes?: React.ReactNode;
  imageSrc?: string;
  imagePlaceholder?: string;
  imageClassName?: string;
  mediaElement?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Image moves down slightly as you scroll
  const yImage = useParallax(ref, 25);
  // Text moves up slightly as you scroll (creating depth between them)
  const yText = useParallax(ref, -25);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 relative"
    >
      {/* Image Layer - Natural Dimensions, No Cropping */}
      <motion.div style={{ y: yImage }} className="w-full z-0 flex justify-start">
        {mediaElement ? (
          mediaElement
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className={imageClassName}
          />
        ) : (
          <div className="w-full aspect-[2.1/1] bg-[#D9D9D9] flex items-center justify-center">
            <span className="text-[#555555] text-lg font-medium">
              {imagePlaceholder}
            </span>
          </div>
        )}
      </motion.div>

      {/* Text Layer - Floats at a different speed */}
      <motion.div style={{ y: yText }} className="flex flex-col gap-2 bg-background z-10 relative">
        <span className="text-[#555555] text-[16px] leading-[25.6px] tracking-[0px] font-medium">
          {title}
        </span>
        {textNodes ? (
          textNodes
        ) : (
          <p className="text-[#333333] text-[18px] leading-[28px] tracking-[0px]">
            {text}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export function RichoosCaseStudy() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sidebarLinks.forEach((link) => {
      const sectionId = link.toLowerCase().replace(" ", "-");
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen w-full font-['Poppins',sans-serif] flex flex-col">
      <Header />

      {/* 12-Column Grid Layout */}
      <div className="flex-grow w-full px-6 md:px-12 lg:px-[70px] mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[30px] items-start relative">

          {/* SIDEBAR (Col 1-3) */}
          <aside className="hidden lg:flex lg:col-span-3 lg:sticky lg:top-32 flex-col gap-8 md:gap-16 z-10">
            <Link to="/" className="flex items-center gap-2 text-[#555555] hover:text-[#333333] transition-colors w-max">
              <ArrowLeft size={20} />
              <span className="text-[16px] leading-[25.6px]">Back</span>
            </Link>
            <nav className="flex flex-col gap-4 md:gap-6">
              {sidebarLinks.map((link, i) => {
                const sectionId = link.toLowerCase().replace(" ", "-");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={i}
                    href={`#${sectionId}`}
                    onClick={() => setActiveSection(sectionId)}
                    className={`text-[16px] leading-[25.6px] cursor-pointer transition-colors ${isActive ? "text-[#333333] font-medium" : "text-[#555555] hover:text-[#333333]"
                      }`}
                  >
                    {link}
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* MAIN CONTENT (Col 4-12) */}
          <main className="lg:col-span-9 flex flex-col gap-16 lg:gap-24">

            {/* OVERVIEW SECTION */}
            <FadeUp delay={0.1}>
            <section className="flex flex-col gap-12" id="overview">
              {/* Hero Placeholder Image - Now matching Research image width */}
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7">
                  <div className="w-full aspect-[2/1] lg:aspect-[2.1/1] bg-[#D9D9D9] flex items-center justify-center overflow-hidden">
                    <img src="/heromain.webp" alt="Hero" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="flex flex-wrap lg:grid lg:grid-cols-4 gap-4 justify-start">
                {overviewDetails.map((detail, i) => (
                  <div key={i} className="flex flex-col gap-1 pr-4 lg:pr-0">
                    <h2
                      className="text-[#555555] text-[12px] md:text-[14px] font-semibold tracking-[1px] uppercase m-0 font-['Poppins',sans-serif]"
                    >
                      {detail.header}
                    </h2>
                    <span className="text-[#333333] text-[16px] md:text-[18px] leading-[28px] tracking-[0px] font-normal font-['Poppins',sans-serif]">
                      {detail.subheader}
                    </span>
                  </div>
                ))}
              </div>

              {/* About Richoos - Uses nested grid to span from overall Col 4 to Col 10 */}
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <h2
                    className="text-[#333333] text-[32px] tracking-tight lg:tracking-[-1.28px] lg:leading-[70.4px] m-0"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    About Richoos
                  </h2>
                  <p className="text-[#555555] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] tracking-[0px]">
                    Richoos is a UAE-based packaging supplier with 18 years in the industry and over 1,500 products — but there website was old and rusted. New business came purely through word-of-mouth and personal connections.
                  </p>
                </div>
              </div>
            </section>
          </FadeUp>

            {/* PROBLEM SECTION */}
            <FadeUp delay={0.1}>
            <section className="flex flex-col gap-12" id="problem">
              {/* Spans from overall Col 4 to Col 10 */}
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <h2
                    className="text-[#333333] text-[32px] tracking-tight lg:tracking-[-1.28px] lg:leading-[70.4px] m-0"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Problem
                  </h2>
                  <p className="text-[#555555] text-[18px] leading-[28px] tracking-[0px]">
                    Richoos relied entirely on word-of-mouth and personal connections to acquire clients. Hotels, cafeterias, and pharmacies looking for a packaging supplier had no way to discover, evaluate, or reach out to them independently.
                  </p>
                </div>
              </div>
            </section>
          </FadeUp>

            {/* SOLUTION SECTION */}
            <FadeUp delay={0.1}>
            <section className="flex flex-col gap-12" id="solution">
              {/* Spans from overall Col 4 to Col 10 */}
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <h2
                    className="text-[#333333] text-[32px] tracking-tight lg:tracking-[-1.28px] lg:leading-[70.4px] m-0"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Solution
                  </h2>
                  <p className="text-[#555555] text-[18px] leading-[28px] tracking-[0px]">
                    A branded landing page paired with an e-commerce store gave Richoos a credible digital presence — letting procurement managers find them, browse 1,500+ products, and initiate contact without a single cold call.
                  </p>
                </div>
              </div>
            </section>
          </FadeUp>

            {/* RESEARCH SECTION */}
            <FadeUp delay={0.1}>
            <section className="flex flex-col gap-12" id="research">
              {/* Spans from overall Col 4 to Col 10 */}
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-16">
                  <h2
                    className="sticky top-0 z-20 bg-background pt-8 pb-4 -mt-8 mb-4 text-[#333333] text-[32px] tracking-tight lg:tracking-[-1.28px] lg:leading-[70.4px]"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Research
                  </h2>

                  <div className="flex flex-col gap-16 lg:gap-24">
                    <ParallaxSubsection
                      title="Leading with proof, not promises."
                      text="Hotpack (direct competitor) gave us the page structure. Their approach of leading with trust signals — client logos, statistics — before showing product categories was something we validated and reproduced. It earns credibility before asking the visitor to engage."
                      imageSrc="/hotpac.webp"
                    />
                    <ParallaxSubsection
                      title="Making browsing feel effortless"
                      text="Noon shaped the e-commerce side. Their grocery section showed how to handle a large catalog without overwhelming the user — category quick links, offer banners, and filters that narrow choices with minimal cognitive effort."
                      imageSrc="/noon.webp"
                    />
                    <ParallaxSubsection
                      title="Finding the right pattern"
                      text="Beyond competitors, a few specific patterns stood out from broader reference gathering — Airbnb's hero search bar as a way to make product discovery the first action, a 3-step 'how it works' pattern (via Pinterest) to simplify what is otherwise a complex B2B process, and Samsung's company timeline as a reference for communicating brand history with visual weight."
                      imageSrc="/inspiration.webp"
                    />
                  </div>
                </div>
              </div>
            </section>
          </FadeUp>

            {/* DESIGN PROCESS SECTION */}
            <FadeUp delay={0.1}>
            <section className="flex flex-col gap-12" id="design-process">
              {/* Spans from overall Col 4 to Col 10 */}
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-16">
                  <h2
                    className="sticky top-0 z-20 bg-background pt-8 pb-4 -mt-8 mb-4 text-[#333333] text-[32px] tracking-tight lg:tracking-[-1.28px] lg:leading-[70.4px]"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Design Process
                  </h2>

                  <div className="flex flex-col gap-16 lg:gap-24">
                    <ParallaxSubsection
                      title="Visual Identity"
                      text="Unlike the layout decisions, the visual identity wasn't something we had to invent — Richoos came to us with their brand colors, logo, and tone already defined. That gave us a strong starting point, but applying it well still took iteration: figuring out where green should dominate versus recede, how much white space the brand could hold, and tuning contrast and hierarchy through trial and error until the identity felt native to the page rather than just applied on top of it."
                      imageSrc="/visusalIdentity.png"
                      imageClassName="w-[300px] h-[300px] object-cover rounded-[16px]"
                    />

                    <ParallaxSubsection
                      title="Hero Section"
                      textNodes={
                        <div className="flex flex-col gap-4 text-[#333333] text-[18px] leading-[28px] tracking-[0px]">
                          <p>
                            We started with a standard layout — headline, CTA, single image, client logos. Each version pushed us closer to the real insight: visitors don't just want a tagline, they want proof. So we rebuilt the hero around product visuals, a search bar (inspired by Noon and Airbnb), and trust signals  alongside hard numbers
                          </p>
                          <p>
                            The final hero answers three questions before a visitor scrolls once: what do they sell, can I trust them, and can I find what I need?
                          </p>
                        </div>
                      }
                      mediaElement={
                        <MediaCarousel
                          media={[
                            { type: 'video', src: '/herogif.webm' },
                            { type: 'image', src: '/hero1.webp' },
                            { type: 'image', src: '/hero2.webp' },
                            { type: 'image', src: '/hero3.webp' }
                          ]}
                        />
                      }
                    />

                    <ParallaxSubsection
                      title="Custom Packaging Section"
                      textNodes={
                        <div className="flex flex-col gap-4 text-[#333333] text-[18px] leading-[28px] tracking-[0px]">
                          <p>
                            Early versions explored static "place your design here" mockups and plain before/after banners — functional, but passive. They told visitors custom packaging was possible without letting them feel it.
                          </p>
                          <p>
                            The final design uses a slider: drag across a plain box and watch it transform into a fully branded one.
                          </p>
                        </div>
                      }
                      mediaElement={
                        <MediaCarousel
                          media={[
                            { type: 'video', src: '/custom.webm' },
                            { type: 'image', src: '/custom1.webp' },
                            { type: 'image', src: '/custom2.webp' }
                          ]}
                        />
                      }
                    />

                    <ParallaxSubsection
                      title="Why Choose Us Section"
                      textNodes={
                        <div className="flex flex-col gap-4 text-[#333333] text-[18px] leading-[28px] tracking-[0px]">
                          <p>
                            We tried two accordion patterns first — one that auto-advanced on a timer, another that expanded on scroll. Both worked, but felt like something we'd seen on every other B2B site. They explained the value without making the visitor engage with it.
                          </p>
                          <p>
                            We found a stacked-card library: layered cards that fly up and out as users scroll. Paired with concise copy, the motion rewards scrolling instead of dumping all points on screen at once.
                          </p>
                        </div>
                      }
                      mediaElement={
                        <MediaCarousel
                          media={[
                            { type: 'video', src: '/wcu.webm' },
                            { type: 'image', src: '/wcu1.webp' },
                            { type: 'image', src: '/wcu2.webp' }
                          ]}
                        />
                      }
                    />

                    <ParallaxSubsection
                      title="How It Works"
                      text="We explored more interactive formats — animated steps, scroll-triggered reveals — similar to what we did elsewhere on the page. But for this section, we deliberately pulled back. The whole point of &quot;How It Works&quot; is to reassure a buyer that ordering from Richoos isn't complicated, so the design needed to feel as simple as the process itself."
                      mediaElement={
                        <MediaCarousel
                          media={[
                            { type: 'image', src: '/hiw.webp' },
                            { type: 'image', src: '/hiw1.webp' },
                            { type: 'image', src: '/hiw2.webp' }
                          ]}
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </FadeUp>

            {/* Outcomes Section */}
            <FadeUp delay={0.1}>
            <section className="flex flex-col gap-12" id="outcomes">
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-16">
                  <h2
                    className="text-[#333333] text-[32px] tracking-tight lg:tracking-[-1.28px] lg:leading-[70.4px] m-0"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Outcomes
                  </h2>
                  <div className="flex flex-col gap-6 items-start">
                    <p className="text-[#333333] text-[18px] leading-[28px] tracking-[0px]">
                      The site is live and now serves as Richoos's official web presence. We don't have formal analytics, but the client confirmed something that matters most: new clients have found and reached out to Richoos directly through the website — a channel that didn't exist before.
                    </p>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('https://richoos.com/', '_blank');
                      }}
                      className="bg-[#041F39] text-[#F8FAFB] flex items-center justify-center px-6 py-3 rounded-full shadow-md hover:bg-[#0057FF] transition-colors cursor-pointer mt-2"
                    >
                      <span className="text-[14px] md:text-[15px] font-semibold whitespace-nowrap font-['Poppins',sans-serif]">Visit Richoos</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </FadeUp>

            {/* Reflection Section */}
            <FadeUp delay={0.1}>
            <section className="flex flex-col gap-12" id="reflection">
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-[30px]">
                <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-16">
                  <h2
                    className="text-[#333333] text-[32px] tracking-tight lg:tracking-[-1.28px] lg:leading-[70.4px] m-0"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    Reflection
                  </h2>
                  <div className="flex flex-col gap-4 text-[#333333] text-[18px] leading-[28px] tracking-[0px]">
                    <p>
                      Even though my role was research and layout, the collaborative nature of this project pulled me into nearly every part of it — visual design, copy, interaction details, all of it. That hands-on exposure ended up teaching me more than staying in my lane ever would have.
                    </p>
                    <p>
                      The biggest takeaway: a website that simply presents information isn't enough. The sections that worked best — the hero search bar, the custom packaging slider, the stacked cards — weren't the ones with the most information, they were the ones people could actually interact with. That's a principle I now carry into every project: don't just tell people something, give them a reason to engage with it.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeUp>

          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
}
