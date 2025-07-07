import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"; 
import help_image from "../assets/help_image.jpg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import FloatingActions from "../components/FloatingActions";
import { BASE_URL } from "../config";


export default function Help() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    topic: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous message

    try {
      const res = await axios.post(`${BASE_URL}/help/submit`, formData , {
        withCredentials: true,
        });
      setMessage("✅ Help request submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        topic: "",
        description: "",
      });

      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to submit help request.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#14213D] flex flex-col items-center justify-center pt-[6rem] pb-[4rem] px-4">
        <h2 className="text-3xl font-extrabold text-[#fca311] text-center mb-[2.5rem]">
          Need Some Help?
        </h2>

        <div className="shadow-lg shadow-slate-500 pl-8 rounded-2xl flex flex-col gap-[4rem] lg:flex-row items-center max-w-6xl w-full overflow-hidden hover:scale-[1.03] transition-transform duration-300">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={help_image}
              alt="Help Illustration"
              className="w-[35rem] rounded"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2 p-8 mt-8 pl-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-2 rounded border border-gray-300 bg-[#F8F9FA] focus:outline-none"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-2 rounded border border-gray-300 bg-[#F8F9FA] focus:outline-none"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 bg-[#F8F9FA] focus:outline-none"
              />

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 rounded border border-gray-300 bg-[#F8F9FA] focus:outline-none"
                />
                <input
                  name="topic"
                  type="text"
                  placeholder="Your Query Topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-2 rounded border border-gray-300 bg-[#F8F9FA] focus:outline-none"
                />
              </div>

              <textarea
                name="description"
                placeholder="Describe your issue..."
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 bg-[#F8F9FA] focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#FCA311] hover:bg-[#e49f12] text-white font-bold py-2 px-4 rounded shadow-lg"
              >
                Submit
              </button>

              {message && (
                <p className="text-center mt-3 text-[#FCA311] font-semibold">
                  {message}
                </p>
              )}

               
              {/* Contact Info Side by Side */}
                <div className=" flex flex-wrap justify-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#FCA311]" />
                    <span className="text-sm">+91 88821 53238</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-[#FCA311]" />
                    <span className="text-sm">info@docengoeducation.com</span>
                  </div>
                </div>




            </form>
          </div>
        </div>
      </div>
      <FloatingActions />
    </div>
  );
}
