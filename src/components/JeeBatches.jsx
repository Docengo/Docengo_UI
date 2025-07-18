import React, { useState } from 'react';
import Jee12 from "../assets/Jee12.png";
import Jee11 from "../assets/Jee11.png";
import BBP from "../assets/BBP.png";
import { FiPhoneCall } from 'react-icons/fi';
import Navbar from './Navbar';
import Charge_Batch_pdf from "../assets/Charge_Batch_pdf.pdf"
import Mole_Batch_pdf from "../assets/Mole_Batch_pdf.pdf"
import { Link } from 'react-router-dom';

const batches = [
  {
    id: 1,
    name: 'Charge 1.0 Batch',
    startsOn: '27 July 2025',
    validTill: 'July 2026',
    classesFor: 'Class 12 + Droppers',
    timings: {
      weekdays: '75 - 90 mins per day',
      weekends: "Solve your DPX's📝",
    },
    image: Jee12,
    detailsPDF: Charge_Batch_pdf,
  },
  {
    id: 2,
    name: 'Mole Mafia Batch',
    startsOn: '2 August 2025',
    validTill: 'August 2026',
    classesFor: 'Class 11 + Droppers',
    timings: {
      weekdays: '75 - 90 mins per day',
      weekends: "Solve your DPX's📝",
    },
    image: Jee11,
    detailsPDF: Mole_Batch_pdf,
  },
];

const JeeBatches = () => {
  const [showCallButton, setShowCallButton] = useState(false);

  const handleCallBackClick = () => {
    setShowCallButton(true);
    setTimeout(() => setShowCallButton(false), 10000);
  };

  return (
    <div>
      <Navbar />

      <div className="bg-[#131827] min-h-screen text-[#1f2937] pt-[6rem] px-4 pb-20 relative">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 text-[#FCA311]">
          JEE Batches
        </h2>

        {/* Intro Paragraph */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <p className="text-white text-base md:text-lg leading-relaxed">
            Joining a dedicated <span className="text-[#FCA311] font-semibold">JEE 2026</span> batch is a transformative step for students aspiring to excel in one of India’s most competitive medical entrance exams.
            With expert faculty, structured learning plans, and comprehensive resources, focused preparation becomes both achievable and effective.
            At <span className="text-[#FCA311] font-semibold">Docengo</span>, our JEE batches are crafted to guide students through every stage of their journey — from understanding concepts to mastering exam strategies.
            Below, explore how our <span className="text-[#FCA311] font-semibold">JEE 2026</span> batches can help you stay ahead with precision, discipline, and clarity.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          {/* Batches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
            {batches.map((batch) => (
              <div
                key={batch.id}
                className="w-full max-w-md bg-[#edf2fe] p-4 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.015] mx-auto"
              >
                <img
                  src={batch.image}
                  alt={batch.name}
                  className="w-full h-64 object-cover rounded-xl mb-3 bg-white"
                />

                <h3 className="text-xl font-bold text-[#FCA311] mb-2">{batch.name}</h3>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <p className="text-sm text-[#374151]">
                    For <span className="font-semibold text-[#1f2937]">{batch.classesFor}</span>
                  </p>
                  <a
                    href={batch.detailsPDF}
                    download
                    className="text-sm font-semibold text-[#FCA311] hover:underline"
                  >
                    Download Course Details
                  </a>
                </div>

                <div className="space-y-2 text-[#4b5563]">
                  <div>
                    <p className="font-semibold text-[#1f2937]">Batch Starting On</p>
                    <p className="text-sm">{batch.startsOn}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1f2937]">Access Valid Till</p>
                    <p className="text-sm">{batch.validTill}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1f2937]">Class Timings</p>
                    <p className="text-sm">Weekdays: {batch.timings.weekdays}</p>
                    <p className="text-sm">Weekends: {batch.timings.weekends}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/register-payment">
                    <button className="bg-[#FCA311] text-white font-semibold px-4 py-1.5 rounded-full hover:bg-[#e89900] transition">
                      Pay Registration Fee
                    </button>
                  </Link>
                  <button
                    className="border border-[#FCA311] text-[#FCA311] font-semibold px-4 py-1.5 rounded-full hover:bg-[#FCA311] hover:text-white transition"
                    onClick={handleCallBackClick}
                  >
                    Request Call Back
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* BBP Side Image */}
          <div className="w-full max-w-sm text-center border border-white shadow-lg rounded-lg p-2">
            <img src={BBP} alt="Big Post" className="w-full h-auto rounded border border-gray-600" />
            <button
              className="bg-[#FCA311] text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-[#e89900] transition w-full"
              onClick={() =>
                window.open(
                  "https://wa.me/918882153238?text=Hi%2C%20I'm%20interested%20in%20your%20JEE%202026%20batch",
                  "_blank"
                )
              }
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Floating Call Button */}
        {showCallButton && (
          <a
            href="tel:+918882153238"
            className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-5 sm:p-6 md:p-8 rounded-full shadow-xl hover:scale-105 hover:bg-red-700 transition-all duration-200 group z-50"
            title="Call Us"
          >
            <FiPhoneCall size={32} className="group-hover:animate-pulse" />
          </a>
        )}
      </div>
    </div>
  );
};

export default JeeBatches;
