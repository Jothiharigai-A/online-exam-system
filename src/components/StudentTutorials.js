import React from "react";
import { Link } from "react-router-dom";
import "../styles/StudentTutorials.css";

const videos = [
  {
    title: "Animated Portfolio Website Template",
    videoId: "SqcY0GlETPk",
    url: "https://youtu.be/SqcY0GlETPk?si=PafWKXfsbTZV3XOk",
    views: "387K views • 2 years ago",
    channel: "Codehal",
  },
  {
    title: "Animated Portfolio Website Template",
    videoId: "SqcY0GlETPk",
    url: "https://youtu.be/SqcY0GlETPk?si=PafWKXfsbTZV3XOk",
    views: "387K views • 2 years ago",
    channel: "Codehal",
  },
  {
    title: "Animated Portfolio Website Template",
    videoId: "SqcY0GlETPk",
    url: "https://youtu.be/SqcY0GlETPk?si=PafWKXfsbTZV3XOk",
    views: "387K views • 2 years ago",
    channel: "Codehal",
  },
];

const StudentTutorials = () => {
  return (
    <div className="tutorials-container">
      <h2>Student Tutorials</h2>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                className="thumbnail"
                onError={(e) => (e.target.src = "https://via.placeholder.com/250")}
              />
              <h3 className="video-title">{video.title}</h3>
              <p className="video-channel">{video.channel}</p>
              <p className="video-views">{video.views}</p>
            </a>
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary back-btn">Back</Link>
      

    </div>
  );
};

export default StudentTutorials;
