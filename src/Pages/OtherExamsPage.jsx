import React from 'react';
import CExamNext from '../assets/CExamNext.png';
import Navbar from '../components/Navbar';
import FloatingActions from '../components/FloatingActions';

function OtherExamsPage() {
  return (
    <div>
      <Navbar />
    <div className="bg-[#14213D] min-h-screen text-center px-6 py-12">
      

      {/* <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">Other Exams</h2> */}

      <div className="flex justify-center pt-20">
        <img
          src={CExamNext}
          alt="Other Exams Courses"
          className="rounded-2xl shadow-lg max-w-xl w-full"
        />
      </div>

      <FloatingActions />
    </div></div>
  );
}

export default OtherExamsPage;
