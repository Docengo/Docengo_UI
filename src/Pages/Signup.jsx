import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FloatingActions from '../components/FloatingActions';
import { Eye, EyeOff } from "lucide-react"; // open and closed eye icons


export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    stream: '',
    className: '',
    city: '',
    emailId: '',
    mobileNumber: '',
    password: '',
  });

  const [streams, setStreams] = useState([]);
  const [classes, setClasses] = useState([]);
  const [message, setMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:2707/signup')
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.post("http://localhost:2707/signup", formData);

      setFormData({
        fullName: '',
        stream: '',
        className: '',
        city: '',
        emailId: '',
        mobileNumber: '',
        password: '',
      });

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
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          <input
            type="email"
            name="emailId"
            placeholder="Email"
            value={formData.emailId}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto"
            required
          />
          <select
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            className={`w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto ${
              formData.stream === '' ? 'text-slate-400' : 'text-black'
            }`}
            required
          >
            <option value="" disabled hidden>Select Stream</option>
            {streams.map((stream, idx) => (
              <option className='text-black' key={idx} value={stream}>{stream}</option>
            ))}
          </select>
          <select
            name="className"
            value={formData.className}
            onChange={handleChange}
            className={`w-full max-w-[320px] px-4 py-2 rounded-md border border-gray-300 bg-[#E5E5E5] focus:outline-none mx-auto ${
              formData.className === '' ? 'text-slate-400' : 'text-black'
            }`}
            required
          >
            <option value="" disabled hidden>Select Class</option>
            {classes.map((cls, idx) => (
              <option className='text-black' key={idx} value={cls}>{cls}</option>
            ))}
          </select>
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

        {message && (
          <p className="text-center text-base font-semibold text-[#FCA311] mt-4 animate-pulse tracking-wide">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="mt-6 w-full bg-[#FCA311] hover:bg-[#e3960d] text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>

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
