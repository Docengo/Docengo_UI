import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "../config";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/auth/forgot-password`, { email });
      setMessage('✅ Reset link sent to your email!');
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to send reset email. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14213D] text-white p-6">
      <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 rounded border border-gray-300 bg-[#E5E5E5]"
        />
        <button
          type="submit"
          className="w-full bg-[#FCA311] hover:bg-[#e3960d] text-white font-bold py-2 px-4 rounded"
        >
          Send Reset Link
        </button>
        {message && <p className="text-center mt-4 font-medium text-[#FCA311]">{message}</p>}
      </form>
    </div>
  );
}
