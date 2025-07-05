import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function MyDoubts() {
  const [doubts, setDoubts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:2707/doubt/myDoubts", { withCredentials: true })
      .then((res) => {
        setDoubts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:2707/doubt/delete/${selectedId}`, {
        withCredentials: true,
      });
      setDoubts((prev) => prev.filter((d) => d._id !== selectedId));
      setNotification("✅ Doubt deleted successfully");
    } catch (err) {
      setNotification("❌ Cannot delete. It may be older than 1 hour.");
    } finally {
      setShowModal(false);
      setSelectedId(null);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const isDeletable = (createdAt) => {
    const oneHour = 60 * 60 * 1000;
    return Date.now() - new Date(createdAt).getTime() < oneHour;
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#0F172A] text-white pt-[6rem] px-4 sm:px-8 pb-[6rem]">
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
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 hover:scale-[1.01] transition-transform duration-300 relative"
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

                {/* Delete Button (only if within 1 hour) */}
                {isDeletable(doubt.createdAt) && (
                  <button
                    onClick={() => confirmDelete(doubt._id)}
                    className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-2 py-2 rounded"
                    title="Delete"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center text-black">
            <h3 className="text-lg font-semibold mb-4">Are you sure?</h3>
            <p className="mb-6">You are about to delete this doubt. This action cannot be undone.</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#14213D] text-white px-6 py-3 rounded-xl shadow-lg z-50">
          {notification}
        </div>
      )}
    </div>
  );
}
