import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import { BASE_URL } from '../config';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const isAuthenticated = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get(`${BASE_URL}/user`, { withCredentials: true })
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    } else {
      setUser(null); // logout case
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Wait until auth check completes to avoid flickering
  if (isAuthenticated === null) return null;

  return (
    <nav className="bg-[#14213D] text-white flex fixed top-0 items-center justify-between z-[999] px-[22px] py-3 shadow-md shadow-[#908e8e] w-full">
      <Link to="/body">
        <div className="flex items-center space-x-2 text-[#FCA311] text-xl font-bold">
          <img
            src={logo}
            alt="Logo"
            className="w-[2.5rem] h-[2.5rem] bg-white pt-1 mt-1 ml-2 rounded-full"
          />
          <span>Docengo</span>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="hidden custom:hidden md:flex space-x-6">
        <Link to="/batches" className="hover:text-[#FCA311] font-medium">Batches</Link>
        <Link to="/docengoNotes" className="hover:text-[#FCA311] font-medium">Docengo Notes</Link>
        <Link to="/testSeries" className="hover:text-[#FCA311] font-medium">Test Series</Link>
        <Link to="/doubt" className="hover:text-[#FCA311] font-medium">Doubt Support</Link>
        <Link to="/about" className="hover:text-[#FCA311] font-medium">About Us</Link>
        <Link
          to={user?.isAdmin ? "/allHelp" : "/help"}
          className="hover:text-[#FCA311] font-medium"
        >
          Help
        </Link>

        {isAuthenticated === false && (
          <Link to="/signup" className="hover:text-[#FCA311] font-medium">Sign up</Link>
        )}
      </div>

      {/* Profile */}
      <div className="relative pr-[3px]" ref={dropdownRef}>
        <img
          src={
            user?.profileImage ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
          onClick={() => setShowDropdown((prev) => !prev)}
          className="h-10 w-10 rounded-full object-cover cursor-pointer border-2 border-[#FCA311]"
          alt="profile"
        />

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-[#1B263B] text-white rounded shadow-lg z-100 flex flex-col border border-[#FCA311]">
            <div className="md:hidden flex flex-col z-100">
              <Link to="/batches" className="px-4 py-2 hover:bg-[#FCA311]/20">Batches</Link>
              <Link to="/docengoNotes" className="px-4 py-2 hover:bg-[#FCA311]/20">Docengo Notes</Link>
              <Link to="/testSeries" className="px-4 py-2 hover:bg-[#FCA311]/20">Test Series</Link>
              <Link to="/doubt" className="px-4 py-2 hover:bg-[#FCA311]/20">Doubt Support</Link>
              <Link to="/about" className="px-4 py-2 hover:bg-[#FCA311]/20">About Us</Link>
              <Link
                to={user?.isAdmin ? "/allHelp" : "/help"}
                className="hover:text-[#FCA311] font-medium"
              >
                Help
              </Link>
            </div>

            {isAuthenticated === false && (
              <Link to="/signup" className="px-4 py-2 hover:bg-[#FCA311]/20">Sign up</Link>
            )}

            {user && !user.isAdmin && (
              <Link
                to="/myDoubts"
                className="px-4 py-2 text-left text-white hover:bg-[#FCA311]/20 font-semibold border-t border-[#FCA311]"
              >
                My Doubts
              </Link>
            )}

            {user?.isAdmin && (
              <>
                <Link
                  to="/allDoubts"
                  className="px-4 py-2 text-left text-white hover:bg-[#FCA311]/20 font-semibold border-t border-[#FCA311]"
                >
                  All Doubts
                </Link>
                <Link
                  to="/allFeedbacks"
                  className="px-4 py-2 text-left text-white hover:bg-[#FCA311]/20 font-semibold border-t border-[#FCA311]"
                >
                  All Feedbacks
                </Link>
              </>
            )}

            {user && (
              <>
                <Link
                  to="/myProfile"
                  className="px-4 py-2 text-left text-white hover:bg-[#FCA311]/20 font-semibold border-t border-[#FCA311]"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-left text-red-300 hover:bg-red-600/20 font-semibold border-t border-[#FCA311]"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
