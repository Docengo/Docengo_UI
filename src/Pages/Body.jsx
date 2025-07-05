import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';

const banners = [Banner1, Banner2];

function Body() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Increment banner every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-[#edf2fe]">
        {/* Banner Slider */}
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

        {/* Text Content */}
        <div className="ml-24 max-w-[600px] mt-[7rem]">
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
      </div>
    </div>
  );
}

export default Body;
