import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StaffLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      navigate("/staff-dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Staff Login</h2>
      <input type="text" placeholder="Username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="form-control mt-2" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="btn btn-primary mt-2">Login</button>
    </div>
  );
};

export default StaffLogin;
