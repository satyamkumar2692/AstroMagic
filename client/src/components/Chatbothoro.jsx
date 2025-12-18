// import { useDispatch, useSelector } from "react-redux";
// import React, { useRef, useState } from "react";
// import { addBot } from "../store/configAppSlice";
// import logo from "../image/Logo.png";
// import Groq from "groq-sdk";
// import { useNavigate } from "react-router-dom";
// const Chatbothoro = () => {
//   const input = useRef();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [result, setresult] = useState(["StellarGuide: Hi"]);

//   const handlebot = () => {
//     dispatch(addBot());
//     navigate("/");
//   };

//   const groq = new Groq({
//     apiKey: "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",
//     dangerouslyAllowBrowser: true,
//   });
//   const handleSearch = async () => {
//     const data = await groq.chat.completions.create({
//       messages: [
//         {
//           role: "system",
//           content:
//             "answer in such a way that you are very wise astrologer and tell very positive horoscope by asking date of birth  and if user asks anything other than horoscope tell him to go to the chat section\n",
//         },
//         {
//           role: "user",
//           content: input.current.value,
//         },
//       ],
//       model: "llama3-8b-8192",
//     });

//     const Responce = data?.choices?.[0]?.message?.content;
//     setresult([
//       ...result,
//       "You: " + input.current.value,
//       "StellarGuide: " + Responce,
//     ]);
//     input.current.value = "";
//   };

//   return (
//     <div className="lg:pt-20 fixed w-full top-0 z-20 lg:mb-0 mb:20 pt-[20%] h-screen flex justify-center items-start  px-2 lg:px-16  bg-zinc-950 bg-opacity-100 w-12/12">
//       <div className="lg:w-[45%] w-full rounded-xl overflow-hidden relative h-[80vh] lg:h-[80vh]">
//         <div className="w-full flex flex-row h-[8vh] lg:h-[12vh] justify-between items-center bg-opacity-95 bg-purple-700 py-0.5 lg:py-4 px-4 lg:px-2">
//           <div className="flex justify-start items-center">
//             <img className="xl:w-16 w-10 lg:w-14" src={logo} alt="logo"></img>
//             <span className="lg:text-2xl text-purple-200 font-semibold  xl:text-2xl text-xl">
//               {" "}
//               StellarGuide-AI Horoscope
//             </span>
//           </div>

//           <i
//             className="text-xl lg:text-3xl text-purple-300 ri-close-fill cursor-pointer"
//             onClick={handlebot}
//           ></i>
//         </div>
//         <div className="w-full overflow-y-scroll px-3 py-3 flex flex-col justify-start items-start lg:px-4 pb-28 h-[75vh] bg-purple-950 bg-opacity-90 ">
//           {result?.map((result, index) => (
//             <div
//               key={index}
//               className="lg:px-3 px-1.5 mb-2 lg:mb-4 lg:tracking-wide tracking-wider rounded-lg lg:rounded-md font-normal lg:font-medium lg:py-1.5 py-1 bg-purple-600  text-white"
//             >
//               <span className="text-purple-50 text-xs lg:text-sm">
//                 {result}
//               </span>
//             </div>
//           ))}
//         </div>
//         <div className=" absolute flex justify-center bg-purple-700 items-center px-2 lg:px-4 w-full bottom-0 py-2 bg-opacity-95">
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="w-full relative  flex justify-center items-center"
//           >
//             <input
//               className="w-full py-2 placeholder:font-normal text-purple-900 font-medium  outline-none px-5 text-base lg:text-lg rounded-full"
//               type="text"
//               placeholder="Ask Horoscope"
//               ref={input}
//             ></input>
//             <button
//               className="px-4 py-1 lg:py-1.5 absolute rounded-e-full right-0 bg-purple-500 "
//               onClick={handleSearch}
//             >
//               <i className="text-2xl ri-send-plane-2-fill"></i>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbothoro;

import { useDispatch } from "react-redux";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { addBot } from "../store/configAppSlice";
import logo from "../image/Logo.png";
import { useNavigate } from "react-router-dom";

const Chatbothoro = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "StellarGuide: Hi! Ask me anything about your horoscope.",
    },
  ]);

  // 🟣 AUTO-LOAD PREVIOUS MESSAGES

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await axios.get("/api/chat/history");

        if (Array.isArray(res.data.chats)) {
          const formatted = res.data.chats.flatMap((chat) => {
            const arr = [];

            if (chat.botReply) {
              arr.push({ sender: "bot", text: chat.botReply });
            }

            if (chat.userMessage) {
              arr.push({ sender: "user", text: chat.userMessage });
            }

            return arr;
          });

          if (formatted.length === 0) {
            setMessages([
              {
                sender: "bot",
                text: "StellarGuide: Hi! Ask your horoscope questions ✨",
              },
            ]);
          } else {
            setMessages(formatted.reverse());
          }
          console.log(messages);
        }
      } catch (err) {
        console.log("History load error:", err);
      }
    };

    loadHistory();
  }, []);

  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handlebot = () => {
    dispatch(addBot());
    navigate("/");
  };

  const handleSearch = async () => {
    const userMessage = input.current.value.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    input.current.value = "";

    try {
      const res = await axios.post("/api/horoscope", {
        message: userMessage,
      });

      const botReply = res.data.reply || "No response";

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "StellarGuide: " + botReply },
      ]);
    } catch (err) {
      console.log(err);

      if (err.response?.status === 400) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Please complete your profile first." },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Something went wrong. Try again later." },
        ]);
      }
    }
  };

  return (
    <div className="lg:pt-20 fixed w-full top-0 z-20 pt-[20%] h-screen flex justify-center items-start px-2 lg:px-16 bg-zinc-950 bg-opacity-100">
      <div className="lg:w-[45%] w-full rounded-xl overflow-hidden relative h-[80vh]">
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-[8vh] lg:h-[12vh] bg-purple-700 bg-opacity-95 px-4">
          <div className="flex items-center">
            <img className="xl:w-16 w-10 lg:w-14" src={logo} alt="logo" />
            <span className="lg:text-2xl text-purple-200 font-semibold text-xl">
              StellarGuide – Horoscope
            </span>
          </div>

          <i
            className="text-xl lg:text-3xl text-purple-300 ri-close-fill cursor-pointer"
            onClick={handlebot}
          ></i>
        </div>

        {/* CHAT AREA */}
        <div
          ref={chatRef}
          className="overflow-y-scroll px-3 py-3 pb-28 h-[75vh] bg-purple-950 bg-opacity-90"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className="mb-2 bg-purple-600 text-white rounded-lg px-3 py-1 tracking-wide"
            >
              <span className="text-purple-50 text-xs lg:text-sm">
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* INPUT BAR */}
        <div className="absolute bottom-0 w-full bg-purple-700 bg-opacity-95 px-4 py-2">
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input
              ref={input}
              className="w-full py-2 px-5 rounded-full text-purple-900"
              type="text"
              placeholder="Ask about your horoscope..."
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-full px-4 bg-purple-500 rounded-e-full"
            >
              <i className="text-2xl ri-send-plane-2-fill"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbothoro;
