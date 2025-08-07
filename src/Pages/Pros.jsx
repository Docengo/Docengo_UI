import React from 'react';
import { FaBrain, FaPenFancy, FaRocket, FaUsers, FaClipboardCheck, FaVideo } from 'react-icons/fa';
import FloatingActions from '../components/FloatingActions';

const features = [
  {
    icon: <FaBrain size={28} className="text-[#E63946]" />,
    title: "1:5 Mentor Ratio",
    description:
      "No more shouting in a sea of 100 students. With just 5 learners per mentor, your doubts get the spotlight. India's top faculty teaches you live — like a private classroom, not a crowded webinar.",
  },
  {
    icon: <FaPenFancy size={28} className="text-[#E63946]" />,
    title: "Handwritten Notes",
    description:
      "We’re talking real notes — the exact ones used by IITians and top Doctors. Clear, colorful, and brain-friendly. These aren’t just notes — they’re exam-winning cheat codes, handwritten for you.",
  },
  {
    icon: <FaRocket size={28} className="text-[#E63946]" />,
    title: "No need to Buy the Full Course ❌",
    description:
      "Why pay for the full course when you're only stuck in Organic Chemistry? Buy only what you need, when you need it — like shopping for rank boosters at Cadbury prices.",
  },
  {
    icon: <FaVideo size={28} className="text-[#E63946]" />,
    title: "Live Zoom Doubt-Solving",
    description:
      "Get direct face-to-face sessions with top mentors. Ask anything, again and again — it’s live, personal, and limited to just 5 students. Your doubts don’t stand a chance.",
  },
  {
    icon: <FaClipboardCheck size={28} className="text-[#E63946]" />,
    title: "Boards + NEET/JEE = ✅",
    description:
      "Dual prep made smart. Ace both boards and entrance exams without burning out. Start early in 9th–10th to build a strong base — and if you’re in 11th, 12th, or a dropper: let’s hustle harder for your dream rank.",
  },
  {
    icon: <FaUsers size={28} className="text-[#E63946]" />,
    title: "Foundation to Finals",
    description:
      "From your first NCERT chapter to your final rank — we’ve mapped the journey. Whether you're starting early or restarting after 12th, we’ve got a clear, focused plan for you.",
  },
];

function DocengoAdvantage() {
  return (
    <section className="bg-[#f5f8ff] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#14213D] mb-4">
          Why <span className="text-transparent bg-gradient-to-r from-[#fca311] to-[#14213d] bg-clip-text drop-shadow-md">
    Docengo
  </span>? Here's Your <span className="text-[#FCA311]">Rank Advantage 😎</span>
        </h2>
        <p className="text-md md:text-lg text-[#14213D] max-w-3xl mx-auto mb-10">
          No spammy bundles. No mass coaching chaos. Just crystal-clear mentorship, topic-wise buying, and <strong>Chocolate-priced prep</strong> — powered by India’s finest minds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5E5] rounded-xl p-6 text-left shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#14213D] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#333333] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FloatingActions />
    </section>
  );
}

export default DocengoAdvantage;
