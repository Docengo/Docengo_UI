import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';
import CardContainer from '../components/CardContainer';
import animation from "../assets/animation.mp4";
import Pros from './Pros';
import About from "./About";
import Footer from '../components/Footer';


const banners = [Banner1, Banner2];

function Body() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Top Banner Section */}
      <div className="w-full bg-[#edf2fe]">
        {/* Rotating Banner */}
        <div className="relative w-full h-[225px] mt-[4rem] overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentBanner}
              src={banners[currentBanner]}
              alt={`Docengo Banner ${currentBanner + 1}`}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Tagline + Animation Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-[5rem] gap-12">
          {/* Tagline */}
          <div className="max-w-[600px]">
            <h1 className="text-4xl font-extrabold leading-snug text-[#14213d]">
              Because <span className="text-red-500">YouTube</span> and <span className="text-red-500">10x</span> speed won’t save your rank!
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Real learning. Real mentors. Real results — That’s Docengo.
            </p>
            <button className="mt-6 bg-[#fca311] hover:bg-[#e5940d] text-white font-semibold px-6 py-3 rounded-xl shadow-md">
              Unlock Docengo 🔓
            </button>
          </div>

          {/* Animation Video */}
          <div className="max-w-[600px] w-full">
            <video
              src={animation}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <CardContainer />
      <Pros />
      <About />
      <Footer />
    </div>
  );
}

export default Body;
