import Engineer from '../assets/Engineer.png';  
import Doctor from '../assets/Doctor.png';
import CExam from '../assets/CExam.png';

function CourseCards() {
  return (
    <div className="bg-[#14213D] w-full py-10 px-4 md:px-20 pb-[8rem]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#FCA311] mb-12">
        Let’s Fix What’s Stopping You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* NEET */}
        <div className="bg-[#1B263B] text-white p-6 rounded-2xl shadow-lg shadow-slate-500 hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl font-bold mb-4 text-center">NEET Courses</h3>
          <div className="relative h-32 flex items-center justify-center mb-6">
           <div className="absolute w-28 h-28 bg-white rounded-full z-0" />
            <img src={Doctor} alt="NEET" className="relative z-10  w-[8rem]  rounded-md object-contain" />
          </div>
          <div className="text-center">
            <a
              href="/neet"
              className="inline-block mt-2 text-[#FCA311] font-semibold hover:underline transition"
            >
              View Courses →
            </a>
          </div>
        </div>

        {/* JEE */}
        <div className="bg-[#1B263B] text-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl font-bold mb-4 text-center">JEE Courses</h3>
          <div className="relative h-32 flex items-center justify-center mb-6">
            <div className="absolute w-28 h-28 bg-[#E5E5E5] rounded-full z-0" />
            <img src={Engineer} alt="JEE" className="relative z-10 h-24 object-contain" />
          </div>
          <div className="text-center">
            <a
              href="/jee"
              className="inline-block mt-2 text-[#FCA311] font-semibold hover:underline transition"
            >
              View Courses →
            </a>
          </div>
        </div>

        {/* Competitive Exam */}
        <div className="bg-[#1B263B] text-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300">
          <h3 className="text-xl font-bold mb-4 text-center">Smart Scholar Exams</h3>
          <div className="relative h-32 flex items-center justify-center mb-6">
            <div className="absolute w-28 h-28 bg-[#E5E5E5] rounded-full z-0" />
            <img src={CExam} alt="Competitive" className="relative z-10 h-24 object-contain" />
          </div>
          <div className="text-center">
            <a
              href="/foundation"
              className="inline-block mt-2 text-[#FCA311] font-semibold hover:underline transition"
            >
              View Courses →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCards;
