import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function AdminAllDoubts() {
  const [doubts, setDoubts] = useState([]);
  const [answerMap, setAnswerMap] = useState({});
  const [submittedMap, setSubmittedMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [messageMap, setMessageMap] = useState({});

  useEffect(() => {
    fetchDoubts();
  }, []);

  const fetchDoubts = async () => {
    try {
      const res = await axios.get("http://localhost:2707/doubt/allDoubts", {
        withCredentials: true,
      });
      setDoubts(res.data);

      // Pre-fill answerMap with existing answers
      const initialAnswers = {};
      const submittedStatus = {};
      res.data.forEach((d) => {
        initialAnswers[d._id] = d.answer || "";
        submittedStatus[d._id] = !!d.answer;
      });
      setAnswerMap(initialAnswers);
      setSubmittedMap(submittedStatus);
    } catch (err) {
      console.error("Failed to fetch doubts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (id, value) => {
    setAnswerMap((prev) => ({ ...prev, [id]: value }));
    setSubmittedMap((prev) => ({ ...prev, [id]: false })); // reset submit state if editing
  };

  const handleSubmitAnswer = async (id) => {
  const answer = answerMap[id];
  if (!answer.trim()) return alert("Answer cannot be empty.");

  try {
    await axios.patch(
      `http://localhost:2707/doubt/answer/${id}`,
      { answer },
      { withCredentials: true }
    );
    setSubmittedMap((prev) => ({ ...prev, [id]: true }));
    setMessageMap((prev) => ({ ...prev, [id]: "✅ Answer submitted!" }));

    // Show message temporarily
    setTimeout(() => {
      setMessageMap((prev) => {
        const newMap = { ...prev };
        delete newMap[id];
        return newMap;
      });
    }, 3000);

    // ❗ Remove doubt from state after 5 seconds
    setTimeout(() => {
      setDoubts((prev) => prev.filter((doubt) => doubt._id !== id));
    }, 5000);

  } catch (err) {
    console.error("Error submitting answer:", err);
    setMessageMap((prev) => ({ ...prev, [id]: "❌ Failed to submit answer." }));

    setTimeout(() => {
      setMessageMap((prev) => {
        const newMap = { ...prev };
        delete newMap[id];
        return newMap;
      });
    }, 3000);
  }
};


  if (loading)
    return <p className="text-center mt-10 text-white">Loading doubts...</p>;

  return (
    <div >
        <Navbar/>
    
    <div className="min-h-screen bg-[#14213D] text-white pt-[6rem] pb-[6rem]">
        
      <h2 className="text-3xl font-bold text-[#FCA311] text-center mb-8">
        Admin – All Doubts
      </h2>

      <div className="space-y-6">
        {doubts.map((doubt) => (
          <div
            key={doubt._id}
            className="bg-white text-black rounded-xl shadow-md p-6 mx-[3rem] space-y-2"
          >
            <p className="text-lg font-semibold text-[#14213D]">
              🧑‍🎓 {doubt.userId?.fullName || "Unknown"}
            </p>
            <p className="text-sm text-gray-700 italic">
              📧 {doubt.userId?.emailId}
            </p>
            <p className="text-md mt-2">
              <span className="font-semibold text-[#FCA311]">Doubt:</span>{" "}
              {doubt.question}
            </p>

            {doubt.attachment && (
              <a
                href={`http://localhost:2707/${doubt.attachment}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                📎 View Attachment
              </a>
            )}

            <div className="mt-4">
              <label className="block font-medium text-gray-800 mb-1">
                Answer:
              </label>
              <textarea
                className="w-full p-2 rounded border border-gray-300 bg-[#f3f3f3]"
                rows="3"
                value={answerMap[doubt._id] ?? ""}
                onChange={(e) =>
                  handleAnswerChange(doubt._id, e.target.value)
                }
              />

                {messageMap[doubt._id] && (
                <p className="text-center text-base font-semibold text-[#FCA311] mt-4 animate-pulse tracking-wide">
                    {messageMap[doubt._id]}
                </p>
                )}

                <p className="text-xs text-gray-500 text-right">
                Submitted: {new Date(doubt.createdAt).toLocaleString()}
                </p>

                

              <button
                onClick={() => handleSubmitAnswer(doubt._id)}
                disabled={submittedMap[doubt._id]}
                className={`mt-2 font-bold px-4 py-2 rounded transition ${
                  submittedMap[doubt._id]
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-[#FCA311] hover:bg-[#e49f12] text-white"
                }`}
              >
                {submittedMap[doubt._id] ? "Answer Submitted" : "Submit Answer"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
