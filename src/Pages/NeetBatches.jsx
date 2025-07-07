import { useState } from "react";
import BatchCard from "../components/BatchCard"; // you’ll create this next

export default function JeeBatchs() {
  const [showBatches, setShowBatches] = useState(false);

  return (
    <div className="bg-[#0f172a] min-h-screen py-16 px-6 md:px-32 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-6 text-[#fca311]">
        JEE Batches
      </h2>

      <button
        onClick={() => setShowBatches(true)}
        className="bg-[#fca311] hover:bg-[#ff8c00] text-white font-semibold px-6 py-3 rounded-xl transition text-lg shadow-md"
      >
        🚀 Explore Batches
      </button>

      {showBatches && (
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <BatchCard
            title="Charge Batch 1.0 JEE 2026"
            startDate="25th July 2025"
            validity="Till July 2026"
            weekdayTime="75–90 mins daily"
            weekendTime="Offline DPX solving (Docengo Practice Experience)"
            imageSrc="/assets/JEE12.png"
          />

          <BatchCard
            title="Concept Booster Batch"
            startDate="1st August 2025"
            validity="Till August 2026"
            weekdayTime="60 mins focused revision"
            weekendTime="Doubt-solving + Mock Tests"
            imageSrc="/assets/JEE12.png"
          />
        </div>
      )}
    </div>
  );
}
