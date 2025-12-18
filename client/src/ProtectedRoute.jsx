import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]); // This effect runs when the user or navigate changes

  if (!user) {
    return null; // Prevents rendering protected content if the user is not authenticated
  }

  return children; // If user exists, render the children (protected content)
}

export default ProtectedRoute;
