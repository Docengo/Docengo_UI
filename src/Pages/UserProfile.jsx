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
    axios
      .get("http://localhost:2707/profile/view", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load profile");
      });
  }, []);

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

  console.log("photoUrl", user.photoUrl);


  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-[#14213D] pt-[7rem] px-4 flex justify-center items-start">
      <div className="bg-[#131827] text-[#14213D] rounded-3xl shadow-lg max-w-3xl w-full p-10">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-[#FCA311]">
              Welcome, {user.fullName.split(" ")[0]} 👋
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              Here's your personal dashboard.
            </p>
          </div>

          {/* Profile Photo + Info */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={
                user.photoUrl ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#FCA311] shadow-md"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#EEF3FF]">{user.fullName}</h3>
              <p className="text-[#FCA311] font-medium mt-1 flex items-center justify-center md:justify-start gap-2">
                <MdEmail /> {user.emailId}
              </p>
              <Link to="/editProfile">
                <button className="mt-4 px-5 py-2 bg-[#fca311] hover:bg-[#e5940d] text-white rounded-lg font-semibold shadow-sm">
                  ✏️ Edit Profile
                </button>
              </Link>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
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

function DetailCard({ icon, label, value }) {
  return (
    <div className="bg-[#233044] border border-[#fca31136] p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-3 text-[#FCA311] text-sm font-semibold mb-1">
        <span>{icon}</span>
        {label}
      </div>
      <p className="text-white pl-8">{value}</p>
    </div>
  );
}
