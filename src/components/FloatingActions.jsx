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
      <a
        target="_blank"
        href="https://docengocatai.netlify.app/"
        className="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-gradient-to-br from-yellow-400 to-yellow-600
                   shadow-md transition-all duration-200 hover:scale-110"
        title="🚀 Docengo CAT AI"
      >
        <span className="text-sm font-bold text-black">CAT</span>
      </a>

      {/* 🚀 UPSC EvalAI */}
      <a
        target="_blank"
        href="https://docengo-upsc-answer-eval-ai.vercel.app/"
        className="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-gradient-to-br from-cyan-500 to-blue-600
                   shadow-md transition-all duration-200 hover:scale-110"
        title="🚀 Docengo UPSC EvalAI"
      >
        <img src={UpscEvalAIImg} alt="UPSC EvalAI" className="w-7 h-7 object-contain" />
      </a>

      {/* 🚀 AI Diagnostic Tool */}
      <a
        target="_blank"
        href="https://docengo-ai.netlify.app/"
        className="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-gradient-to-br from-purple-600 to-indigo-600
                   shadow-md transition-all duration-200 hover:scale-110"
        title="🚀 Docengo AI - Diagnostic Tool"
      >
        <FaBrain size={28} className="text-white" /> {/* resized for padding match */}
      </a>

      {/* 📞 Call Button */}
      <a
        href="tel:+918882153238"
        className="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-[#FCA311] shadow-md transition-all duration-200 hover:scale-110"
        title="Call Us"
      >
        <FiPhoneCall size={28} className="text-white" /> {/* resized for padding match */}
      </a>

      {/* 🔗 Share Button */}
      <button
        onClick={handleShare}
        className="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-[#14213D] shadow-md transition-all duration-200 hover:scale-110"
        title="Share This"
      >
        <FiShare2 size={28} className="text-white" /> {/* resized for padding match */}
      </button>

      {/* ⭐ Feedback Button */}
      <FloatingFeedback /> 

    </div>
  );
};

export default FloatingActions;
