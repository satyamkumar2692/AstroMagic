import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Hero";
import Chat from "./Chat";
import Header from "./Header";
import AstroKundli from "./AstroKundli";
import ProfilePage from "./ProfilePage";
import About from "./About";
import Footer from "./Footer";
import Chatbothoro from "./Chatbothoro";
import ProtectedRoute from "../ProtectedRoute";
import MatchKundli from "./MatchKundli";
const Body = () => {
  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/chat",
          element: (
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          ),
        },
        {
          path: "/horo",
          element: (
            <ProtectedRoute>
              <Chatbothoro />
            </ProtectedRoute>
          ),
        },
        {
          path: "/about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "/kundligpt",
          element: (
            <ProtectedRoute>
              <AstroKundli />
            </ProtectedRoute>
          ),
        },
        {
          path: "/match",
          element: (
            <ProtectedRoute>
              <MatchKundli />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
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
