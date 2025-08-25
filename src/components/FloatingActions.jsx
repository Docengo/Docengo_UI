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
  className="relative flex items-center justify-center w-20 h-20 rounded-full
             bg-gradient-to-br from-teal-400 via-lime-400 to-sky-500
             ring-4 ring-offset-2 ring-white shadow-inner
             transition-all duration-300 hover:scale-110 
             hover:ring-offset-4 hover:shadow-[inset_0_0_12px_rgba(0,0,0,0.3)]"
  title="🚀 Docengo CAT AI"
>
  {/* 🐱 Cat Face Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="w-12 h-12"
  >
    {/* Cat head */}
    <circle cx="32" cy="32" r="20" fill="black" />
    {/* Ears */}
    <polygon points="18,20 10,5 22,16" fill="black" />
    <polygon points="46,20 54,5 42,16" fill="black" />
    {/* Eyes */}
    <circle cx="25" cy="32" r="5" fill="white" />
    <circle cx="39" cy="32" r="5" fill="white" />
    {/* Smile */}
    <path d="M26 44 Q32 50 38 44" stroke="white" strokeWidth="2" fill="none" />
  </svg>
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
