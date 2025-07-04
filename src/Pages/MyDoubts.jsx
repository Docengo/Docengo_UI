import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function MyDoubts() {
  const [doubts, setDoubts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:2707/doubt/myDoubts", { withCredentials: true })
      .then((res) => {
        setDoubts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
  <div>
    <Navbar />

   <div className="min-h-screen bg-[#0F172A] text-white pt-[6rem] px-4 sm:px-8">
  <h2 className="text-4xl font-extrabold mb-6 text-center text-[#FCA311] tracking-wide">
     My Doubts
  </h2>

  {loading ? (
    <p className="text-center text-gray-200 animate-pulse">⏳ Loading your doubts...</p>
  ) : doubts.length === 0 ? (
    <p className="text-center text-gray-400">🙁 You haven’t submitted any doubts yet.</p>
  ) : (
    <div className="space-y-8 max-w-4xl mx-auto">
      {doubts.map((doubt) => (
        <div
          key={doubt._id}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 hover:scale-[1.01] transition-transform duration-300"
        >
          <p className="text-lg font-semibold text-[#FCA311] mb-2">
            📚 Subject: <span className="text-white">{doubt.subject}</span>
          </p>
          <p className="text-base text-white mb-2">
            📝 <span className="font-semibold text-[#FCA311]">Topic:</span> {doubt.topic}
          </p>
          <p className="text-base text-white mb-4">
            ❓ <span className="font-semibold text-[#FCA311]">Your Doubt:</span> {doubt.question}
          </p>
          <div className="bg-white/20 rounded-xl p-4 border border-white/10">
            <p className="font-medium text-[#FCA311] mb-1">💬 Answer:</p>
            <p className="text-white text-sm">
              {doubt.answer ? doubt.answer : "⏳ Yet to be answered by our team."}
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
</div>
);

}
