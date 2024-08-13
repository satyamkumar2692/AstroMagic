import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../store/configAppSlice";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/userSlice";
const LoginForm = () => {
  const [signIn, setsignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleToggle = () => {
    setsignIn(!signIn);
  };
  // const email = useRef(null);
  // const password = useRef(null);
  const [email, setEmail] = useState("jyanimanav@gmail.com");
  const [password, setPassword] = useState("12121212");

  const handleform = () => {
    dispatch(addForm());
  };
  const handleSign = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.status == "success") {
        console.log("login");
        dispatch(addUser(true));
        console.log("user added");
        navigate("/");
        handleform();
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/signup";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.status == "success") {
        console.log("register");
        console.log("user added");
        console.log("login");
        dispatch(addUser(true));
        navigate("/");
        handleform();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="h-screen w-full fixed flex justify-center px-6 lg:py-20 left-0 items-center z-40 bg-purple-950 transition-all bg-opacity-50">
      <div className="bg-zinc-950 shadow-sm  w-full px-10  py-10 lg:shadow-purple-800 rounded-2xl lg:mt-20 transition-all bg-opacity-90  sm:w-[70%] lg:w-[33%]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative  flex flex-col"
        >
          {signIn ? (
            <h2 className="py-4 text-4xl text-purple-200 font-bold">Sign In</h2>
          ) : (
            <h2 className="py-4 text-4xl text-purple-200 font-bold">Sign Up</h2>
          )}
          <input
            className="px-2 hover:border-b-purple-400 outline-none py-1.5 lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="px-2 py-1.5  hover:border-b-purple-400 outline-none lg:py-3 lg:my-4 my-2 bg-black  text-purple-200 bg-opacity-50 border-2 border-purple-800 rounded-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <span className="text-red-700 font-semibold">{errorMessage}</span>
          {signIn ? (
            <button
              type="submit"
              className="lg:px-8 px-4 hover:bg-opacity-50 border-2  shadow-md  shadow-purple-950 border-purple-800 transition-all lg:my-2 my-1 py-1 lg:py-2 rounded-lg text-white bg-purple-800  tracking-wider font-medium lg:font-semibold text-lg lg:text-xl"
              onClick={handleSign}
            >
              Sign In
            </button>
          ) : (
            <button
              type="submit"
              className="lg:px-8 px-4 hover:bg-opacity-50 border-2  shadow-md  shadow-purple-950 border-purple-800 transition-all lg:my-2 my-1 py-1 lg:py-2 rounded-lg text-white bg-purple-800  tracking-wider font-medium lg:font-semibold text-lg lg:text-xl"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          )}
          {!signIn ? (
            <div className="flex flex-row">
              <span className="text-gray-300 py-1.5 text-xs lg:text-sm   lg:py-3">
                Already have an account?
              </span>
              <span
                className="text-gray-300 py-1.5 text-xs lg:text-sm cursor-pointer lg:pl-1.5 pl-1  lg:py-3"
                onClick={handleToggle}
              >
                Sign In
              </span>
            </div>
          ) : (
            <div className="flex flex-row">
              <span className="text-gray-300 py-1.5 text-xs lg:text-sm  lg:py-3">
                New to AstroGPT?
              </span>
              <span
                className="text-gray-300 py-1.5 text-xs lg:text-sm lg:pl-1.5 pl-1 cursor-pointer lg:py-3"
                onClick={handleToggle}
              >
                Sign Up
              </span>
            </div>
          )}
          <div
            className="absolute -top-7 -right-3 cursor-pointer "
            onClick={handleform}
          >
            {" "}
            <i className="text-3xl text-purple-300 ri-close-fill"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
