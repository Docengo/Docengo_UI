import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import feedbackIcon from "../assets/feedback.png";

export default function FloatingFeedback() {
  const [showModal, setShowModal] = useState(false);

 


  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
        {/* Feedback Button - square with rounded corners */}
        <button
          className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-xl shadow-xl flex items-center justify-center transition"
          onClick={() => setShowModal(true)}
        >
          <img
            src={feedbackIcon}
            alt="Feedback"
            className="w-10 h-10 object-contain filter brightness-0 invert" // ⬅️ Increased from w-8 h-8 to w-10 h-10
          />
        </button>
      </div>

      {/* Feedback Modal */}
      {showModal && <FeedbackModal onClose={() => setShowModal(false)} />}
    </>
  );
}
