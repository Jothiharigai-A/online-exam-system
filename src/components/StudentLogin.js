import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentRegNo", regNo);
    navigate("/exam");
  };

  return (
    <div className="container mt-5">
      <h2>Student Login</h2>
      <input type="text" placeholder="Student Name" className="form-control" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Registration No" className="form-control mt-2" onChange={(e) => setRegNo(e.target.value)} />
      <button onClick={handleLogin} className="btn btn-success mt-2">Login</button>
    </div>
  );
};

export default StudentLogin;
