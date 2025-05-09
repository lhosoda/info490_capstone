import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getImage = (path, defaultImg, activeImg) => {
        return location.pathname === path ? activeImg : defaultImg;
    };

    return (
        <header>
            <div className="nav-bar">
                <Link to="/home">
                    <img className="logo" src="/imgs/logo.svg" alt="Logo" />
                </Link>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`navigation ${menuOpen ? "active" : ""}`}>
                    <Link to="/modules">
                        <img 
                            className="learn-nav" 
                            src={getImage("/modules", "/imgs/learn.svg", "/imgs/learn-red.svg")} 
                            alt="Learn" 
                        />
                    </Link>
                    <Link to="/chatbot">
                        <div className="chatbot-wrapper">
                            <img 
                                className="chatbot-nav" 
                                src={getImage("/chatbot", "/imgs/chatbot.svg", "/imgs/chatbot-red.svg")} 
                                alt="Chatbot" 
                            />
                        </div>
                    </Link>
                    <Link to="/forum">
                        <img 
                            className="forum-nav" 
                            src={getImage("/forum", "/imgs/forum.svg", "/imgs/forum-red.svg")} 
                            alt="Forum" 
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
