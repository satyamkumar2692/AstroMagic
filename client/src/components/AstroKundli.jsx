// import React, { useRef, useState } from "react";
// // import { kundlicheck } from "../utils/validate";
// // import openai from "../utils/openai";
// // import { ASTRO_KUNDLI_PROMPT, GPT_LANG } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// // import { Bounce, toast } from "react-toastify";
// // import { addForm } from "../store/configAppSlice";
// import Click from "../image/Click.jpeg";
// // import Chatbot from "./Chatbot";
// import bg from "../image/bg1.jpg";
// import kundli from "../image/kundli rishi.webp";
// import handbg from "../image/hand_bg.png";
// // import lang from "../utils/langConstants";
// import LoginForm from "./LoginForm";
// import TableComponent from "./TableComponent";

// const AstroKundli = () => {
//   const user = useSelector((store) => store.user);
//   // const Bot = useSelector((store) => store.configApp.Bot);
//   const dispatch = useDispatch();

//   const name = useRef();
//   const time = useRef();
//   const locality = useRef();
//   const district = useRef();
//   const [gender, setGender] = useState();
//   const [SelectedLanguage, setSelectedLanguage] = useState("English");
//   const [result, setresult] = useState();

//   const [data, setData] = useState({});

//   const form = useSelector((store) => store.configApp.form);

//   const inputCSS =
//     "px-3 py-2  border-purple-90  z-20 bg-purple-950 bg-opacity-40 active:bg-transparent focus:bg-transparent inputCSS border border-purple-600 border-opacity-60 rounded-xl w-full text-purple-200 outline-none";
//   const spanCSS =
//     "absolute text-lg left-4 top-2 spanCSS z-10  font-semibold text-purple-300 uppercase";
//   const divCSS = "lg:w-6/12 w-[45%]  relative divCSS transition-all";

//   const maindivCSS = "flex flex-row justify-between items-center gap-8 my-6";

//   const handleSearch2 = async () => {
//     const url = "https://json.freeastrologyapi.com/planets";
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key": "qldlQSFVita0P9p7p5Cww5hFXbJI9VwW5pLyX2vb",
//       },
//       body: JSON.stringify({
//         year: Number(time.current.value.substring(0, 4)),
//         month: Number(time.current.value.substring(5, 7)),
//         date: Number(time.current.value.substring(8, 10)),
//         hours: Number(time.current.value.substring(11, 13)),
//         minutes: Number(time.current.value.substring(14)),
//         seconds: 0,
//         latitude: 17.38333,
//         longitude: 78.4666,
//         timezone: 5.5,
//         settings: {
//           observation_point: "topocentric",
//           ayanamsha: "lahiri",
//         },
//       }),
//     };

//     try {
//       const response = await fetch(url, options);
//       const resul = await response.text();
//       const obj = await JSON.parse(resul);
//       console.log(obj.output[0]);
//       Object.keys(obj.output[0]).forEach(function (key, index) {
//         console.log(obj.output[0][key]);
//       });
//       const ob = obj.output[0];
//       const copiedData = { ...ob };
//       setData(copiedData);
//       setresult(resul);
//       // console.log(obj);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // console.log(data);
//   return (
//     <>
//       {" "}
//       {form && <LoginForm />}
//       <div className="relative pt-12 w-12/12 ">
//         {/* {Bot && <Chatbot />} */}
//         <img
//           alt="bg"
//           className="h-screen  brightness-90 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
//           src={bg}
//         ></img>

//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="w-12/12 mb-20 lg:mb-4  mt-2 lg:my-8 md:my-12 gap-4 flex  justify-start  flex-col lg:flex-row bg-purple-950 bg-opacity-60 lg:mx-14 mx-4  rounded-xl lg:px-10 px-6 py-6 lg:py-10"
//         >
//           <div className="lg:w-[28%] w-12/12 flex justify-center items-center relative">
//             <img
//               className="lg:w-[100%] w-40  z-10"
//               alt="kundli"
//               src={kundli}
//             ></img>
//             <img
//               className="absolute z-0 lg:w-48 w-28 lg:left-14 mx-auto hand -top-1 lg:top-1.5"
//               alt="handbg"
//               src={handbg}
//             ></img>
//           </div>
//           <div className="lg:w-8/12  w-12/12">
//             <div className="mb-8 flex justify-start flex-col items-center">
//               <span className="lg:text-3xl text-2xl text-center lg:font-semibold  font-[600] text-purple-300 pb-1.5 lg:pb-2 tracking-wider opacity-90 lg:tracking-normal">
//                 {/* {lang[LangKey].getAstroInsights} */}
//                 Enter Astro Insights
//               </span>
//               <img
//                 alt="line"
//                 className="lg:w-56 w-48"
//                 src="data:img/png;base64,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"
//               ></img>
//             </div>
//             <div className={maindivCSS}>
//               <div className={divCSS}>
//                 <input className={inputCSS} type="text" ref={name}></input>
//                 <span className={spanCSS}>
//                   {/* {lang[LangKey].inputname} */}
//                   Name
//                 </span>
//               </div>
//               <div className={divCSS}>
//                 <input className={inputCSS} type="text" ref={locality}></input>
//                 <span className={spanCSS}>
//                   {/* {lang[LangKey].birthPlace} */}
//                   Birth Place
//                 </span>
//               </div>
//             </div>
//             <div className={maindivCSS}>
//               {/* <div className={divCSS}>
//               <input className={inputCSS} type="text" ref={district}></input>
//               <span className={spanCSS}>
//                 {lang[LangKey].birthDistrict}
//                 Birth District
//               </span>
//             </div> */}

//               <div className={divCSS}>
//                 <input
//                   className={inputCSS}
//                   type="datetime-local"
//                   ref={time}
//                 ></input>
//                 <span className={spanCSS}>
//                   {/* {lang[LangKey].birthTime} */}
//                   Birth Time
//                 </span>
//               </div>
//             </div>

//             <div className={maindivCSS}>
//               <div className={divCSS}>
//                 <div className="flex lg:flex-row flex-col px-3 py-2  lg:border-purple-900 lg:border rounded-xl lg:bg-purple-950 bg-opacity-55 ">
//                   <span className="lg:text-lg text-sm font-semibold text-purple-300 px-2 lg:px-4 uppercase pb-2">
//                     {/* {lang[LangKey].gender} */}
//                     Gender
//                   </span>
//                   <div className="w-4/12 flex flex-row">
//                     <input
//                       className=""
//                       type="radio"
//                       id="male"
//                       name="gender"
//                       value="male"
//                       onChange={() => setGender("male")}
//                     />
//                     <label
//                       className="lg:text-base text-sm font-semibold text-purple-300 pl-2 uppercase"
//                       htmlFor="male"
//                     >
//                       {/* {lang[LangKey].male} */}
//                       Male
//                     </label>
//                   </div>
//                   <div className="w-4/12 flex flex-row">
//                     <input
//                       type="radio"
//                       id="female"
//                       name="gender"
//                       value="female"
//                       onChange={() => setGender("female")}
//                     />
//                     <label
//                       className="lg:text-base text-sm  font-semibold text-purple-300 pl-2 uppercase"
//                       htmlFor="female"
//                     >
//                       {/* {lang[LangKey].female} */}
//                       Female
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className="flex flex-col lg:flex-row lg:px-3 px-2 py-2 justify-start gap-4 lg:gap-10 lg:border-purple-900 lg:border rounded-xl lg:bg-purple-950 bg-opacity-55 w-[45%] lg:w-6/12"> */}
//               {/* <span className="lg:text-lg text-sm font-semibold text-purple-300 px-1 lg:px-3 uppercase">
//                 {lang[LangKey].language}
//                 Language
//               </span> */}
//               {/* <select
//                 className="text-purple-200 px-1 py-0.5 rounded-lg bg-purple-900 bg-opacity-90"
//                 onChange={(e) => setSelectedLanguage(e.target.value)}>
//                 {GPT_LANG.map((lang) => (
//                   <option
//                     className="text-purple-200 bg-purple-900 bg-opacity-90"
//                     key={lang.identifier}
//                     value={lang.identifier}
//                   >
//                     {lang.name}
//                   </option>
//                 ))}
//               </select> */}
//               {/* </div> */}
//             </div>

//             <div className="flex relative justify-center items-center w-full">
//               <img className="w-16  rounded-full" alt="click" src={Click}></img>
//               <img
//                 className="absolute w-24 opacity-100 hand cursor-pointer"
//                 src={handbg}
//                 alt="handbg"
//                 onClick={handleSearch2}
//               ></img>
//             </div>
//           </div>
//         </form>

//         {result && (
//           <div className=" mb-20 rounded-xl flex flex-col w-12/12 lg:py-14 py-8 bg-purple-950 bg-opacity-60 mx-4 lg:mx-14 px-4 lg:px-20">
//             <div className="flex flex-col w-full pb-5 lg:pb-10 justify-center items-center">
//               <span className="lg:text-3xl text-2xl lg:pb-4  pb-2 font-semibold opacity-80 tracking-wider lg:tracking-wide text-orange-400 capitalize text-center">
//                 {name.current.value} Astro Insights
//               </span>
//               <img
//                 alt="line"
//                 className="w-40 lg:w-60"
//                 src="data:img/png;base64,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"
//               ></img>
//             </div>

//             <div
//               className="result-container w-full text-purple-300"
//               // dangerouslySetInnerHTML={{ __html: result }}
//             >
//               {data && <TableComponent data={data} />}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AstroKundli;

// client/src/components/AstroKundli.jsx
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import bg from "../image/bg1.jpg";
import kundliImg from "../image/kundli rishi.webp";
import handbg from "../image/hand_bg.png";
import LoginForm from "./LoginForm";
import TableComponent from "./TableComponent";

const houseOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const AstroKundli = () => {
  const user = useSelector((s) => s.user);
  const form = useSelector((s) => s.configApp.form);

  // controlled fields so autofill works easily
  const [name, setName] = useState("");
  const [birthDatetime, setBirthDatetime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [latLon, setLatLon] = useState({ lat: null, lon: null });
  const [timezone, setTimezone] = useState(null);
  const [gender, setGender] = useState("male");

  const [loading, setLoading] = useState(false);
  const [kundli, setKundli] = useState(null);
  const [error, setError] = useState(null);

  // load user profile and autofill
  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("/api/user/me"); // should return user object with profile
        const u = res.data.user || res.data;
        if (!u) return;
        setName(u.name || "");
        if (u.profile?.dob) {
          // convert to local datetime-local value
          const d = new Date(u.profile.dob);
          const isoLocal = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16);
          setBirthDatetime(u.profile?.dobLocal || isoLocal);
        }
        setBirthPlace(u.profile?.birthPlace || "");
        if (u.profile?.locationCoords) {
          setLatLon({
            lat: u.profile.locationCoords.lat,
            lon: u.profile.locationCoords.lon,
          });
        }
        setTimezone(u.profile?.timezone || "");
        setGender(u.profile?.gender || "male");
      } catch (err) {
        console.log("Profile load failed:", err);
      }
    };
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // basic validation
    if (!birthDatetime || (!birthPlace && (!latLon.lat || !latLon.lon))) {
      setError("Please provide birth datetime and place (or lat/lon).");
      return;
    }

    // send to backend
    try {
      setLoading(true);
      const payload = {
        name,
        gender,
        birthDatetime, // iso-like from input
        birthPlace,
        lat: latLon.lat,
        lon: latLon.lon,
        timezone,
      };
      const res = await axios.post("/api/kundli/ai", payload);
      setKundli(res.data.kundli);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to generate kundli");
      setLoading(false);
    }
  };

  // render one house cell
  const HouseCell = ({ idx, data }) => {
    const planets = data?.planets || [];
    const lord = data?.lord;
    const notes = data?.notes || "";
    return (
      <div className="border border-purple-700/40 rounded-lg p-3 bg-[#14041a]/50 h-full flex flex-col">
        <div className="text-xs text-purple-300 font-semibold">House {idx}</div>
        <div className="text-sm text-purple-100 mt-2 flex-1">
          {planets.length === 0 ? (
            <div className="text-xs text-purple-400">—</div>
          ) : (
            planets.map((p, i) => (
              <div key={i} className="text-sm mb-1">
                <span className="font-semibold">{p}</span>
                <span className="text-xs text-pink-300 ml-2">
                  {" "}
                  {notes.includes(p) ? `(${notes})` : ""}
                </span>
              </div>
            ))
          )}
        </div>
        <div className="text-xs text-purple-300 mt-2">Lord: {lord || "—"}</div>
      </div>
    );
  };

  // layout that resembles kundli (square grid, 12 boxes)
  const renderKundliGrid = (housesObj) => {
    // simple 3x4 or diamond layout? We'll use 4x3 grid that can be styled later to diamond.
    return (
      <div className="grid grid-cols-4 gap-4 mt-6">
        {houseOrder.map((n) => (
          <HouseCell
            key={n}
            idx={n}
            data={
              housesObj?.[String(n)] || { planets: [], lord: null, notes: "" }
            }
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {form && <LoginForm />}
      <div className="relative pt-12 w-full">
        <img
          alt="bg"
          className="h-screen brightness-90 fixed top-0 left-0 -z-40 w-full"
          src={bg}
        />
        <form
          onSubmit={handleSubmit}
          className="w-full mb-20 mt-2 gap-4 flex flex-col lg:flex-row bg-purple-950 bg-opacity-60 mx-4 rounded-xl lg:px-10 px-6 py-6 lg:py-10"
        >
          <div className="lg:w-[28%] w-full flex justify-center items-center relative">
            <img
              alt="rishi"
              className="lg:w-[100%] w-40 z-10"
              src={kundliImg}
            />
            <img
              className="absolute z-0 lg:w-48 w-28 lg:left-14 mx-auto hand -top-1 lg:top-1.5"
              src={handbg}
              alt="hand"
            />
          </div>

          <div className="lg:w-8/12 w-full">
            <div className="text-center mb-6">
              <h2 className="text-3xl text-purple-300 font-semibold">
                Create Birth Chart (Kundli)
              </h2>
              <p className="text-sm text-purple-200 mt-1">
                Autofill from your profile. Edit if needed and press Generate.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-purple-300">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-purple-900/40 border border-purple-700/50 text-purple-100"
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">Birth Place</label>
                <input
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-purple-900/40 border border-purple-700/50 text-purple-100"
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">
                  Birth Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={birthDatetime}
                  onChange={(e) => setBirthDatetime(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-purple-900/40 border border-purple-700/50 text-purple-100"
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">
                  Timezone (e.g. 5.5)
                </label>
                <input
                  value={timezone || ""}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-purple-900/40 border border-purple-700/50 text-purple-100"
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">Latitude</label>
                <input
                  value={latLon.lat || ""}
                  onChange={(e) =>
                    setLatLon((s) => ({ ...s, lat: Number(e.target.value) }))
                  }
                  className="w-full px-3 py-2 rounded-xl bg-purple-900/40 border border-purple-700/50 text-purple-100"
                />
              </div>

              <div>
                <label className="text-sm text-purple-300">Longitude</label>
                <input
                  value={latLon.lon || ""}
                  onChange={(e) =>
                    setLatLon((s) => ({ ...s, lon: Number(e.target.value) }))
                  }
                  className="w-full px-3 py-2 rounded-xl bg-purple-900/40 border border-purple-700/50 text-purple-100"
                />
              </div>

              <div className="col-span-2">
                <label className="text-sm text-purple-300">Gender</label>
                <div className="flex gap-4 mt-2">
                  <label className="text-purple-200">
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                    />{" "}
                    Male
                  </label>
                  <label className="text-purple-200">
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
                    />{" "}
                    Female
                  </label>
                  <label className="text-purple-200">
                    <input
                      type="radio"
                      checked={gender === "other"}
                      onChange={() => setGender("other")}
                    />{" "}
                    Other
                  </label>
                </div>
              </div>

              <div className="col-span-2 flex justify-center mt-4">
                <button
                  disabled={loading}
                  className={`px-8 py-3 rounded-2xl ${
                    loading
                      ? "bg-gray-600"
                      : "bg-gradient-to-r from-purple-600 to-pink-600"
                  }`}
                >
                  {loading ? "Generating..." : "Generate Kundli"}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* render kundli result */}
        {error && (
          <div className="mx-4 lg:mx-14 mb-4 p-4 rounded-xl bg-red-700 text-white">
            {error}
          </div>
        )}

        {kundli && (
          <div className="mb-20 rounded-xl flex flex-col w-full lg:py-14 py-8 bg-purple-950 bg-opacity-60 mx-4 lg:mx-14 px-4 lg:px-20">
            <div className="text-center mb-6">
              <h3 className="text-2xl text-orange-400 font-semibold">
                {kundli.meta?.name} — Birth Chart
              </h3>
              <p className="text-sm text-purple-300 mt-2">
                {kundli.meta?.birthPlace} •{" "}
                {new Date(kundli.meta?.birthDatetime).toLocaleString()}
              </p>
            </div>

            {/* visual grid */}
            <div className="mt-6">{renderKundliGrid(kundli.houses)}</div>

            {/* summary */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#1b0133]/50 p-6 rounded-xl border border-purple-700/30">
                <h4 className="text-purple-200 font-semibold mb-2">
                  Personality
                </h4>
                <p className="text-purple-100 whitespace-pre-line">
                  {kundli.summary?.personality}
                </p>

                <h4 className="text-purple-200 font-semibold mt-4 mb-2">
                  Special Notes
                </h4>
                <p className="text-purple-100 whitespace-pre-line">
                  {kundli.summary?.specialNotes}
                </p>

                <h4 className="text-purple-200 font-semibold mt-4 mb-2">
                  Remedies
                </h4>
                <ul className="list-disc pl-6 text-purple-100">
                  {(kundli.summary?.remedies || []).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#210033]/50 p-6 rounded-xl border border-purple-700/30">
                <h4 className="text-purple-200 font-semibold mb-2">
                  Fav Color
                </h4>
                <div className="mb-4 text-purple-100">
                  {kundli.summary?.favColor}
                </div>

                <h4 className="text-purple-200 font-semibold mb-2">Stones</h4>
                <ul className="list-disc pl-6 text-purple-100">
                  {(kundli.summary?.stones || []).map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AstroKundli;
