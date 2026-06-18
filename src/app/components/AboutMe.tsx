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
            <div className="flex flex-col gap-6 text-[#333333] text-[18px] leading-[28px] font-normal text-justify">
              <p>
                I'm Karthik, originally from Trivandrum, where I currently live. I graduated with a degree in Computer Science and Business Systems from Rajagiri School of Engineering and Technology, Kochi.
              </p>


              <p>
                I like to talk with people and understand their business — how it works, what systems are in place, and how things actually run day to day. I enjoy hearing about the problems they face in their work, and I find it satisfying to think through how a digital solution could fix that problem for them. Alongside this, I love learning about technology. I'm always curious to explore new tools, new ways of building things, and new ideas that are shaping how products are made today.
              </p>

              <p>
                I aspire to work with people or companies who are building something meaningful, and help them turn that into a product that actually makes a difference. I want to build things that don't just work, but genuinely make people's lives easier — products that solve real problems for real people.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
