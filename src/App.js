import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StudentTutorials from "./components/StudentTutorials";
import StaffLogin from "./components/StaffLogin";
import StudentLogin from "./components/StudentLogin";
import Exam from "./components/Exam";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-tutorials" element={<StudentTutorials />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
