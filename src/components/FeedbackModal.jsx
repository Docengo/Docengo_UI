// src/components/FeedbackModal.jsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export default function FeedbackModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 0,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRating = (rate) => {
    setFormData((prev) => ({
      ...prev,
      rating: rate,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  try {
    await axios.post("http://localhost:2707/feedback/submit", formData);
    setMessage("✅ Feedback submitted successfully!");
    setFormData({ name: "", message: "", rating: 0 });
    setTimeout(() => setMessage(""), 3000);
    setTimeout(() => onClose(), 4000);
    
  } catch (err) {
    console.error("Failed to submit feedback:", err);
    setMessage("❌ Failed to submit Feedback.");
    setTimeout(() => setMessage(""), 3000);
  }
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#e63946] via-[#1d3557] to-[#14213D] w-full max-w-xl">
        <div className="bg-white rounded-xl p-6 w-full">
          {/* Header */}
          <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#e63946] via-[#1d3557] to-[#14213D] bg-clip-text text-transparent">
            Share Your Feedback ✨
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 bg-[#f5f5f5] focus:outline-none"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Write your feedback..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 bg-[#f5f5f5] focus:outline-none"
              required
            />

            {/* Rate Us */}
            <div className="mb-4 text-center">
              <p className="mb-2 font-semibold text-[#14213D] text-lg">Rate Us</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={28}
                    className={`cursor-pointer transition ${
                      formData.rating >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(star)}
                  />
                ))}
              </div>
            </div>

             {message && (
                <p className="text-center mt-3 text-[#FCA311] font-semibold pb-2">
                  {message}
                </p>
              )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 font-bold text-white rounded-md bg-gradient-to-r from-[#e63946] via-[#1d3557] to-[#14213D] hover:opacity-90 transition"
            >
              Submit Feedback
            </button>
          </form>

          {/* Cancel */}
          <button
            onClick={onClose}
            className="mt-4 block mx-auto text-sm text-gray-600 hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
