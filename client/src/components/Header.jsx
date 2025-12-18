import { Link, useNavigate } from "react-router-dom";
import Logo from "../image/Logo text.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../store/configAppSlice";
import { removeUser } from "../store/userSlice";

const Header = () => {
  const liCSS =
    "font-semibold focus:text-purple-300  hover:text-purple-300 uppercase tracking-wide text-sm 2xl:text-lg lg:text-sm cursor-pointer focus:border-purple-400 hover:border-purple-400 border-b-2 border-transparent lii pb-1";
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // dispatch(removeUser());
  const navigate = useNavigate();
  console.log(user);
  const handleform = () => {
    dispatch(addForm());
  };

  return (
    <>
      <div className=" z-50  fixed w-full mb-20 bg-gradient-to-b from-black  bg-opacity-100  py-1 flex-row flex items-center justify-between px-3 2xl:px-10 lg:px-6 md:px-10 ">
        <div>
          <Link to={"/"}>
            <img
              className="w-32  lg:py-3 py-3 2xl:py-7 2xl:w-72 md:w-44 lg:w-48"
              src={Logo}
              alt="Logo"
            ></img>
          </Link>
        </div>
        <div className="text-white lg:gap-5 gap-5 2xl:gap-8 justify-center items-center hidden lg:flex">
          {/* <Link to={"/chat"} className={liCSS} >Chat</Link> */}
          {!user ? (
            <>
              <span
                className={liCSS + " disabled-link"}
                onClick={(e) => {
                  handleform();
                }}
              >
                Chat
              </span>
              <span
                className={liCSS + " disabled-link"}
                onClick={(e) => {
                  handleform();
                }}
              >
                AI Horoscope
              </span>
              <span
                className={liCSS + " disabled-link"}
                onClick={(e) => {
                  handleform();
                }}
              >
                KUNDLI
              </span>
              <span
                className={liCSS + " disabled-link"}
                onClick={(e) => {
                  handleform();
                }}
              >
                Kundli Match
              </span>
              <span
                className={liCSS + " disabled-link"}
                onClick={(e) => {
                  handleform();
                }}
              >
                PROFILE
              </span>
              <span
                className={liCSS + " disabled-link"}
                onClick={(e) => {
                  handleform();
                }}
              >
                About
              </span>
            </>
          ) : (
            <>
              <Link to={"/chat"} className={liCSS}>
                Chat
              </Link>
              <Link to={"/horo"} className={liCSS}>
                {" "}
                AI Horoscope
              </Link>
              <Link to={"/kundligpt"} className={liCSS}>
                KUNDLI
              </Link>
              <Link to={"/match"} className={liCSS}>
                KUNDLI MATCH
              </Link>
              <Link to={"/profile"} className={liCSS}>
                profile
              </Link>
              <Link to={"/about"} className={liCSS}>
                About
              </Link>
            </>
          )}
        </div>

        <div>
          {user ? (
            <button
              className="lg:px-5 2xl:px-8 2xl:py-3 px-3 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-2 my-1 py-1 lg:py-1.5  text-white bg-purple-700  uppercase tracking-wide font-semibold 2xl:text-sm text-sm lg:text-sm"
              onClick={() => {
                dispatch(removeUser());
                navigate("/");
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="lg:px-5 2xl:px-8 2xl:py-3 px-3 hover:bg-transparent border-2 rounded-full hover:shadow-inner   shadow-purple-950  ring-purple-100 shadow-lg hover:shadow-purple-700 border-purple-700 transition-all lg:my-2 my-1 py-1 lg:py-1.5  text-white bg-purple-700  uppercase tracking-wide font-semibold 2xl:text-sm text-sm lg:text-sm"
              onClick={handleform}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
