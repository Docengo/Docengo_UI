import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AboutImage from '../assets/About.png';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
        <Navbar />

        <section className="w-full bg-[#14213D] text-center py-20 px-6 md:px-26">
  <h2 className="text-[#FCA311] text-3xl md:text-5xl font-extrabold mb-6">About Docengo</h2>

    <div className="bg-[#14213D] min-h-screen w-full px-6 md:px-28 py-20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
            Let’s <span className="text-red-500">fix</span> what’s stopping you.
          </h2>

          <div className="text-2xl md:text-3xl font-bold text-[#FCA311] mt-6 h-[50px]">
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

          <button className="mt-10 bg-[#FCA311] hover:bg-[#e08b00] text-[#14213D] font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300">
            Explore the Docengo Way 🚀
          </button>
        </div>

        {/* Right Image with Rounded Corners */}
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
    </div>
  );
}

export default About;
