import React from "react";

export default function BatchCard({
  title,
  startDate,
  validity,
  weekdayTime,
  weekendTime,
  imageSrc,
}) {
  return (
    <div className="bg-white text-[#0f172a] rounded-2xl overflow-hidden shadow-xl">
      <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#fca311] mb-2">{title}</h3>

        <p className="mb-1">
          <strong>📅 Batch Starts:</strong> {startDate}
        </p>
        <p className="mb-1">
          <strong>⏳ Valid Till:</strong> {validity}
        </p>
        <p className="mb-1">
          <strong>📖 Weekdays:</strong> {weekdayTime}
        </p>
        <p className="mb-4">
          <strong>🧠 Weekends:</strong> {weekendTime}
        </p>

        <div className="flex gap-4">
          <button className="bg-[#14213d] text-white px-4 py-2 rounded hover:bg-[#1f2b45] transition">
            💳 Pay for Batch
          </button>
          <button className="border border-[#14213d] px-4 py-2 rounded text-[#14213d] hover:bg-[#fca311] hover:text-white transition">
            📞 Request a Call
          </button>
        </div>
      </div>
    </div>
  );
}
