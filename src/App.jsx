/* eslint-disable react/no-unescaped-entities */

import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "./zustand";

const initialstate = {
  about: "",
  _id: "",
  username: "",
  email: "",
  role: "",
  timeline: [],
  skills: [],
  youtube: "",
  projects: [],
  social_handles: [],
  services: [],
  testimonials: [],
  createdAt: "",
  updatedAt: "",
  __v: "",
};

function App() {
  const { data, updateData } = useStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (response.data.success) {
          updateData(response.data.user);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Aside />
      <div className="main-content">
        <Navbar />
        <section
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
