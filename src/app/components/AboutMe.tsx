import { Header, Footer } from "./Shared";

export function AboutMe() {
  return (
    <div className="bg-background min-h-screen w-full text-foreground overflow-x-hidden font-['Poppins',sans-serif] flex flex-col">
      <Header />

      <main className="flex-grow px-6 md:px-12 lg:px-[70px] mt-12 md:mt-24 lg:mt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-start-4 lg:col-span-6 flex flex-col gap-6 lg:gap-8">
            <h3
              className="text-[#333333] text-[32px] lg:text-[40px] tracking-tight lg:tracking-[-1.28px] m-0"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              About me
            </h3>
            <p className="text-[#333333] text-[18px] leading-[28px] font-normal text-justify">
              Hi, I'm Karthik, a CSBS student from Trivandrum with a deep love for building and designing web products. I aspire to be a product designer, and what draws me into this field is the human side of it — sitting down with people, genuinely listening to the difficulties and problems they're navigating, and then translating that understanding into a digital solution that actually fits their needs. This curiosity about people and their struggles has always come naturally to me, and it's what shapes the way I approach every project I take on. In college, I've had the chance to work alongside peers who were building their own projects, lending a hand in areas where the user experience needed sharpening or where the product needed more thoughtful, well-placed touchpoints for users to engage with. Beyond that, I carry a constant passion for new technology, always staying curious about emerging tools, trends, and ways of thinking that can push the products I build to be more meaningful, more usable, and more in tune with the people they're meant to serve.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
