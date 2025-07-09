import React, { useState } from "react";
import QRCodeImage from "../assets/QRCodeImage.jpeg";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../config";

export default function RegistrationPayment() {
  const [formData, setFormData] = useState({
    name: "",
    transactionId: "",
    note: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await axios.post(
        `${BASE_URL}/payment/submit`,
        formData,
        { withCredentials: true }
      );

      setMessage(response.data.message || "Payment submitted successfully.");
      setFormData({ name: "", transactionId: "", note: "" });
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#0f172a] min-h-screen text-white p-6 pt-[7rem] pb-[6rem]">
        <div className="max-w-5xl mx-auto bg-[#1e293b] rounded-xl p-6 md:p-8 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Panel */}
          <div>
            <h2 className="text-2xl font-bold text-[#fca311] mb-4">
              Docengo Premium Access
            </h2>
            <ul className="space-y-3 text-[#e2e8f0] text-sm sm:text-base">
              <li>✨ Small-Group Mentorship: 1 Mentor × 5 Students</li>
              <li>💬 24×7 Doubt Support + Zoom Mentoring</li>
              <li>📚 Regular DPX + Handwritten Notes</li>
              <li>🛡️ Validity: 1 Year Access</li>
            </ul>
            <p className="mt-5 text-lg font-bold">
              Access: ₹99 only <span className="text-sm font-normal">(Till 20 July 🎉)</span>
            </p>
          </div>

          {/* Right Panel */}
          <div className="bg-[#0f172a] p-4 rounded-md text-center">
            <h3 className="text-xl font-semibold mb-3">UPI Payment</h3>
            
            <div className="flex justify-center mb-4">
              <img
                src={QRCodeImage}
                alt="QR Code"
                className="w-60 sm:w-72 rounded-lg"
              />
            </div>

            <p className="text-sm mb-2">
              UPI ID: <span className="font-semibold">docengo@upi</span>
            </p>

            <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 rounded bg-[#1e293b] border border-gray-600 text-sm"
                required
              />
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                placeholder="Transaction ID *"
                className="w-full p-2 rounded bg-[#1e293b] border border-gray-600 text-sm"
                required
              />
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Optional Note"
                rows={3}
                className="w-full p-2 rounded bg-[#1e293b] border border-gray-600 text-sm"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#fca311] hover:bg-[#e3960d] text-black font-bold py-2 px-4 rounded"
              >
                {loading ? "Submitting..." : "Submit for Activation"}
              </button>
            </form>

            {/* Feedback messages */}
            {message && (
              <p className="text-green-400 text-sm mt-2">{message}</p>
            )}
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}

            <p className="text-xs text-yellow-400 mt-3">
              ⚠️ Your Docengo+ access will be activated within 24 hours after payment verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
