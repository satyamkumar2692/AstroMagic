import { useDispatch, useSelector } from "react-redux";
import Explore from "./Explore";
import { useEffect, useState } from "react";
import TopAstro from "./TopAstro";
import bg from "../image/bg1.jpg";
import Why from "./Why";
import LoginForm from "./LoginForm";
import React, { useRef } from "react";
const Hero = () => {
  const form = useSelector((store) => store.configApp.form);
  const [topAstro, settopAstro] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://api.consultant.list.astrotalk.com/AstroTalk/freeAPI/consultant/get-list/filter?appId=4&businessId=1&consultantTypeId=1&timezone=Asia/Kolkata&pageNo=0&pageSize=18&version=1.19.09.23&serviceId=4&languageId=1&hardwareId=&countryCode=&sortByRating=false&sortByExperience=false&sortByPrice=false&sortByOrder=false&isDesc=false&isPoAstrologer=true&userId=34925941"
      );
      const jsonn = await data.json();
      settopAstro(jsonn?.content);
    } catch (e) {
      console.log("there is something wrong in getting top astrologers list");
    }
  };

  const targetRef = useRef(null);
  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {" "}
      {form && <LoginForm />}
      <div className="w-12/12  relative lg:px-0 2xl:px-44">
        <img
          alt="bg"
          className="h-screen brightness-75 w-full md:scale-100 scale-x-[3] fixed top-0 left-0 -z-40"
          src={bg}
        ></img>
        <Explore handleScroll={handleScroll} />
        <TopAstro list={topAstro} />
        <Why ref={targetRef} />
      </div>
    </>
  );
};
export default Hero;
