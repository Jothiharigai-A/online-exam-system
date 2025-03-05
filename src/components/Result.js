import React from "react";

const Result = () => {
  const name = localStorage.getItem("studentName");
  const regNo = localStorage.getItem("studentRegNo");

  return (
    <div className="container mt-5">
      <h2>Exam Result</h2>
      <p>Name: {name}</p>
      <p>Registration No: {regNo}</p>
      <p>Score: 8/10</p>
    </div>
  );
};

export default Result;
