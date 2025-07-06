import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    stream: "",
    className: "",
    city: "",
    mobileNumber: "",
    photoUrl: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:2707/profile/view", { withCredentials: true })
      .then((res) => setFormData(res.data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.patch(
        "http://localhost:2707/profile/edit",
        formData,
        { withCredentials: true }
      );
      setMessage("✅ Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to update profile.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#14213D]  pt-[6rem] px-4 flex flex-col items-center">
      <Navbar />
      <div className="bg-[#1B263B] text-white max-w-2xl w-full p-8 rounded-3xl shadow-lg shadow-slate-400">
        <h2 className="text-3xl font-bold text-[#FCA311] mb-6 text-center">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          {/* Email (readonly) */}
          <Input
            label="Email"
            name="emailId"
            value={formData.emailId}
            readOnly
          />

          {/* Stream and Class */}
          <div className="flex flex-col md:flex-row gap-4">
            <Select
              label="Stream"
              name="stream"
              value={formData.stream}
              options={["JEE", "NEET", "Other"]}
              onChange={handleChange}
            />
            <Select
              label="Class"
              name="className"
              value={formData.className}
              options={["IX", "X", "XI", "XII", "Dropper"]}
              onChange={handleChange}
            />
          </div>

          {/* City and Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <Input
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          {/* Photo URL */}
          <Input
            label="Photo URL"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FCA311] hover:bg-[#e5940d] text-white font-bold py-2 px-4 rounded shadow transition"
          >
            Save Changes
          </button>

          {message && (
            <p className="text-center mt-2 text-[#FCA311] font-semibold">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

// 🔸 Reusable Input component
function Input({ label, name, value, onChange, readOnly = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#FCA311] mb-1">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full px-4 py-2 rounded border ${
          readOnly ? "bg-gray-300 cursor-not-allowed" : "bg-[#F8F9FA]"
        } text-black focus:outline-none focus:ring-2 focus:ring-[#FCA311]/40`}
        required={!readOnly}
      />
    </div>
  );
}

// 🔸 Reusable Select component
function Select({ label, name, value, options, onChange }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-[#FCA311] mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded border border-gray-300 bg-[#F8F9FA] text-black focus:outline-none focus:ring-2 focus:ring-[#FCA311]/40"
        required
      >
        <option value="" disabled>Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
