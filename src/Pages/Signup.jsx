import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FloatingActions from '../components/FloatingActions';
import { Eye, EyeOff } from "lucide-react";
import { BASE_URL } from '../config';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    stream: '',
    className: '',
    city: '',
    emailId: '',
    mobileNumber: '',
    password: '',
  });

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false); // ✅ OTP loading state
  const [streams, setStreams] = useState([]);
  const [classes, setClasses] = useState([]);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/signup`)
      .then((res) => {
        setStreams(res.data.streams || []);
        setClasses(res.data.classes || []);
      })
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSendOtp = async () => {
    setOtpLoading(true);
    setMessage("Sending OTP...");
    try {
      await axios.post(`${BASE_URL}/send-otp`, {
        emailId: formData.emailId,
      });
      setOtpSent(true);
      setMessage("📨 OTP sent to your email.");
    } catch (err) {
      setMessage("❌ Failed to send OTP.");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await axios.post(`${BASE_URL}/verify-otp`, {
        emailId: formData.emailId,
        otp,
      });
      setOtpVerified(true);
      setMessage("✅ OTP verified successfully.");
    } catch (err) {
      setMessage("❌ Invalid OTP.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!otpVerified) {
      setMessage("⚠️ Please verify OTP first.");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/signup`, formData);

      setFormData({
        fullName: '',
        stream: '',
        className: '',
        city: '',
        emailId: '',
        mobileNumber: '',
        password: '',
      });
      setOtp('');
      setOtpSent(false);
      setOtpVerified(false);
      setMessage("✅ Signup successful!");

      setTimeout(() => {
        navigate("/body");
      }, 1500);
    } catch (err) {
      console.error("Signup Error:", err.response?.data);
      const errorMsg = err.response?.data || "❌ Signup failed. Try again.";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14213D] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-[#000000] mb-6 text-center">Sign Up</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          {/* Email */}
          <input
            type="email"
            name="emailId"
            placeholder="Email"
            value={formData.emailId}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          {/* Mobile */}
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          {/* Stream */}
          <select
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            className={`w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto ${formData.stream === '' ? 'text-slate-400' : 'text-black'}`}
            required
          >
            <option value="" disabled hidden>Select Stream</option>
            {streams.map((stream, idx) => (
              <option className='text-black' key={idx} value={stream}>{stream}</option>
            ))}
          </select>
          {/* Class */}
          <select
            name="className"
            value={formData.className}
            onChange={handleChange}
            className={`w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto ${formData.className === '' ? 'text-slate-400' : 'text-black'}`}
            required
          >
            <option value="" disabled hidden>Select Class</option>
            {classes.map((cls, idx) => (
              <option className='text-black' key={idx} value={cls}>{cls}</option>
            ))}
          </select>
          {/* Password */}
          <div className="relative w-full max-w-[660px] mx-auto md:col-span-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 pr-12 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none"
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <Eye className="h-5 w-5 text-gray-600" />
              ) : (
                <EyeOff className="h-5 w-5 text-gray-600" />
              )}
            </div>
          </div>
        </div>

        {/* OTP Section */}
        <div className="mt-6 space-y-3 text-center">
          {!otpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={otpLoading}
              className={`bg-[#FCA311] hover:bg-[#e3960d] text-white font-bold py-2 px-4 rounded ${otpLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {otpLoading ? "Sending..." : "Send OTP"}
            </button>
          ) : !otpVerified ? (
            <div className="flex flex-col gap-2 items-center">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-52 px-3 py-1.5 rounded-md border border-gray-300 bg-[#E5E5E5] text-black focus:outline-none"
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="bg-[#FCA311] hover:bg-[#e3960d] text-white font-bold py-2 px-4 rounded"
              >
                Verify OTP
              </button>
            </div>
          ) : (
            <p className="text-green-600 font-semibold">✅ E-mail Verified</p>
          )}
        </div>

        {/* Message */}
        {message && (
          <p className="text-center text-base font-semibold text-[#FCA311] mt-4 animate-pulse tracking-wide">
            {message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full bg-[#FCA311] hover:bg-[#e3960d] text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-[#1f3d80] text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#1f3d80] font-bold hover:underline hover:text-[#14213d] transition"
          >
            Log in
          </Link>
        </p>
      </form>
      <FloatingActions />
    </div>
  );
}
