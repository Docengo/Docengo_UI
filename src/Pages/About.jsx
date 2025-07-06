import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AboutImage from '../assets/About.png';
import Navbar from '../components/Navbar';
import FloatingActions from '../components/FloatingActions';

function About() {
  return (
    <div>
      <Navbar />

      <section className="w-full bg-[#14213D] text-center py-20 px-6 md:px-26">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#fca311] drop-shadow-md">
          About <span className="text-[#fca311] drop-shadow-md">Docengo</span>
        </h2>

        <div className="min-h-screen w-full px-6 md:px-28 py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
            
            {/* Left Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
                Let’s <span className="text-red-500">fix</span> what’s stopping you.
              </h2>

              <div className="text-2xl md:text-3xl font-bold text-[#fca311] mt-6 h-[50px]">
                <TypeAnimation
                  sequence={[
                    "Confusion → Clarity",
                    "Scrolling → Studying",
                    "Stress → Structure",
                    "Winging it → Winning it",
                    3000,
                    "",
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-8 text-[#E5E5E5] text-lg leading-relaxed max-w-2xl">
                Docengo isn’t just a platform. It’s the plan.
                We’re redefining preparation for students who demand more — more depth, more clarity, more results.
                <br />No fluff. No fear. Just fuel for your ambition.
                NEET, JEE, or any goal — we’ve got your back with real mentors and resources that deliver.
              </p>

              {/* CTA Button */}
              <button className="mt-10 bg-gradient-to-r from-[#fca311] to-[#14213d] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300">
                Explore the Docengo Way 🚀
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src={AboutImage}
                alt="About Docengo"
                className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <FloatingActions />
    </div>
  );
}

export default About;
