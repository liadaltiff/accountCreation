import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import MaleRolePage from "./rolePages/MaleRolePage/MaleRolePage";
import ProtectedRoute from "./components/ProtectedRoute";
import FemaleRolePage from "./rolePages/FemaleRolePage/FemaleRolePage";
import AdminRolePage from "./rolePages/AdminRolePage/AdminRolePage";
import { useContext, useEffect, useLayoutEffect } from "react";
import { getUser } from "./api/users";
import { UserContext } from "./UserContext";
import { setUserLS } from "./utils/localstorage";

export default function App() {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    async function updateUser() {
      const user = await getUser(loggedInUser._id);
      if (user) {
        console.log("loggedInUser", loggedInUser);
        console.log("user", user);
        setUserLS(user);
        console.log("loggedInUser", loggedInUser);
        console.log("user", user);
        setLoggedInUser(user);
        console.log("loggedInUser", loggedInUser);
        console.log("user", user);
      }
    }
    updateUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />

        <Route
          path="/maleRole"
          element={
            <ProtectedRoute role={"Male"}>
              <MaleRolePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/femaleRole"
          element={
            <ProtectedRoute role={"Female"}>
              <FemaleRolePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/adminRole"
          element={
            <ProtectedRoute role={"Admin"}>
              <AdminRolePage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}
