import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; // Adjust if needed

export default function AllHelp() {
  const [helpMessages, setHelpMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHelpMessages();
  }, []);

  const fetchHelpMessages = async () => {
    try {
      const res = await axios.get("http://localhost:2707/help/allHelp", {
        withCredentials: true,
      });
      setHelpMessages(res.data);
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
        <p className="text-xl font-semibold">Loading help queries...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#14213D] text-white pt-[6rem] pb-[4rem]">
      <Navbar />
      <h2 className="text-3xl font-bold text-[#FCA311] text-center mb-8">
        Admin – Help Messages
      </h2>

      <div className="max-w-5xl mx-auto space-y-6 px-4">
        {helpMessages.length === 0 ? (
          <p className="text-center text-lg text-gray-300">No help requests found.</p>
        ) : (
          helpMessages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white text-black p-6 rounded-lg shadow-md space-y-2"
            >
              <p className="text-lg font-bold text-[#14213D]">
                👤 {msg.firstName} {msg.lastName}
              </p>
              <p className="text-sm text-gray-700 italic">📧 {msg.email}</p>
              <p className="text-sm text-gray-700">🏙️ {msg.city || "N/A"}</p>
              <p>
                <span className="font-semibold text-[#FCA311]">Topic:</span> {msg.topic}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-[#FCA311]">Issue:</span>{" "}
                {msg.description}
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
