import React, { useState } from "react";
import "./style.css";

const Oscar = () => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Oscar, your chatbot. Let me know what I can help you with cyber security today!", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (input.trim() === "") return;
        const newUserMessage = { text: input, sender: "user" };
        setMessages([...messages, newUserMessage]);
        setInput("");

        try {
            const response = await fetch('http://localhost:3000/oscar', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: messages,
                    input: input,
                    systemInstruction: "You are a cyber security helper to elders. Your name is Oscar."
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const botMessage = { text: data.response, sender: "bot" };
            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {
            console.error("Error communicating with backend:", error);
            setMessages((prev) => [...prev, { text: "AI failed to respond.", sender: "bot" }]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">Oscar</div>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Oscar;