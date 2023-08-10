import "./App.css";
import { Text } from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import logo from "./assets/img/logo-wh.svg";
import logoBlack from "./assets/img/logo-b.svg";
import { FiCompass } from "react-icons/fi";
import React from "react";
// import icons
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { useEffect, useState } from "react";
// import components
import Challenge from "./Components/Challenge";
import DashbordAdmin from "./Components/DashboardAdmin/DashbordAdmin";
import User from "./Components/DashboardAdmin/User";
import Department from "./Components/DashboardAdmin/Department";
import Goals from "./Components/DashboardAdmin/Goals";
import Solution from "./Components/DashboardAdmin/Solution";
import Login from "./Components/auth/Login";
import OneChallenge from "./Components/DashboardAdmin/OneChallenge";

import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import LandingPage from "./Components/LandingPage/LandingPage";
import { SidebarProvider } from "./contexts/SaidebarContext";

// Start App code
export default function App() {
  const [dataChallenge, setDataChallenge] = useState([]);
  const [dataComment, setDataComment] = useState([]);
  const [employee, setEmployee] = useState([]);

  const navigate = useNavigate();
  const apiChallenge = "https://target-zgr6.onrender.com/api/admin/challenge/";
  const apiComment = "https://target-zgr6.onrender.com/api/admin/comment/";
  const apiEmployee = "https://target-zgr6.onrender.com/api/admin/employee";

  const Params = useLocation();
  const pathname = Params.pathname;
  useEffect(() => {
    axios.get(apiChallenge).then((res) => {
      setDataChallenge(res.data.result);
    });
    axios.get(apiComment).then((res) => {
      setDataComment(res.data.result);
    });
    axios.get(apiEmployee).then((res) => {
      setEmployee(res.data.result);
    });
  }, [pathname]);

  // get comment data from employee
  const employeeComment = () => {
    employee.map((item) => {
      item.comments.map((item) => {});
    });
  };
  employeeComment();
  // Calculate the number of challenges
  const totalChallenges = dataChallenge.length;
  const totalComments = dataComment.length;
  const totalEmployee = employee.length;
  const statData = [
    {
      id: 2,
      label: "عدد التحديات",
      score: totalChallenges,
      icon: FiCompass,
      percentage: "30%",
    },
    {
      id: 1,
      label: "عدد الردود",
      score: totalComments,
      icon: HiOutlineMail,
    },
    {
      id: 3,
      label: "عدد الموظفين",
      score: totalEmployee,
      icon: HiUserGroup,
    },
  ];

  const isLogin = localStorage.getItem("token");
  const isUser = localStorage.getItem("username");
  const isAdmin = "a";

  return (
    <>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      {isLogin ? (
        <>
          <SidebarProvider>
            <Routes>
              {isUser ? (
                <>
                  <Route path="/" element={<Challenge props={isUser} />} />
                  <Route path="/Goals" element={<Goals />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/challenge/:id" element={<OneChallenge />} />
                  <Route path="*" element={<Text>404</Text>} />
                </>
              ) : (
                <>
                  <Route
                    path="/"
                    element={<DashbordAdmin statData={statData} />}
                  />
                  <Route path="/challenge" element={<Challenge />} />
                  <Route path="/User" element={<User />} />
                  <Route path="/Department" element={<Department />} />
                  <Route path="/Goals" element={<Goals />} />
                  <Route path="/Solution" element={<Solution />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/challenge/:id" element={<OneChallenge />} />
                  <Route path="*" element={<Text>404</Text>} />
                </>
              )}
            </Routes>
          </SidebarProvider>
        </>
      ) : (
        <>{pathname == "/login" ? <Login /> : navigate("/landing")}</>
      )}
    </>
  );
}
