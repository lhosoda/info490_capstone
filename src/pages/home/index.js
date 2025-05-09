import React from "react";
import "./style.css";

const Home = () => {
    return (
        <div>

            <main className="home-page">
                <div className="introduction">
                    <div className="intro">
                        <div className="intro-desc">
                            <h1>Your guide to staying safe in the digital world</h1>
                            <p>
                                Keeping you safe and aware online. Cyber Aware is an all-in-one online safety platform to
                                empower you to protect yourself and the people you care about from fraud when using
                                technology.
                            </p>
                            <button>Learn More</button>
                        </div>
                        <div className="intro-img">
                            <img className="macbook-img" src="/imgs/macbook-img.png" alt="Macbook" />
                        </div>
                    </div>
                    <img className="down-arrow" src="/imgs/down-arrow.svg" alt="Scroll Down" />
                </div>
                <div className="shape-divider1">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>

                <div className="fraud-stat">
                    <h1>
                        Americans have lost over $3,427,717,654 from <br /> fraud alone in 2023
                    </h1>
                </div>

                <div className="why-us">
                    <div className="wave-container">
                        <div className="shape-divider2">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                                preserveAspectRatio="none">
                                <path
                                    d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                                    className="shape-fill"></path>
                            </svg>
                        </div>
                        <h1 className="wave-title">Why Cyber Aware?</h1>
                    </div>
                    <div className="why-us-desc">
                        <p>
                            In the last 3 years, investment crime has increased the most with
                            Washington ranking 11th in amount lost with a total of <span className="highlight-number">$88,958,679</span>.
                        </p>
                        <p>
                            <span className="highlight-number">11.7 million data-breach</span> notices were sent to
                            Washingtonians in 2024, more than double the number sent the previous year (4.5M).
                        </p>
                    </div>
                </div>

                <div className="our-features">
                    <div className="wave-container-feat">
                        <div className="shape-divider3">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                                preserveAspectRatio="none">
                                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                                    className="shape-fill"></path>
                            </svg>
                        </div>
                        <h1 className="wave-title-feat">Keep Your Cyber Community Aware</h1>
                    </div>

                    <div className="features">
                        <div className="feature1">
                            <img className="feature-img" src="/imgs/learn-color.svg" alt="Learn Feature" />
                            <div className="feature-desc">
                                <h3>With our learning modules you can teach yourself and others around you online safety habits!</h3>
                                <p>Featuring transcripts in different languages and an optional assessment to refine your skills, you will never be uncertain online again.</p>
                            </div>
                        </div>

                        <div className="feature2">
                            <img className="feature-img" src="/imgs/chatbot-color.svg" alt="Chatbot Feature" />
                            <div className="feature-desc">
                                <h3>Our AI chatbot is integrated with artificial intelligence to answer all your questions cybersecurity related.</h3>
                                <p>The chatbot can instantly identify phishing and other scams through uploaded photos. Show you how to make a strong password and much more!</p>
                            </div>
                        </div>

                        <div className="feature3">
                            <img className="feature-img" src="/imgs/forum-color.svg" alt="Forum Feature" />
                            <div className="feature-desc">
                                <h3>The forum is a place to view phishing and scams seen from other users within trusted platforms.</h3>
                                <p>The forum is constantly updated from users within trusted websites identifying scams that they have seen to keep others aware.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <p>&copy; 2025 Innov8</p>
            </footer>


        </div>
    );
};

export default Home;
