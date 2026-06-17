const fs = require('fs');
let file = 'd:/Projects/portfolio/src/app/components/PortfolioHero.tsx';
let data = fs.readFileSync(file, 'utf8');

if (!data.includes('FadeUp')) {
  data = data.replace('import { Header, Footer } from "./Shared";', 'import { Header, Footer } from "./Shared";\nimport { FadeUp } from "./FadeUp";');
  
  // Wrap Hero Section
  data = data.replace('<section className="flex flex-col lg:flex-row', '<FadeUp>\n      <section className="flex flex-col lg:flex-row');
  data = data.replace(/<\/section>\s*\{\/\* ── PROJECT CARD ── \*\/\}/g, '</section>\n      </FadeUp>\n\n      {/* ── PROJECT CARD ── */}');
  
  // Wrap Project Grid
  data = data.replace('<section className="px-6 md:px-12 lg:px-[70px] mt-12 md:mt-16 lg:mt-[80px]">', '<FadeUp delay={0.2}>\n      <section className="px-6 md:px-12 lg:px-[70px] mt-12 md:mt-16 lg:mt-[80px]">');
  data = data.replace(/<\/section>\s*<Footer \/>/g, '</section>\n      </FadeUp>\n\n\n\n      <Footer />');
  
  fs.writeFileSync(file, data);
}

// Now Case Study
file = 'd:/Projects/portfolio/src/app/components/RichoosCaseStudy.tsx';
data = fs.readFileSync(file, 'utf8');

if (!data.includes('FadeUp')) {
  data = data.replace('import { Link } from "react-router";', 'import { Link } from "react-router";\nimport { useEffect } from "react";\nimport { FadeUp } from "./FadeUp";');
  
  // scrollToTop
  data = data.replace('const [activeSection, setActiveSection] = useState("overview");', 'const [activeSection, setActiveSection] = useState("overview");\n\n  useEffect(() => {\n    window.scrollTo(0, 0);\n  }, []);\n');

  // Wrap sections
  const regex = /(<section className="flex flex-col gap-12(?: items-start)?" id="[^"]+">)[\s\S]*?(?=<\/section>)/g;
  let matches = [];
  let match;
  while ((match = regex.exec(data)) !== null) {
      matches.push({ full: match[0], id: match[1], index: match.index });
  }

  // A bit too complex to regex properly inside node script. I will use a simple string split.
  let parts = data.split(/(<section className="flex flex-col gap-12[^>]*>)/);
  // We know there are 6 sections. Each <section> comes as odd indices in parts array
  for (let i = 1; i < parts.length; i += 2) {
      parts[i] = `<FadeUp delay={0.1}>\n            ${parts[i]}`;
  }
  data = parts.join('');
  
  // Now we need to close </FadeUp> after </section>.
  data = data.replace(/<\/section>/g, '</section>\n          </FadeUp>');
  
  fs.writeFileSync(file, data);
}
