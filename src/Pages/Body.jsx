import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';
import Engineer from '../assets/Engineer.png';  
import Doctor from '../assets/Doctor.png';
import CExam from '../assets/CExam.png';

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
      <div className="w-full h-screen bg-[#edf2fe]">
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

        {/* Tagline Section */}
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

      {/* Course Cards Section */}
      <div className="bg-white w-full py-10 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-10">
          Let’s Fix What’s Stopping You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NEET */}
          <div className="bg-[#F8FAFF] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4 text-center">NEET Courses</h3>
            <div className="relative h-32 flex items-center justify-center mb-4">
              <div className="absolute w-28 h-28 bg-[#edf2fe] rounded-full z-0" />
              <img src={Doctor} alt="NEET" className="relative z-10 h-24 object-contain" />
            </div>
            <div className="text-center">
              <a href="/neet" className="text-blue-600 font-semibold hover:underline">
                View Courses →
              </a>
            </div>
          </div>

          {/* JEE */}
          <div className="bg-[#F8FAFF] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4 text-center">JEE Courses</h3>
            <div className="relative h-32 flex items-center justify-center mb-4">
              <div className="absolute w-28 h-28 bg-[#edf2fe] rounded-full z-0" />
              <img src={Engineer} alt="JEE" className="relative z-10 h-24 object-contain" />
            </div>
            <div className="text-center">
              <a href="/jee" className="text-blue-600 font-semibold hover:underline">
                View Courses →
              </a>
            </div>
          </div>

          {/* Competitive Exam */}
          <div className="bg-[#F8FAFF] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4 text-center">Smart Scholar Exams</h3>
            <div className="relative h-32 flex items-center justify-center mb-4">
              <div className="absolute w-28 h-28 bg-[#edf2fe] rounded-full z-0" />
              <img src={CExam} alt="Competitive" className="relative z-10 h-24 object-contain" />
            </div>
            <div className="text-center">
              <a href="/foundation" className="text-blue-600 font-semibold hover:underline">
                View Courses →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
