import { Link } from "react-router";
import imgProjectImage from "../../imports/Frame1/e853e1175dc60b6082fea933da3193da9e99e778.png";
import imgExternalLink from "../../imports/Frame1/ebd34b57f034b9174dcd8c7dd8b135645a23ece6.png";
import { Header, Footer } from "./Shared";
import { FadeUp } from "./FadeUp";

const experiences = [
  { year: "2026", title: "UI/UX QA Intern", company: "WizeX" },
  { year: "2025", title: "Web Design Intern", company: "BigBytes Agency" },
  { year: "2025", title: "Web Designer Intern", company: "Govt. Hospital, Punalur" },
  { year: "2026", title: "B.Tech, CS & Business Systems", company: "RSET, Kochi", isEdu: true },
];

export function PortfolioHero() {
  return (
    <div className="bg-background min-h-screen w-full text-foreground overflow-x-hidden font-['Poppins',sans-serif]">
      <Header />

      {/* ── HERO ── */}
      <FadeUp>
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-8 px-6 md:px-12 lg:px-[70px] mt-10 md:mt-16 lg:mt-[80px]">
        {/* Headline */}
        <div className="lg:w-7/12 xl:w-1/2">
          <h1
            className="text-[#333333] text-5xl md:text-6xl lg:text-[64px] tracking-tight lg:tracking-[-1.28px] leading-[1.1] lg:leading-[70.4px] max-w-[555px]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Designing and building web products.
          </h1>
        </div>

        {/* Experience list */}
        <div className="lg:w-5/12 xl:w-1/2 flex flex-col gap-6 lg:gap-8 lg:pl-12 xl:pl-24">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-6 md:gap-12 items-start group">
              <div className="w-16 md:w-20 shrink-0 pt-1.5">
                <span className="text-[#555555] text-xs lg:text-[12px] lg:leading-[19.6px] lg:tracking-[0.7px] tracking-wider font-medium">{exp.year}</span>
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5">
                <span className="text-[#333333] text-[18px] lg:leading-[28px] font-medium group-hover:opacity-80 transition-opacity">{exp.title}</span>
                <span className="text-[#555555] text-sm lg:text-[16px] lg:leading-[25.6px] lg:tracking-[0px]">{exp.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      </FadeUp>

      {/* ── PROJECT CARD ── */}
      <FadeUp delay={0.2}>
      <section id="projects" className="px-6 md:px-12 lg:px-[70px] mt-12 md:mt-16 lg:mt-[80px]">
        {/* Richoos Featured Project */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          
          {/* Mobile Image (hidden on lg) */}
          <Link to="/case-study/richoos" className="lg:hidden relative w-full aspect-[1.14] md:aspect-[1.6] overflow-hidden block">
            <img 
              alt="Richoos project" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={imgProjectImage} 
            />
          </Link>

          {/* Content */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
            <h3
              className="text-[#333333] text-[32px] md:text-[40px] tracking-tight lg:tracking-[-1.28px] m-0"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
            >
              Richoos
            </h3>
            <p className="text-[#555555] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] tracking-[0px]">
              Transformed a traditional packaging supplier into a modern digital brand, organizing a vast catalog into a clean, credible experience for international clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link 
                to="/case-study/richoos"
                className="bg-[#041F39] text-[#F8FAFB] flex items-center justify-center px-6 py-3 rounded-full shadow-md hover:bg-[#0057FF] transition-colors cursor-pointer"
              >
                <span className="text-[14px] md:text-[15px] font-semibold whitespace-nowrap font-['Poppins',sans-serif]">View Case Study</span>
              </Link>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://richoos.com/', '_blank');
                }}
                className="border border-[#041F39] text-[#041F39] flex items-center justify-center px-6 py-3 rounded-full hover:underline transition-all cursor-pointer"
              >
                <span className="text-[14px] md:text-[15px] font-semibold whitespace-nowrap font-['Poppins',sans-serif]">Visit Richoos</span>
              </button>
            </div>
          </div>

          {/* Desktop Image (hidden on mobile) */}
          <Link to="/case-study/richoos" className="hidden lg:block lg:col-span-7 relative w-full aspect-[1.6] overflow-hidden">
            <img 
              alt="Richoos project" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={imgProjectImage} 
            />
          </Link>
        </div>

        {/* Other Projects Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* BigBytes Project */}
          <a 
            href="https://www.behance.net/gallery/216251511/project" 
            target="_blank" 
            rel="noreferrer" 
            className="block relative w-full cursor-pointer group"
          >
            {/* Project image/iframe */}
            <div className="relative w-full aspect-[1.14] md:aspect-[1.6] overflow-hidden bg-gray-100 flex items-center justify-center">
              <iframe 
                src="https://www.behance.net/embed/project/216251511?ilo0=1" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                scrolling="no"
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full pointer-events-none"
              ></iframe>
              <div className="absolute inset-0 z-20"></div> {/* Click overlay */}
            </div>

            {/* Project Details */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-6 gap-2">
              <h2
                className="text-[#333333] text-[24px] tracking-tight lg:tracking-[-1.28px] m-0 group-hover:text-[#041F39] transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
              >
                BigBytes
              </h2>
              <span className="text-[#555555] text-sm lg:text-[16px] lg:leading-[25.6px] lg:tracking-[0px]">concept</span>
            </div>
          </a>

          {/* 1living Project */}
          <a 
            href="https://www.behance.net/gallery/215614905/project" 
            target="_blank" 
            rel="noreferrer" 
            className="block relative w-full cursor-pointer group"
          >
            <div className="relative w-full aspect-[1.14] md:aspect-[1.6] overflow-hidden bg-gray-100 flex items-center justify-center">
              <iframe 
                src="https://www.behance.net/embed/project/215614905?ilo0=1" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                scrolling="no"
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full pointer-events-none"
              ></iframe>
              <div className="absolute inset-0 z-20"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-6 gap-2">
              <h2
                className="text-[#333333] text-[24px] tracking-tight lg:tracking-[-1.28px] m-0 group-hover:text-[#041F39] transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
              >
                1living
              </h2>
              <span className="text-[#555555] text-sm lg:text-[16px] lg:leading-[25.6px] lg:tracking-[0px]">concept</span>
            </div>
          </a>

          {/* Cafe Project */}
          <a 
            href="https://www.behance.net/gallery/203893325/project" 
            target="_blank" 
            rel="noreferrer" 
            className="block relative w-full cursor-pointer group"
          >
            <div className="relative w-full aspect-[1.14] md:aspect-[1.6] overflow-hidden bg-gray-100 flex items-center justify-center">
              <iframe 
                src="https://www.behance.net/embed/project/203893325?ilo0=1" 
                allowFullScreen 
                loading="lazy" 
                frameBorder="0" 
                scrolling="no"
                allow="clipboard-write" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full pointer-events-none"
              ></iframe>
              <div className="absolute inset-0 z-20"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 md:mt-6 gap-2">
              <h2
                className="text-[#333333] text-[24px] tracking-tight lg:tracking-[-1.28px] m-0 group-hover:text-[#041F39] transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
              >
                Cafe
              </h2>
              <span className="text-[#555555] text-sm lg:text-[16px] lg:leading-[25.6px] lg:tracking-[0px]">concept</span>
            </div>
          </a>
        </div>
      </section>
      </FadeUp>



      <Footer />
    </div>
  );
}


