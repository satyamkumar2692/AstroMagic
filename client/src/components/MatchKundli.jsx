// // client/src/components/MatchKundli.jsx
// import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import Click from "../image/Click.jpeg";
// import bg from "../image/bg1.jpg";
// import kundli from "../image/kundli rishi.webp";
// import handbg from "../image/hand_bg.png";
// import LoginForm from "./LoginForm";
// import TableComponent from "./TableComponent";

// // local fallback image path (uploaded file in your environment)
// const FALLBACK_IMG = "/mnt/data/60efeb2a-fd39-4e5f-8b62-e95d700d6d02.png";

// const MatchKundli = () => {
//   const user = useSelector((store) => store.user);
//   const form = useSelector((store) => store.configApp.form);

//   // main user fields (we read user profile if needed — you can prefill from store)
//   const userNameRef = useRef();
//   const userTimeRef = useRef();
//   const userPlaceRef = useRef();
//   const [userGender, setUserGender] = useState("male");

//   // partner fields
//   const partnerNameRef = useRef();
//   const partnerTimeRef = useRef();
//   const partnerPlaceRef = useRef();
//   const [partnerGender, setPartnerGender] = useState("female");

//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null); // will store AI response object
//   const [error, setError] = useState(null);

//   const inputCSS =
//     "px-3 py-2 z-20 bg-purple-950 bg-opacity-40 focus:bg-transparent border border-purple-600 rounded-xl w-full text-purple-200 outline-none";
//   const spanCSS =
//     "absolute text-lg left-4 top-2 spanCSS z-10 font-semibold text-purple-300 uppercase";
//   const divCSS = "lg:w-6/12 w-[45%] relative divCSS transition-all";
//   const maindivCSS = "flex flex-row justify-between items-center gap-8 my-6";

//   // Helper: parse datetime-local input into parts (year, month, date, hours, minutes)
//   const parseDatetimeLocal = (value) => {
//     if (!value) return null;
//     // value like "2025-11-21T14:30"
//     const d = new Date(value);
//     if (Number.isNaN(d.getTime())) return null;
//     return {
//       iso: d.toISOString(),
//       year: d.getUTCFullYear(),
//       month: d.getUTCMonth() + 1,
//       date: d.getUTCDate(),
//       hours: d.getUTCHours(),
//       minutes: d.getUTCMinutes(),
//     };
//   };

//   const clearResult = () => {
//     setResult(null);
//     setError(null);
//   };

//   const handleMatch = async () => {
//     clearResult();

//     // Basic validation
//     const uName = (userNameRef.current?.value || "").trim();
//     const uTime = userTimeRef.current?.value;
//     const uPlace = (userPlaceRef.current?.value || "").trim();

//     const pName = (partnerNameRef.current?.value || "").trim();
//     const pTime = partnerTimeRef.current?.value;
//     const pPlace = (partnerPlaceRef.current?.value || "").trim();

//     if (!uName || !uTime || !uPlace || !pName || !pTime || !pPlace) {
//       setError(
//         "Please fill all fields for both partners (name, birth datetime, place)."
//       );
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     // Build payload for backend AI
//     const payload = {
//       user: {
//         name: uName,
//         birthDatetime: uTime,
//         birthPlace: uPlace,
//         gender: userGender,
//       },
//       partner: {
//         name: pName,
//         birthDatetime: pTime,
//         birthPlace: pPlace,
//         gender: partnerGender,
//       },
//       // optional flags for backend
//       options: {
//         includeDetailedKundli: false,
//         includeRemedies: true,
//       },
//     };

//     try {
//       // This route should be implemented in backend and call Groq/OpenAI with both profiles
//       const res = await axios.post("/api/match", payload);

//       // Expecting backend to return a structured object:
//       // { score: Number (0-100), summary: string, sections: [{title, content}], raw: {...} }
//       const ai = res.data;
//       setResult(ai);
//       setLoading(false);
//     } catch (err) {
//       console.error("Match API error:", err);
//       setLoading(false);
//       if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Failed to compute match. Try again later.");
//       }
//     }
//   };

//   const handleDownloadPdf = async () => {
//     if (!result) return;
//     try {
//       // Optional: backend endpoint to generate PDF from result
//       const res = await axios.post(
//         "/api/match/pdf",
//         { result },
//         { responseType: "blob" }
//       );
//       const blob = new Blob([res.data], { type: "application/pdf" });
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${result.summary || "match"}.pdf`;
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (err) {
//       console.error("PDF download failed", err);
//       setError("PDF generation failed.");
//     }
//   };

//   return (
//     <>
//       {form && <LoginForm />}

//       <div className="relative pt-12 w-full">
//         <img
//           alt="bg"
//           className="h-screen brightness-90 w-full fixed top-0 left-0 -z-40"
//           src={bg}
//         />

//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="w-full mb-20 mt-2 gap-4 flex flex-col lg:flex-row bg-purple-950 bg-opacity-60 mx-4 rounded-xl lg:px-10 px-6 py-6 lg:py-10"
//         >
//           {/* left: illustration */}
//           <div className="lg:w-[28%] w-full flex justify-center items-center relative">
//             <img className="lg:w-[100%] w-40 z-10" alt="kundli" src={kundli} />
//             <img
//               className="absolute z-0 lg:w-48 w-28 lg:left-14 mx-auto hand -top-1 lg:top-1.5"
//               alt="handbg"
//               src={handbg}
//             />
//           </div>

//           {/* right: form */}
//           <div className="lg:w-8/12 w-full">
//             <div className="mb-6 text-center">
//               <h2 className="text-3xl text-purple-300 font-semibold">
//                 Couple Match — Enter Partner Details
//               </h2>
//               <p className="text-sm text-purple-200 opacity-80 mt-1">
//                 Provide birth details for both partners. The AI will analyze
//                 compatibility, strengths, and remedies.
//               </p>
//             </div>

//             {/* USER ROW */}
//             <div className={maindivCSS}>
//               <div className={divCSS}>
//                 <input
//                   className={inputCSS}
//                   type="text"
//                   ref={userNameRef}
//                   defaultValue={user?.name || ""}
//                 />
//                 <span className={spanCSS}>Name</span>
//               </div>

//               <div className={divCSS}>
//                 <input className={inputCSS} type="text" ref={userPlaceRef} />
//                 <span className={spanCSS}>Birth Place</span>
//               </div>
//             </div>

//             <div className={maindivCSS}>
//               <div className={divCSS}>
//                 <input
//                   className={inputCSS}
//                   type="datetime-local"
//                   ref={userTimeRef}
//                 />
//                 {/* <span className={spanCSS}>Birth Time</span> */}
//               </div>

//               <div className={divCSS}>
//                 <div className="flex items-center gap-4 px-3 py-2 border border-purple-900 rounded-xl bg-purple-950 bg-opacity-30">
//                   <label className="text-purple-300 font-medium uppercase">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-3">
//                     <label className="text-purple-200">
//                       <input
//                         type="radio"
//                         name="ugender"
//                         value="male"
//                         defaultChecked
//                         onChange={() => setUserGender("male")}
//                       />
//                       <span className="pl-2">Male</span>
//                     </label>
//                     <label className="text-purple-200">
//                       <input
//                         type="radio"
//                         name="ugender"
//                         value="female"
//                         onChange={() => setUserGender("female")}
//                       />
//                       <span className="pl-2">Female</span>
//                     </label>
//                     <label className="text-purple-200">
//                       <input
//                         type="radio"
//                         name="ugender"
//                         value="other"
//                         onChange={() => setUserGender("other")}
//                       />
//                       <span className="pl-2">Other</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* PARTNER ROW */}
//             <div className="mt-6 mb-2 text-center">
//               <h3 className="text-xl text-pink-200 font-semibold">
//                 Partner Details ❤️
//               </h3>
//             </div>

//             <div className={maindivCSS}>
//               <div className={divCSS}>
//                 <input className={inputCSS} type="text" ref={partnerNameRef} />
//                 <span className={spanCSS}>Name</span>
//               </div>

//               <div className={divCSS}>
//                 <input className={inputCSS} type="text" ref={partnerPlaceRef} />
//                 <span className={spanCSS}>Birth Place</span>
//               </div>
//             </div>

//             <div className={maindivCSS}>
//               <div className={divCSS}>
//                 <input
//                   className={inputCSS}
//                   type="datetime-local"
//                   ref={partnerTimeRef}
//                 />
//                 {/* <span className={spanCSS}>Birth Time</span> */}
//               </div>

//               <div className={divCSS}>
//                 <div className="flex items-center gap-4 px-3 py-2 border border-purple-900 rounded-xl bg-purple-950 bg-opacity-30">
//                   <label className="text-purple-300 font-medium uppercase">
//                     Gender
//                   </label>
//                   <div className="flex items-center gap-3">
//                     <label className="text-purple-200">
//                       <input
//                         type="radio"
//                         name="pgender"
//                         value="male"
//                         onChange={() => setPartnerGender("male")}
//                       />
//                       <span className="pl-2">Male</span>
//                     </label>
//                     <label className="text-purple-200">
//                       <input
//                         type="radio"
//                         name="pgender"
//                         value="female"
//                         defaultChecked
//                         onChange={() => setPartnerGender("female")}
//                       />
//                       <span className="pl-2">Female</span>
//                     </label>
//                     <label className="text-purple-200">
//                       <input
//                         type="radio"
//                         name="pgender"
//                         value="other"
//                         onChange={() => setPartnerGender("other")}
//                       />
//                       <span className="pl-2">Other</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* submit */}
//             <div className="flex justify-center mt-6">
//               <button
//                 type="button"
//                 onClick={handleMatch}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold shadow-lg hover:opacity-95"
//                 disabled={loading}
//               >
//                 {loading ? "Analysing..." : "Check Compatibility"}
//               </button>
//             </div>
//           </div>
//         </form>

//         {/* RESULT BLOCK */}
//         {error && (
//           <div className="mx-4 lg:mx-14 mb-4 p-4 rounded-xl bg-red-700 text-white">
//             {error}
//           </div>
//         )}

//         {result && (
//           <div className="mb-20 rounded-xl flex flex-col w-full lg:py-14 py-8 bg-purple-950 bg-opacity-60 mx-4 lg:mx-14 px-4 lg:px-20">
//             {/* header */}
//             <div className="flex flex-col w-full pb-6 justify-center items-center">
//               <h2 className="text-3xl text-purple-100 font-semibold">
//                 {result.title ||
//                   `${result.userName || "You"} & ${
//                     result.partnerName || "Partner"
//                   } — Match Report`}
//               </h2>
//               <p className="text-sm text-purple-300 mt-2">{result.summary}</p>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-6">
//               {/* left card: score & key points */}
//               <div className="lg:w-4/12 bg-[#1b0133]/60 border border-purple-700/40 rounded-2xl p-6">
//                 <div className="text-center">
//                   <div className="text-6xl font-bold text-rose-400">
//                     {Math.round(result.score || 0)}%
//                   </div>
//                   <div className="text-sm text-purple-300 mt-2">
//                     Compatibility Score
//                   </div>
//                 </div>

//                 <hr className="my-4 border-purple-700/30" />

//                 <div>
//                   <h4 className="text-purple-200 font-semibold mb-2">
//                     Highlights
//                   </h4>
//                   <ul className="list-disc list-inside text-purple-200 text-sm space-y-2">
//                     {(result.highlights || []).slice(0, 5).map((h, i) => (
//                       <li key={i}>{h}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-6 text-center">
//                   <button
//                     onClick={handleDownloadPdf}
//                     className="px-4 py-2 bg-purple-600 rounded-lg text-white"
//                   >
//                     Download PDF
//                   </button>
//                 </div>
//               </div>

//               {/* right card: detailed sections */}
//               <div className="lg:w-8/12 space-y-6">
//                 {(result.sections || []).map((sec, i) => (
//                   <div
//                     key={i}
//                     className="bg-[#210033]/50 border border-purple-700/30 rounded-xl p-6"
//                   >
//                     <h3 className="text-purple-200 font-semibold mb-2">
//                       {sec.title}
//                     </h3>
//                     <p className="text-purple-100 text-sm leading-relaxed whitespace-pre-line">
//                       {sec.content}
//                     </p>
//                   </div>
//                 ))}

//                 {/* fallback: raw data table */}
//                 {result.raw && (
//                   <div className="bg-[#1a0326]/50 border border-purple-700/30 rounded-xl p-4">
//                     <h4 className="text-purple-200 font-semibold mb-2">
//                       Raw Data
//                     </h4>
//                     <div className="text-sm text-purple-300">
//                       <TableComponent data={result.raw} />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default MatchKundli;

import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const MatchKundliUpgraded = () => {
  const user = useSelector((store) => store.user);

  const userNameRef = useRef();
  const userTimeRef = useRef();
  const userPlaceRef = useRef();
  const [userGender, setUserGender] = useState("male");

  const partnerNameRef = useRef();
  const partnerTimeRef = useRef();
  const partnerPlaceRef = useRef();
  const [partnerGender, setPartnerGender] = useState("female");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const isFormComplete =
    userNameRef.current?.value &&
    userTimeRef.current?.value &&
    userPlaceRef.current?.value &&
    partnerNameRef.current?.value &&
    partnerTimeRef.current?.value &&
    partnerPlaceRef.current?.value;

  const handleMatch = async () => {
    const payload = {
      user: {
        name: userNameRef.current.value,
        birthDatetime: userTimeRef.current.value,
        birthPlace: userPlaceRef.current.value,
        gender: userGender,
      },
      partner: {
        name: partnerNameRef.current.value,
        birthDatetime: partnerTimeRef.current.value,
        birthPlace: partnerPlaceRef.current.value,
        gender: partnerGender,
      },
      options: { includeRemedies: true },
    };

    try {
      setLoading(true);
      const res = await axios.post("/api/match", payload);
      setResult(res.data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const radarData = result
    ? {
        labels: ["Love", "Trust", "Communication", "Passion", "Long-term"],
        datasets: [
          {
            label: "Score",
            data: result.chartValues || [70, 65, 75, 80, 72],
            backgroundColor: "rgba(168, 85, 247, 0.4)",
            borderColor: "rgba(236, 72, 153, 1)",
            borderWidth: 2,
          },
        ],
      }
    : null;

  return (
    <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-purple-900 via-purple-950 to-black text-purple-100 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-pink-300 tracking-wide mb-8 animate-fadeIn">
        Kundli Match – AI Compatibility
      </h1>

      {/* FORM */}
      <div className="bg-purple-950/60 backdrop-blur-xl rounded-2xl p-6 lg:p-10 shadow-xl w-full lg:w-10/12 border border-purple-700/40 animate-slideUp">
        <h2 className="text-xl font-semibold text-purple-300 text-center mb-4">
          Enter Details
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg text-purple-200 font-semibold mb-2">
              Your Details
            </h3>
            <input
              ref={userNameRef}
              className="w-full bg-purple-900/40 px-3 py-2 rounded-xl outline-none mb-3 border border-purple-700/50"
              placeholder="Your Name"
              required
            />
            <input
              ref={userPlaceRef}
              className="w-full bg-purple-900/40 px-3 py-2 rounded-xl outline-none mb-3 border border-purple-700/50"
              placeholder="Birth Place"
              required
            />
            <input
              type="datetime-local"
              ref={userTimeRef}
              required
              className="w-full bg-purple-900/40 px-3 py-2 rounded-xl outline-none mb-3 border border-purple-700/50"
            />
          </div>

          <div>
            <h3 className="text-lg text-purple-200 font-semibold mb-2">
              Partner Details
            </h3>
            <input
              ref={partnerNameRef}
              className="w-full bg-purple-900/40 px-3 py-2 rounded-xl outline-none mb-3 border border-purple-700/50"
              placeholder="Partner Name"
              required
            />
            <input
              ref={partnerPlaceRef}
              className="w-full bg-purple-900/40 px-3 py-2 rounded-xl outline-none mb-3 border border-purple-700/50"
              placeholder="Birth Place"
              required
            />
            <input
              type="datetime-local"
              ref={partnerTimeRef}
              required
              className="w-full bg-purple-900/40 px-3 py-2 rounded-xl outline-none mb-3 border border-purple-700/50"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleMatch}
            className="px-8 py-3 text-lg rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:scale-105 transition-all"
          >
            {loading ? "Analyzing..." : "Check Compatibility"}
          </button>
        </div>
      </div>

      {/* RESULT */}
      {result && (
        <div className="mt-10 w-full lg:w-10/12 bg-purple-950/50 rounded-2xl p-8 shadow-xl border border-purple-700/40 animate-fadeUp">
          <h2 className="text-3xl font-semibold text-center text-purple-200 mb-2">
            {result.title}
          </h2>
          <p className="text-center text-purple-300 mb-6">{result.summary}</p>

          {/* SCORE RING */}
          <div className="flex justify-center mb-10 animate-zoomIn">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#4b1459"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#ec4899"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * (result.score || 0)) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-pink-400">
                  {result.score}%
                </span>
                <p className="text-sm text-purple-300">Compatibility</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <button
              onClick={async () => {
                try {
                  const res = await axios.post(
                    "/api/match/pdf",
                    { result },
                    { responseType: "blob" }
                  );

                  const blob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `${result.title || "match-report"}.pdf`;
                  a.click();
                  window.URL.revokeObjectURL(url);
                } catch (e) {
                  console.error("PDF Error:", e);
                }
              }}
              className="px-6 py-2 bg-purple-700 hover:bg-purple-800 transition rounded-xl text-white font-semibold"
            >
              Download PDF
            </button>
          </div>

          {/* RADAR CHART */}
          <div className="bg-purple-900/40 rounded-xl p-6 mb-10">
            {radarData && <Radar data={radarData} />}
          </div>

          {/* SECTIONS */}
          <div className="space-y-6">
            {result.sections?.map((sec, i) => (
              <div
                key={i}
                className="bg-purple-900/40 p-6 rounded-xl shadow-lg border border-purple-700/40 animate-fadeIn"
              >
                <h3 className="font-semibold text-purple-200 text-xl mb-2">
                  {sec.title}
                </h3>
                <p className="text-purple-100 leading-relaxed whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchKundliUpgraded;
