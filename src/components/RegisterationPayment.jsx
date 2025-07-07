import React from "react";
import QRCodeImage from "../assets/QRCodeImage.jpeg"; // <-- your QR image path
import Navbar from "../components/Navbar";

export default function RegistrationPayment() {
  return (
    <div>
        <Navbar />
    <div className="bg-[#0f172a] min-h-screen text-white p-6 pt-[8rem] pb-[6rem]">
      
      <div className="max-w-5xl mx-auto bg-[#1e293b] rounded-xl p-8 shadow-lg grid md:grid-cols-2 gap-6">
        
        <div>
          <h2 className="text-2xl font-bold text-[#fca311] mb-4">Docengo Premium Access</h2>
          <ul className="space-y-3 text-[#e2e8f0]">
            <li>✨ Small-Group Mentorship: 1 Mentor × 5 Students</li>
            <li>💬 24×7 Doubt Support + Zoom Mentoring</li>
            <li>📚 Regular DPX + Handwritten Notes</li>
            <li>🛡️ Validity: 1 Year Access</li>
          </ul>
          <p className="mt-4 text-lg font-bold">Access: ₹99 only (Till 20 July 🎉)</p>
        </div>

        <div className="bg-[#0f172a] p-4 rounded-md text-center">
          <h3 className="text-xl font-semibold mb-2 ">UPI Payment</h3>
          <img src={QRCodeImage} alt="QR Code" className="w-[22rem]  mb-4 ml-11 rounded-lg" />
          <p>UPI ID: <span className="font-semibold">docengo@upi</span></p>
          <form className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-[#1e293b] border border-gray-600"
              required
            />
            <input
              type="text"
              placeholder="Transaction ID *"
              className="w-full p-2 rounded bg-[#1e293b] border border-gray-600"
              required
            />
            <textarea
              placeholder="Optional Note"
              rows={3}
              className="w-full p-2 rounded bg-[#1e293b] border border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#fca311] hover:bg-[#e3960d] text-black font-bold py-2 px-4 rounded"
            >
              Submit for Activation
            </button>
          </form>
          <p className="text-xs text-yellow-400 mt-2">
            ⚠️ Your Docengo+ access will be activated within 24 hours after payment verification.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
