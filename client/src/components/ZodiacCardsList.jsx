// import React from "react";
// import ZodiacCard from "./ZodiacCard";
// import Aries from "../image/Sign/sign1.svg";
// import Taurus from "../image/Sign/sign2.svg";
// import Gemini from "../image/Sign/sign3.svg";
// import Cancer from "../image/Sign/sign4.svg";
// import Leo from "../image/Sign/sign5.svg";
// import Virgo from "../image/Sign/sign6.svg";
// import Libra from "../image/Sign/sign7.svg";
// import Scorpio from "../image/Sign/sign8.svg";
// import Sagittarius from "../image/Sign/sign9.svg";
// import Capricorn from "../image/Sign/sign10.svg";
// import Aquarius from "../image/Sign/sign11.svg";
// import Pisces from "../image/Sign/sign12.svg";
// import { Link } from "react-router-dom";
// import kundli from "../image/kundli rishi.webp";
// import load from "../image/loading.png";
// // import lang from "../utils/langConstants";
// // import { useSelector } from "react-redux";

// const ZodiacCardsList = () => {

//   // const LangKey = useSelector(store => store.configApp.lang)

//   return (
//     <div className="flex flex-col w-full lg:mt-0 lg:mb-10 2xl:mb-16  justify-center items-center h-full relative">
//       <img
//         alt="cycle"
//         className="hidden lg:block absolute 2xl:w-96 lg:w-80 opacity-95"
//         src={kundli}
//       ></img>
//       <img
//         alt="cycle"
//         className="absolute hidden lg:block -z-10 opacity-55 hand 2xl:w-[550px] lg:w-[450px]"
//         src={load}
//       ></img>
//       <div className="flex justify-center lg:gap-10 items-center lg:py-3  w-full h-full flex-wrap">
//         <Link className="lg:w-3/12 2xl:w-[20%] w-full" to={"/horoscope/Aries"}>
//           {" "}
//           <ZodiacCard
//           // name={lang[LangKey].Aries}
//           name={"Aries"}
//           value={"Mar 21 - Apr 19"} img={Aries} />
//         </Link>
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Aquarius"}>
//           {" "}
//           <ZodiacCard
//           // name={lang[LangKey].Aquarius}
//           name={"Aquarius"}
//            value={"Jan 20 - Feb 18"} img={Aquarius} />
//         </Link>
//       </div>
//       <div className="flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap">
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Taurus"}>
//           {" "}
//           <ZodiacCard
//           // name={lang[LangKey].Taurus}
//           name={"Taurus"}
//            value={"Apr 20 - May 20"} img={Taurus} />
//         </Link>
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Gemini"}>
//           <ZodiacCard
//           //  name={lang[LangKey].Gemini}
//           name={"Gemini"}
//            value={"May 21 - Jun 20"} img={Gemini} />
//         </Link>
//       </div>
//       <div className="flex justify-between items-center lg:py-3 w-full h-full flex-wrap">
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Cancer"}>
//           <ZodiacCard
//           // name={lang[LangKey].Cancer}
//           name={"Cancer"}
//           value={"Jun 21 - Jul 22"} img={Cancer} />
//         </Link>
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Leo"}>
//           <ZodiacCard
//           // name={lang[LangKey].Leo}
//           name={"Leo"}
//           value={"Jul 23 - Aug 22"} img={Leo} />
//         </Link>
//       </div>
//       <div className="flex justify-between items-center lg:py-3  w-full h-full flex-wrap">
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Virgo"}>
//           <ZodiacCard
//           //  name={lang[LangKey].Virgo}
//           name={"Virgo"}
//           value={"Aug 23 - Sep 22"} img={Virgo} />
//         </Link>
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Libra"}>
//           {" "}
//           <ZodiacCard
//           // name={lang[LangKey].Libra}
//           name={"Libra"}
//            value={"Sep 23 - Oct 22"} img={Libra} />
//         </Link>
//       </div>

//       <div className="flex justify-evenly lg:gap-32 items-center lg:py-3  w-full h-full flex-wrap">
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Scorpio"}>
//           {" "}
//           <ZodiacCard
//           // name={lang[LangKey].Scorpio}
//           name={"Scorpio"}
//           value={"Oct 23 - Nov 21"} img={Scorpio} />
//         </Link>
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Pisces"}>
//           {" "}
//           <ZodiacCard
//           //  name={lang[LangKey].Pisces}
//            name={"Pisces"}
//            value={"Feb 19 - Mar 20"} img={Pisces} />
//         </Link>
//       </div>
//       <div className="flex justify-center items-center py-3  lg:gap-10 w-full h-full flex-wrap">
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Capricorn"}>
//           <ZodiacCard
//           // name={lang[LangKey].Capricorn}
//           name={"Capricorn"}
//            value={"Dec 22 - Jan 19"} img={Capricorn} />
//         </Link>
//         <Link className="lg:w-3/12  2xl:w-[20%]  w-full" to={"/horoscope/Sagittarius"}>
//           {" "}
//           <ZodiacCard
//             // name={lang[LangKey].Sagittarius}
//             name={"Sagittarius"}
//             value={"Nov 22 - Dec 21"}
//             img={Sagittarius}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ZodiacCardsList;

import React, { useState } from "react";
import ZodiacCard from "./ZodiacCard";
import Axios from "axios";

import Aries from "../image/Sign/sign1.svg";
import Taurus from "../image/Sign/sign2.svg";
import Gemini from "../image/Sign/sign3.svg";
import Cancer from "../image/Sign/sign4.svg";
import Leo from "../image/Sign/sign5.svg";
import Virgo from "../image/Sign/sign6.svg";
import Libra from "../image/Sign/sign7.svg";
import Scorpio from "../image/Sign/sign8.svg";
import Sagittarius from "../image/Sign/sign9.svg";
import Capricorn from "../image/Sign/sign10.svg";
import Aquarius from "../image/Sign/sign11.svg";
import Pisces from "../image/Sign/sign12.svg";

import kundli from "../image/kundli rishi.webp";
import load from "../image/loading.png";

const ZODIAC_DATA = {
  Aries: { img: Aries, date: "Mar 21 - Apr 19" },
  Taurus: { img: Taurus, date: "Apr 20 - May 20" },
  Gemini: { img: Gemini, date: "May 21 - Jun 20" },
  Cancer: { img: Cancer, date: "Jun 21 - Jul 22" },
  Leo: { img: Leo, date: "Jul 23 - Aug 22" },
  Virgo: { img: Virgo, date: "Aug 23 - Sep 22" },
  Libra: { img: Libra, date: "Sep 23 - Oct 22" },
  Scorpio: { img: Scorpio, date: "Oct 23 - Nov 21" },
  Sagittarius: { img: Sagittarius, date: "Nov 22 - Dec 21" },
  Capricorn: { img: Capricorn, date: "Dec 22 - Jan 19" },
  Aquarius: { img: Aquarius, date: "Jan 20 - Feb 18" },
  Pisces: { img: Pisces, date: "Feb 19 - Mar 20" },
};

export default function ZodiacCardsList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [loading, setLoading] = useState(false);
  const [horoscope, setHoroscope] = useState(null);

  // --- OPEN MODAL + FETCH DATA ---
  const openModal = async (sign) => {
    setSelectedZodiac(sign);
    setHoroscope(null);
    setModalOpen(true);
    setLoading(true);

    try {
      const res = await Axios.post("/api/zodiac/daily", { sign });
      setHoroscope(res.data);
    } catch (err) {
      console.log(err);
      setHoroscope({
        horoscope: "Failed to fetch horoscope.",
        facts: ["Please try again later."],
      });
    }

    setLoading(false);
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      {/* -------------------- MODAL WINDOW -------------------- */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-[#1B0033] border border-purple-600 rounded-2xl p-6 w-11/12 max-w-lg shadow-2xl animate-scaleIn relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-purple-300 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="text-center mb-4">
              <img
                src={ZODIAC_DATA[selectedZodiac].img}
                className="w-20 mx-auto mb-2"
                alt=""
              />
              <h2 className="text-2xl font-bold text-purple-200">
                {selectedZodiac}
              </h2>
              <p className="text-sm text-purple-400">
                {ZODIAC_DATA[selectedZodiac].date}
              </p>
            </div>

            {/* LOADING */}
            {loading && (
              <p className="text-center text-purple-300 py-6 animate-pulse">
                Fetching your stars...
              </p>
            )}

            {/* RESULT */}
            {!loading && horoscope && (
              <div className="space-y-4 text-purple-200">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Today’s Horoscope
                  </h3>
                  <p className="text-sm opacity-90">{horoscope.horoscope}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Interesting Facts
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
                    {horoscope.facts?.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* -------------------- EXISTING ZODIAC UI -------------------- */}

      {/* Rotating Background Image */}
      <img
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             2xl:w-96 lg:w-80 opacity-95 pointer-events-none select-none"
        src={kundli}
        alt=""
      />
      {/* ROTATING RING */}
      <div
        className="
    hidden lg:block
    absolute
    top-1/2 left-1/2
    w-[450px] 2xl:w-[550px]
    -translate-x-1/2 -translate-y-1/2
    pointer-events-none select-none
    -z-10
  "
      >
        <img
          src={load}
          className="w-full opacity-55 animate-spin-slow"
          alt=""
        />
      </div>

      {/* --- ZODIAC CIRCLE LAYOUT (RESTORED) --- */}

      <div className="flex flex-wrap justify-center lg:gap-10 items-center w-full h-full">
        {/* Row 1 */}
        <div className="flex justify-center lg:gap-10 items-center w-full">
          {["Aries", "Aquarius"].map((sign) => (
            <div
              key={sign}
              className="lg:w-3/12 w-full cursor-pointer"
              onClick={() => openModal(sign)}
            >
              <ZodiacCard
                name={sign}
                img={ZODIAC_DATA[sign].img}
                value={ZODIAC_DATA[sign].date}
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-evenly lg:gap-32 items-center w-full">
          {["Taurus", "Gemini"].map((sign) => (
            <div
              key={sign}
              className="lg:w-3/12 w-full cursor-pointer"
              onClick={() => openModal(sign)}
            >
              <ZodiacCard
                name={sign}
                img={ZODIAC_DATA[sign].img}
                value={ZODIAC_DATA[sign].date}
              />
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex justify-between items-center w-full">
          {["Cancer", "Leo"].map((sign) => (
            <div
              key={sign}
              className="lg:w-3/12 w-full cursor-pointer"
              onClick={() => openModal(sign)}
            >
              <ZodiacCard
                name={sign}
                img={ZODIAC_DATA[sign].img}
                value={ZODIAC_DATA[sign].date}
              />
            </div>
          ))}
        </div>

        {/* Row 4 */}
        <div className="flex justify-between items-center w-full">
          {["Virgo", "Libra"].map((sign) => (
            <div
              key={sign}
              className="lg:w-3/12 w-full cursor-pointer"
              onClick={() => openModal(sign)}
            >
              <ZodiacCard
                name={sign}
                img={ZODIAC_DATA[sign].img}
                value={ZODIAC_DATA[sign].date}
              />
            </div>
          ))}
        </div>

        {/* Row 5 */}
        <div className="flex justify-evenly lg:gap-32 items-center w-full">
          {["Scorpio", "Pisces"].map((sign) => (
            <div
              key={sign}
              className="lg:w-3/12 w-full cursor-pointer"
              onClick={() => openModal(sign)}
            >
              <ZodiacCard
                name={sign}
                img={ZODIAC_DATA[sign].img}
                value={ZODIAC_DATA[sign].date}
              />
            </div>
          ))}
        </div>

        {/* Row 6 */}
        <div className="flex justify-center lg:gap-10 items-center w-full">
          {["Capricorn", "Sagittarius"].map((sign) => (
            <div
              key={sign}
              className="lg:w-3/12 w-full cursor-pointer"
              onClick={() => openModal(sign)}
            >
              <ZodiacCard
                name={sign}
                img={ZODIAC_DATA[sign].img}
                value={ZODIAC_DATA[sign].date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
