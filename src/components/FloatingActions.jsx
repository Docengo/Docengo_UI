import React from 'react';
import { FiPhoneCall, FiShare2 } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';
import UpscEvalAIImg from "../assets/UPSC EvalAI floating image.png";
import FloatingFeedback from "./FloatingFeedback";

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
    <div className="fixed right-4 bottom-24 flex flex-col items-center gap-3 z-40">

      {/* 🚀 CAT AI */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-600 blur-md opacity-40 group-hover:opacity-70 transition"></div>
        <div className="absolute inset-0 rounded-xl border border-yellow-500 animate-spin-slow"></div>

        <a
          target="_blank"
          href="https://docengocatai.netlify.app/"
          className="relative flex items-center justify-center w-12 h-12 rounded-xl
                     bg-gradient-to-br from-yellow-400 to-yellow-600
                     shadow-md transition-all duration-200 group-hover:scale-110"
          title="🚀 Docengo CAT AI"
        >
          <span className="text-[11px] font-bold text-black">CAT</span>
        </a>
      </div>

      {/* 🚀 UPSC EvalAI */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 blur-md opacity-40 group-hover:opacity-70 transition"></div>
        <div className="absolute inset-0 rounded-xl border border-cyan-400 animate-spin-slow"></div>

        <a
          target="_blank"
          href="https://docengo-upsc-answer-eval-ai.vercel.app/"
          className="relative flex items-center justify-center w-12 h-12 rounded-xl
                     bg-gradient-to-br from-cyan-500 to-blue-600
                     shadow-md transition-all duration-200 group-hover:scale-110"
          title="🚀 Docengo UPSC EvalAI"
        >
          <img 
            src={UpscEvalAIImg} 
            alt="UPSC EvalAI" 
            className="w-7 h-7 object-contain" 
          />
        </a>
      </div>

      {/* 🚀 AI Diagnostic Tool */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-600 blur-md opacity-40 group-hover:opacity-70 transition"></div>
        <div className="absolute inset-0 rounded-xl border border-purple-500 animate-spin-slow"></div>

        <a
          target="_blank"
          href="https://docengo-ai.netlify.app/"
          className="relative flex items-center justify-center w-12 h-12 rounded-xl
                     bg-gradient-to-br from-purple-600 to-indigo-600
                     shadow-md transition-all duration-200 group-hover:scale-110"
          title="🚀 Docengo AI - Diagnostic Tool"
        >
          <FaBrain size={24} className="text-white" />
        </a>
      </div>

      {/* 📞 Call Button */}
      <a
        href="tel:+918882153238"
        className="flex items-center justify-center w-12 h-12 rounded-xl
                   bg-[#FCA311] shadow-md transition-all duration-200 hover:scale-110"
        title="Call Us"
      >
        <FiPhoneCall size={24} className="text-white" />
      </a>

      {/* 🔗 Share Button */}
      <button
        onClick={handleShare}
        className="flex items-center justify-center w-12 h-12 rounded-xl
                   bg-[#14213D] shadow-md transition-all duration-200 hover:scale-110"
        title="Share This"
      >
        <FiShare2 size={24} className="text-white" />
      </button>

      {/* ⭐ Feedback Button */}
      <FloatingFeedback /> 
    </div>
  );
};

export default FloatingActions;
