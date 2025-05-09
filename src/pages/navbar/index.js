import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
    return (
            <header>
                <div className="nav-bar">
                    <Link to="/home">
                        <img className="logo" src="/imgs/logo.svg" alt="Logo" />
                    </Link>
                    <div className="navigation">
                        <img className="learn-nav" src="/imgs/learn.svg" alt="Learn" />
                        <Link to="/chatbot">
                            <img className="chatbot-nav" src="/imgs/chatbot.svg" alt="Chatbot" />
                        </Link>
                        <Link to="/forum">
                            <img className="forum-nav" src="/imgs/forum.svg" alt="Forum" />
                        </Link>
                    </div>
                </div>
            </header>
    )};

    export default NavBar;