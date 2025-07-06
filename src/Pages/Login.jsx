import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FloatingActions from '../components/FloatingActions';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:2707/login', formData, {
        withCredentials: true,
      });

      const msg = response.data.message;
      setMessage(`✅ ${msg}`);

      setTimeout(() => {
          navigate('/body'); 
      }, 1500);

    } catch (err) {
      console.error('Login Error:', err.response?.data);
      const errorMsg = err.response?.data || '❌ Login failed. Try again.';
      setMessage(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14213D] text-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#000000] mb-6 text-center">
          Log In
        </h2>

        <input
          type="email"
          name="emailId"
          placeholder="Email"
          value={formData.emailId}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none"
          required
        />

        {message && (
          <p className="text-center text-base font-semibold text-[#FCA311] mt-4 animate-pulse tracking-wide">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#FCA311] hover:bg-[#e3960d] text-white font-bold py-2 px-4 rounded mt-6"
        >
          Log In
        </button>

        <p className="mt-6 text-center text-[#1f3d80] text-sm">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-[#1f3d80] font-bold hover:underline hover:text-[#14213d] transition"
          >
            Sign up
          </Link>
        </p>
      </form>
      <FloatingActions />
    </div>
  );
}
