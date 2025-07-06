import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { FaCity, FaGraduationCap, FaPhoneAlt, FaStream } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:2707/profile/view", {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (err) {
      setError("Failed to load profile.");
      console.error(err);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#14213D] text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#14213D] text-white">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#14213D] pt-[7rem] px-4 flex justify-center items-start">
        <div className="bg-[#1B263B] text-white rounded-3xl shadow-lg shadow-gray-400 max-w-3xl w-full p-10 relative overflow-hidden">

          {/* Soft background glow */}
          <div className="absolute w-64 h-64 bg-[#e30d0d]/10 rounded-full top-[-4rem] left-[-4rem] blur-2xl animate-pulse"></div>

          {/* Header */}
          <div className="text-center mb-10 z-10 relative">
            <h2 className="text-4xl font-extrabold text-[#FCA311] drop-shadow-sm">
              Welcome, {user.fullName.split(" ")[0]} 👋
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              Here's your personal dashboard.
            </p>
          </div>

          {/* Photo + Email + Edit */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 z-10 relative">
            <img
              src={user.photoUrl}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#FCA311] shadow-md hover:scale-105 transition duration-300"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold">{user.fullName}</h3>
              <p className="text-[#FCA311] font-medium mt-1 flex items-center justify-center md:justify-start gap-2">
                <MdEmail /> {user.emailId}
              </p>
              <Link to="/editProfile">
                <button className="mt-4 px-5 py-2 bg-[#fca311] hover:bg-[#e5940d] text-white rounded-lg font-semibold shadow-sm transition">
                  ✏️ Edit Profile
                </button>
              </Link>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 z-10 relative">
            <DetailCard icon={<FaStream />} label="Stream" value={user.stream} />
            <DetailCard icon={<FaGraduationCap />} label="Class" value={user.className} />
            <DetailCard icon={<FaCity />} label="City" value={user.city} />
            <DetailCard icon={<FaPhoneAlt />} label="Phone" value={user.mobileNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Info Card Component
function DetailCard({ icon, label, value }) {
  return (
    <div className="bg-[#233044] border border-[#fca31136] p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 text-[#FCA311] text-sm font-semibold mb-1">
        <span className="text-base">{icon}</span>
        {label}
      </div>
      <p className="text-white text-[15px] pl-8">{value}</p>
    </div>
  );
}
