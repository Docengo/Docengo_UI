import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    stream: "",
    className: "",
    mobileNumber: "",
  });
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2707/profile/view", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setFormData({
          fullName: res.data.fullName || "",
          city: res.data.city || "",
          stream: res.data.stream || "",
          className: res.data.className || "",
          mobileNumber: res.data.mobileNumber || "",
        });
        setPreview(res.data.photoUrl || "");
      })
      .catch(() => setError("Failed to load profile."));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });
    if (photo) {
      payload.append("photo", photo);
    }

    try {
      await axios.patch("http://localhost:2707/profile/edit", payload, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Profile updated successfully!");
      navigate("/myProfile");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update profile.");
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
        <div className="bg-[#1B263B] text-white rounded-3xl shadow-md max-w-3xl w-full p-10 relative">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-[#FCA311]">
              Edit Your Profile ✏️
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Make changes and save to update your info.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload + Preview */}
            <div className="flex flex-col items-center mb-6">
              <img
                src={
                  preview ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
                alt="Profile Preview"
                className="w-28 h-28 rounded-full border-4 border-[#FCA311] object-cover shadow-md"
              />
              <label className="mt-3 text-sm cursor-pointer bg-[#FCA311] px-4 py-2 rounded-lg shadow text-white hover:bg-[#e49f12]">
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Form Fields */}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded border bg-[#F8F9FA] text-black"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="flex-1 px-4 py-2 rounded border bg-[#F8F9FA] text-black"
              />
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                className="flex-1 px-4 py-2 rounded border bg-[#F8F9FA] text-black"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="stream"
                value={formData.stream}
                onChange={handleInputChange}
                className="flex-1 px-4 py-2 rounded border bg-[#F8F9FA] text-black"
              >
                <option value="">Select Stream</option>
                <option value="JEE">JEE</option>
                <option value="NEET">NEET</option>
                <option value="Other">Other</option>
              </select>

              <select
                name="className"
                value={formData.className}
                onChange={handleInputChange}
                className="flex-1 px-4 py-2 rounded border bg-[#F8F9FA] text-black"
              >
                <option value="">Select Class</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>
                <option value="Dropper">Dropper</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FCA311] text-white font-bold py-3 rounded shadow-lg hover:bg-[#e49f12]"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
