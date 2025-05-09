import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Chatbot = () => {
    return (
        <div className="chatbot">
            <div className="meet-oscar-the-online-safety-chatbot">
                <span>
                    <span className="meet-oscar-the-online-safety-chatbot-span">Meet </span>
                    <span className="meet-oscar-the-online-safety-chatbot-span2">
                         Oscar,<br />
                    </span>
                    <span className="meet-oscar-the-online-safety-chatbot-span3">
                        the online safety chatbot
                    </span>
                </span>
            </div>

            <img className="vector-2" src="/imgs/Vector 2.png" alt="Vector 2" />
            <img className="vector-1" src="/imgs/Vector 1.png" alt="Vector 1" />


            <div className="chat">
                <img className="chat2" src="/imgs/Chat.png" alt="Chat" />
            </div>

            <div className="oscar-description">
                Oscar is integrated with artificial intelligence to answer all your
                questions related to cybersecurity. Oscar can instantly identify phishing
                and other scams through uploaded photos. Try Now!
            </div>

            <button className="open-chat">
                <Link to="/oscar">Open Chat</Link>
            </button>
        </div>
    );
};

export default Chatbot;