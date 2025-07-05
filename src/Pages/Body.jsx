import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Banner1 from '../assets/Banner1.png';
import Banner2 from '../assets/Banner2.png';

const banners = [Banner1, Banner2];

function Body() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full">
        <img
          src={banners[currentBanner]}
          alt={`Docengo Banner ${currentBanner + 1}`}
          className="w-full h-auto max-h-[300px] mt-[4rem]  transition-opacity duration-1000"
        />
      </div>
      <div className="w-full h-screen bg-[#edf2fe] flex items-center">
  <div className="ml-24 max-w-[600px]">
    <h1 className="text-4xl font-extrabold leading-snug">
      Because <span className="text-red-500">YouTube</span> and 10x speed won’t save your rank!
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