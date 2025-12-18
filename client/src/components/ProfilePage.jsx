import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaClock,
} from "react-icons/fa";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    dob: "",
    birthTime: "",
    birthPlace: "",
    name: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`/api/profile`);
        if (res.data?.profile) {
          setProfile({
            dob: res.data.profile.dob?.slice(0, 10) || "",
            birthTime: res.data.profile.birthTime || "",
            birthPlace: res.data.profile.birthPlace || "",
            name: res.data.name || "",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/profile", {
        dob: profile.dob,
        birthTime: profile.birthTime,
        birthPlace: profile.birthPlace,
        name: profile.name,
      });

      alert("Profile updated successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0018] via-[#18002a] to-black text-white flex justify-center px-4 py-20">
      <div className="w-full max-w-2xl bg-[#1d0038]/60 backdrop-blur-xl p-10 rounded-3xl shadow-[0_0_40px_rgba(120,0,200,0.3)] border border-purple-700/30 relative overflow-hidden">
        {/* Floating decorative orbs */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-600/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/30 blur-3xl rounded-full"></div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-purple-300 text-center mb-3 tracking-wide drop-shadow-md animate-fadeIn">
          Your Astro Profile
        </h1>
        <p className="text-center text-purple-200/80 mb-10 text-sm">
          Accurate birth details ensure precise Kundli & Horoscope predictions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-purple-300 mb-1 font-medium flex items-center gap-2">
              <FaUser /> Name
            </label>
            <input
              type="text"
              value={profile.name}
              placeholder="Enter your full name"
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full p-3 bg-[#260044]/60 border border-purple-500/40 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 transition-all"
              required
            />
          </div>

          {/* DOB */}
          <div className="flex flex-col">
            <label className="text-purple-300 mb-1 font-medium flex items-center gap-2">
              <FaBirthdayCake /> Date of Birth
            </label>
            <input
              type="date"
              value={profile.dob}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
              className="w-full p-3 bg-[#260044]/60 border border-purple-500/40 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 transition-all"
              required
            />
          </div>

          {/* Birth Time */}
          <div className="flex flex-col">
            <label className="text-purple-300 mb-1 font-medium flex items-center gap-2">
              <FaClock /> Birth Time
            </label>
            <input
              type="time"
              value={profile.birthTime}
              onChange={(e) =>
                setProfile({ ...profile, birthTime: e.target.value })
              }
              className="w-full p-3 bg-[#260044]/60 border border-purple-500/40 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 transition-all"
              required
            />
          </div>

          {/* Birth Place */}
          <div className="flex flex-col">
            <label className="text-purple-300 mb-1 font-medium flex items-center gap-2">
              <FaMapMarkerAlt /> Birth Place
            </label>
            <input
              type="text"
              value={profile.birthPlace}
              placeholder="City, Country"
              onChange={(e) =>
                setProfile({ ...profile, birthPlace: e.target.value })
              }
              className="w-full p-3 bg-[#260044]/60 border border-purple-500/40 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-500/50 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 active:scale-[0.98] transition-all text-white font-semibold text-lg shadow-lg shadow-purple-800/40"
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}
