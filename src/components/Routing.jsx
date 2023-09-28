import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import Home from "./Home";
import Login from "./Login";
import AuthView from "./AuthView";

export default function Routing () {
  const token = sessionStorage.getItem("token");
//   const isUserLoggedIn = false;

  return (
    <RouterRoutes>
      {/* Non-Logged in Routes */}
      <Route path="/signup" element={<SignUp />} />
      {/* Can Only See When Logged In */}
      <Route path="/home" element={<AuthView component={Home} />} />
      {/* Public Home route */}
      <Route path="/" element={<Login />} />
    </RouterRoutes>
  );
};