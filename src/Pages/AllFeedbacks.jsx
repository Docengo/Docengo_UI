import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Adjust if needed
import { BASE_URL } from "../config";

export default function AllHelp() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feedback/allFeedbacks`, {
        withCredentials: true,
      });
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Failed to fetch help messages:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-[#14213D] text-white text-center pt-[6rem]">
        <Navbar />
        <p className="text-xl font-semibold">Loading Feedbacks...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#14213D] text-white pt-[6rem] pb-[4rem]">
      <Navbar />
      <h2 className="text-3xl font-bold text-[#FCA311] text-center mb-8">
        Admin – All Feedbacks
      </h2>

      <div className="max-w-5xl mx-auto space-y-6 px-4">
        {feedbacks.length === 0 ? (
            <p className="text-center text-lg text-gray-500">No feedbacks found.</p>
        ) : (
            feedbacks.map((msg) => (
            <div
                key={msg._id}
                className="bg-white text-black p-6 rounded-lg shadow-md space-y-2"
            >
                <p className="text-lg font-bold text-[#14213D]">👤 {msg.name}</p>
                <p className="text-sm text-gray-700">
                ⭐ Rating:{" "}
                <span className="font-semibold text-[#FCA311]">{msg.rating}/5</span>
                </p>
                <p className="text-gray-800">
                <span className="font-semibold text-[#FCA311]">Message:</span>{" "}
                {msg.message}
                </p>
                <p className="text-xs text-gray-500 text-right">
                Submitted: {new Date(msg.createdAt).toLocaleString()}
                </p>
            </div>
            ))
        )}
        </div>

    </div>
  );
}
