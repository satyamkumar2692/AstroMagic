import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import Chat from "./Chat";
import Header from "./Header";
import AstroKundli from "./AstroKundli";
import About from "./About";
import Footer from "./Footer";
import Chatbothoro from "./Chatbothoro";

const Body = () => {
  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer/>
        </>
      ),
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/horo",
          element: <Chatbothoro/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/kundligpt",
          element: <AstroKundli />,
        }
      ],
    },
   
  ]);

  return (
    <>
      <RouterProvider router={appLayout} />
    </>
  );
};
export default Body;
