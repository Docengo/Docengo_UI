import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import FloatingActions from '../components/FloatingActions';
import { BASE_URL } from "../config";

export default function DoubtSupport() {
  const [formData, setFormData] = useState({
    subject: '',
    topic: '',
    question: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await axios.post(`${BASE_URL}/doubt/submit`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMessage('✅ Doubt submitted successfully!');
      setTimeout(() => setMessage(''), 3000);

      setFormData({ subject: '', topic: '', question: '' });
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to submit doubt. Try again.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#14213D] text-white flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-xl"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Doubt Support</h2>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 rounded border border-gray-300 bg-[#E5E5E5] focus:outline-none"
          />

          <input
            type="text"
            name="topic"
            placeholder="Topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="w-full mb-4 px-4 py-2 rounded border border-gray-300 bg-[#E5E5E5] focus:outline-none"
          />

          <textarea
            name="question"
            placeholder="Describe your doubt... [You can also share the Google Drive public URL of media]"
            value={formData.question}
            onChange={handleChange}
            required
            rows={6}
            className="w-full mb-4 px-4 py-2 rounded border border-gray-300 bg-[#E5E5E5] focus:outline-none"
          ></textarea>

          {message && (
            <p className="text-center text-base font-semibold text-[#FCA311] mb-4 animate-pulse">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FCA311] hover:bg-[#e3960d] text-white font-bold py-2 px-4 rounded"
          >
            Submit Doubt
          </button>
        </form>
      </div>
      <FloatingActions />
    </div>
  );
}
