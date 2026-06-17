import { Link, useLocation } from "react-router";
import { useState } from "react";
import imgAvatar from "../../imports/Frame1/af7eb8bb05498f1ee5f55460c73bc907a7afe986.png";
import imgMenu from "../../imports/Frame13/587249511ec8240cd4584e6a348a55882bd75de0.png";
import { imgEllipse7 } from "../../imports/Frame1/svg-tuvqa";

export function CustomAvatar() {
  return (
    <div className="inline-grid place-items-start relative shrink-0" style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}>
      <div
        className="relative size-[66.369px]"
        style={{
          gridColumn: "1",
          gridRow: "1",
          maskImage: `url("${imgEllipse7}")`,
          maskSize: "67px 66.369px",
          maskRepeat: "no-repeat",
          maskPosition: "-0.158px 0px",
          WebkitMaskImage: `url("${imgEllipse7}")`,
          WebkitMaskSize: "67px 66.369px",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "-0.158px 0px",
        }}
      >
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.3686 66.3686">
          <circle cx="33.1843" cy="33.1843" fill="#888888" fillOpacity="0.2" r="33.1843" />
        </svg>
      </div>
      <div
        className="relative size-[76.686px]"
        style={{
          gridColumn: "1",
          gridRow: "1",
          marginLeft: "0.18px",
          marginTop: "6.46px",
          maskImage: `url("${imgEllipse7}")`,
          maskSize: "67px 66.369px",
          maskRepeat: "no-repeat",
          maskPosition: "-0.182px -6.456px",
          WebkitMaskImage: `url("${imgEllipse7}")`,
          WebkitMaskSize: "67px 66.369px",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "-0.182px -6.456px",
        }}
      >
        <img alt="H Karthik" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAvatar} />
      </div>
    </div>
  );
}

export function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const getLinkClass = (path: string) => {
    return isActive(path) 
      ? "text-[#041F39] text-[15px] font-medium underline decoration-[7%] underline-offset-4 cursor-pointer"
      : "text-[#555555] hover:text-[#333333] transition-colors text-[15px] cursor-pointer";
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-[70px] py-4 lg:py-6 w-full font-['Poppins',sans-serif] bg-background relative z-50">
      {/* Logo */}
      <Link to="/" className="flex gap-2 md:gap-4 items-center">
        <div className="scale-75 md:scale-100 origin-left">
          <CustomAvatar />
        </div>
        <span
          className="text-[#333333] text-[24px] whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          H Karthik
        </span>
      </Link>

      {/* Center nav - Desktop only */}
      <div className="hidden lg:flex gap-6 xl:gap-8 items-center justify-center absolute left-1/2 -translate-x-1/2">
        <Link to="/" className={getLinkClass("/")}>Work</Link>
        <Link to="/about" className={getLinkClass("/about")}>About me</Link>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className={getLinkClass("/resume")}>Resume</a>
      </div>

      {/* CTA button */}
      <a href="mailto:work.hkarthik@gmail.com" className="hidden lg:flex bg-[#041F39] text-[#f8fafb] items-center justify-center px-8 py-3 rounded-full cursor-pointer hover:bg-[#0057FF] transition-colors shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
        <span className="text-[15px] font-semibold whitespace-nowrap">Get in Touch</span>
      </a>

      {/* Mobile menu button */}
      <button onClick={() => setIsMenuOpen(true)} className="lg:hidden bg-[#041F39] text-[#f8fafb] flex gap-2.5 items-center justify-center px-6 py-2 rounded-full cursor-pointer shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hover:bg-[#0057FF] transition-colors">
        <img alt="menu" className="w-[25px] h-[25px] object-contain brightness-0 invert" src={imgMenu} />
        <span className="text-base font-semibold whitespace-nowrap">Menu</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col p-6 font-['Poppins',sans-serif] lg:hidden overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-[#333333] text-4xl leading-none">&times;</button>
          </div>
          <div className="flex flex-col gap-8 mt-16 items-center">
            <Link onClick={() => setIsMenuOpen(false)} to="/" className="text-2xl font-medium text-[#333333]">Work</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/about" className="text-2xl font-medium text-[#333333]">About me</Link>
            <a onClick={() => setIsMenuOpen(false)} href="/resume.pdf" target="_blank" rel="noreferrer" className="text-2xl font-medium text-[#333333]">Resume</a>
            <a onClick={() => setIsMenuOpen(false)} href="mailto:work.hkarthik@gmail.com" className="bg-[#041F39] text-[#f8fafb] px-8 py-3 rounded-full mt-8 shadow-md">Get in Touch</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 px-6 md:px-12 lg:px-[70px] mt-24 md:mt-32 lg:mt-[120px] pb-16 lg:pb-[65px] font-['Poppins',sans-serif] w-full">
      {/* Built with */}
      <div className="flex flex-col gap-1 md:gap-2">
        <h3
          className="text-[#333333] text-[18px] lg:leading-[28px] m-0"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built with
        </h3>
        <div className="text-[#555555] text-[10px] md:text-[16px] font-normal">
          Me, coffee, and whatever AI had tokens left.
        </div>
      </div>

      {/* Social links */}
      <div className="flex gap-8">
        <a
          href="https://linkedin.com/in/h-karthik-9a67b9243"
          target="_blank"
          rel="noreferrer"
          className="text-[#333333] text-[18px] lg:leading-[28px] cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:work.hkarthik@gmail.com"
          className="text-[#333333] text-[18px] lg:leading-[28px] cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Email
        </a>
      </div>
    </footer>
  );
}
