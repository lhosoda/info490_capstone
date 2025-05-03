import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Image imports
import vector1 from "../../images/Vector 1.png";
import vector2 from "../../images/Vector 2.png";
import chatImg from "../../images/Chat.png";
import group10 from "../../images/Group 16.png";

const Chatbot = () => {
    return (
        <div className="chatbot">
            <div className="meet-oscar-the-online-safety-chatbot">
                <span>
                    <span className="meet-oscar-the-online-safety-chatbot-span">Meet</span>
                    <span className="meet-oscar-the-online-safety-chatbot-span2">
                         Oscar,<br />
                    </span>
                    <span className="meet-oscar-the-online-safety-chatbot-span3">
                        the online safety chatbot
                    </span>
                </span>
            </div>

            <img className="vector-2" src={vector2} alt="Vector 2" />
            <img className="vector-1" src={vector1} alt="Vector 1" />

            <div className="chat">
                <img className="chat2" src={chatImg} alt="Chat" />
            </div>

            <div className="oscar-is-integrated-with-artificial-intelligence-to-answer-all-your-questions-related-to-cybersecurity-oscar-can-instantly-identify-phishing-and-other-scams-through-uploaded-photos-try-now">
                Oscar is integrated with artificial intelligence to answer all your
                questions related to cybersecurity. Oscar can instantly identify phishing
                and other scams through uploaded photos. Try Now!
            </div>

            {/* <img className="rectangle-5" src={group10} alt="Rectangle 5" /> */}

            <button className="open-chat">
                <Link to="/oscar">Open Chat</Link>
                </button>
            {/* <div className="open-chat">Open Chat</div> */}
            <div className="cyber-aware">CYBER AWARE</div>
            <div className="rectangle-14"></div>
            <div className="rectangle-15"></div>
            <div className="rectangle-16"></div>
            <div className="what-can-i-use-the-chatbot-for">
                What can I use the chatbot for?
            </div>
            <div className="rectangle-162"></div>
            <div className="how-do-i-create-a-strong-password">
                How do I create a strong password?
            </div>
            <div className="rectangle-163"></div>
            <div className="is-this-email-a-scam">Is this email a scam?</div>
            <div className="don-t-know-where-to-start-try-these-examples-below">
                Don't know where to start? Try these examples below!
            </div>
        </div>
    );
};

export default Chatbot;