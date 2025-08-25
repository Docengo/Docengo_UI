import React from 'react';
import { FiPhoneCall, FiShare2 } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa'; // AI brain icon
import UpscEvalAIImg from "../assets/UPSC EvalAI floating image.png";


const FloatingActions = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Docengo!',
        text: 'Top mentorship from IITians & Doctors. Check this out!',
        url: window.location.href,
      });
    } else {
      alert("Sharing isn't supported in this browser.");
    }
  };

  return (
    <div className="fixed right-4 bottom-24 flex flex-col items-center gap-4 z-50">

{/* 🚀 Docengo CAT AI */}
<a
  target="_blank"
  href="https://docengocatai.netlify.app/"
  className="relative flex items-center justify-center w-18 h-18 rounded-full
             bg-gradient-to-br from-black via-gray-900 to-green-600
             ring-4 ring-offset-2 ring-lime-400
             shadow-[0_0_25px_rgba(132,204,22,0.8)]
             transition-all duration-300 hover:scale-110 
             hover:ring-offset-4 hover:shadow-[0_0_40px_rgba(132,204,22,1)]"
  title="🚀 Docengo CAT AI"
>
  {/* CAT Text */}
  <span className="text-2xl font-extrabold text-yellow-300 tracking-widest
                   drop-shadow-[0_0_6px_rgba(0,0,0,1)]">
    CAT
  </span>
</a>

          
     {/* 🚀 Docengo UPSC EvalAI */}
     <a
  target="_blank"
  href="https://docengo-upsc-answer-eval-ai.vercel.app/"
  className="relative flex items-center justify-center w-16 h-16 rounded-2xl 
             bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_25px_rgba(34,211,238,0.8)]
             transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]"
  title="🚀 Docengo UPSC EvalAI - Diagnostic Tool"
>
  <img src={UpscEvalAIImg} alt="UPSC EvalAI" className="w-10 h-10" />
</a>




      {/* 🚀 Docengo AI - Diagnostic Tool */}
      <a
        target="_blank"
        href="https://docengo-ai.netlify.app/"
        className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
                   p-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 
                   hover:from-purple-700 hover:to-indigo-700 group"
        title="🚀 Docengo AI - Diagnostic Tool"
      >
        {/* Glow ring effect */}
        <span className="absolute inset-0 rounded-2xl border-2 border-purple-400 opacity-70 animate-ping"></span>
        <FaBrain size={26} className="relative z-10" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918882153238"
        className="bg-[#FCA311] text-white p-4 rounded-full shadow-xl 
                   hover:scale-105 hover:bg-[#e08c10] transition-all duration-200 group"
        title="Call Us"
      >
        <FiPhoneCall size={22} className="group-hover:animate-pulse" />
      </a>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="bg-[#14213D] text-white p-4 rounded-full shadow-xl 
                   hover:scale-105 hover:bg-[#0f1a2f] transition-all duration-200 group"
        title="Share This"
      >
        <FiShare2 size={22} className="group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default FloatingActions;
