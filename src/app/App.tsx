import { Routes, Route } from "react-router";
import { PortfolioHero } from "./components/PortfolioHero";
import { RichoosCaseStudy } from "./components/RichoosCaseStudy";
import { AboutMe } from "./components/AboutMe";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHero />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/case-study/richoos" element={<RichoosCaseStudy />} />
    </Routes>
  );
}
