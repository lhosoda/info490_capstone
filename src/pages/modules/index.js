import React, { useState } from "react";
import "./style.css";

const Modules = () => {
  const [currentModule, setCurrentModule] = useState({
    title: "Module 1",
    videoId: "K4TOrB7at0Y?si=YOEONcW8w7mnW6wK",
  });

  const modules = [
    { title: "Module 1", videoId: "K4TOrB7at0Y?si=YOEONcW8w7mnW6wK", defaultImg: "/imgs/light-rectangle.svg" },
    { title: "Module 2", videoId: "K4TOrB7at0Y?si=YOEONcW8w7mnW6wK", defaultImg: "/imgs/light-rectangle.svg" },
    { title: "Module 3", videoId: "K4TOrB7at0Y?si=YOEONcW8w7mnW6wK", defaultImg: "/imgs/light-rectangle.svg" },
  ];
  

  const handleModuleClick = (module) => {
    setCurrentModule(module);
  };

  return (
    <div className="video-modules">
      {/* Top Title */}
      <div className="cyber-aware-learning-modules-module-1">
        <span className="cyber-aware-learning-modules-module-1-span">
          Cyber Aware Learning Modules: {" "}
        </span>
        <span className="cyber-aware-learning-modules-module-1-span2">
          {currentModule.title}
        </span>
      </div>

      {/* YouTube Video Embed */}
      <div className="video-container">
        <iframe
          className="video-frame"
          src={`https://www.youtube.com/embed/${currentModule.videoId}`}
          title={currentModule.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Section Header for Modules */}
      <div className="modules-section-header">Select a Module</div>

      {/* Module Buttons */}
      {modules.map((mod, index) => (
        <div
          key={mod.title}
          onClick={() => handleModuleClick(mod)}
          className={`module-clickable module-${index + 1}-clickable`}
        >
          <img
            src={
              currentModule.title === mod.title
                ? "/imgs/dark-rectangle.svg"
                : mod.defaultImg
            }
            alt={mod.title}
          />
          <div className="module-text">{mod.title}</div>
        </div>
      ))}

      {/* Language Box */}
      <div className="rectangle-37"></div>
      <div className="rectangle-36"></div>

      <div className="current-transcript-language-english">
        <span className="current-transcript-language-english-span">
          Current Transcript Language: {" "}
        </span>
        <span className="current-transcript-language-english-span2">English</span>
      </div>

      <div className="change-language">Change Language</div>
    </div>
  );
};

export default Modules;
