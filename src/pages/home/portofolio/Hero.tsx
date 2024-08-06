import { FaArrowDown } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { MyFoto, Section } from "./PortoComponent";

export default function Hero() {
  return (
    <Section className={`rounded-b-xl py-20 border-b`}>
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 pb-16 pt-8">
        <MyFoto />
        <div className="p-2 text-center md:text-left bg-clip-text bg-gradient-to-tr from-red-600 via-green-600 to-blue-600 text-transparent">
          <div className="text-xl md:text-xl mb-6">Hello, My name is</div>
          <h1 className={"text-3xl md:text-5xl mb-2 font-medium"}>M Khotami Rais</h1>
          <h2 className={"text-xl md:text-2xl font-semibold overflow-visible"}>
            <ReactTyped
              strings={["I am a Web Developer", "I am a Fullstack Developer", "I am a MERN Stack Developer"]}
              typeSpeed={40}
              backSpeed={20}
              attr="placeholder"
              backDelay={1500}
              //   loopCount={5}
              loop
            >
              <input
                title="input skill"
                type="text"
                className="outline-none text-center md:text-left w-80 bg-inherit"
              />
            </ReactTyped>
          </h2>
          <a href="#about" className="mt-8 inline-block">
            <button className="p-3 md:p-4 px-6 md:px-8 bg-blue-500 text-white rounded-xl leading-none flex items-center gap-2 hover:opacity-50 transition-all duration-100">
              About Me <FaArrowDown className="inline-block" />
            </button>
          </a>
        </div>
      </div>
    </Section>
  );
}
