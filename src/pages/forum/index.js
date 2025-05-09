import React, { useEffect, useState } from "react";
import "./style.css";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("hot");
  const [loading, setLoading] = useState(true);

  const fetchReddit = async (sort = "hot") => {
    try {
      const res = await fetch(`https://www.reddit.com/r/scams/${sort}.json?limit=10`)
      const data = await res.json();
      const posts = data.data.children
        .filter((p) => !p.data.stickied && !p.data.promoted)
        .slice(0, 4);
      setPosts(posts);
      return true;
    } catch (err) {
      console.error("Failed to load Reddit posts:", err);
      return false;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchReddit();

  }, []);

  // Fetch posts when sort changes
  useEffect(() => {
    fetchReddit(sort);
  }, [sort]);

  // Handle button click to change sort order
  const handleFilterClick = (newSort) => {
    setSort(newSort);  // Update the sort state
  };

  if (loading) {
    return (
      <div>
        <div className="forum-page">
          <h1>Social Forum</h1>
          <p>Browse through trusted groups to keep you aware!</p>
        </div>
        <div className="reddit-forum">
          <div className="reddit-container">
            <div className="reddit-header">
              <a
                className="reddit-link"
                href="https://www.reddit.com/r/Scams/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="reddit-logo"
                  src="imgs/reddit-logo.webp"
                  alt="Reddit Logo"
                />
                <h1>Reddit r/Scams</h1>
              </a>
              <div className="filters">
                <button
                  id="latestBtn"
                  onClick={() => handleFilterClick("new")}
                  className={sort === "new" ? "active" : ""}
                >
                  Latest
                </button>
                <button
                  id="popularBtn"
                  onClick={() => handleFilterClick("hot")}
                  className={sort === "hot" ? "active" : ""}
                >
                  Popular
                </button>
              </div>
            </div>
            <div id="reddit-feed" className="grid-container-bef">
              <div className="loading-screen">
                <div className="spinner" />
              </div>
            </div>
          </div>

        </div>
        <div className="hr-wrapper">
          <hr />
        </div>
        <div className="facebook-forum">
          <div className="facebook-container">

          </div>

        </div>

      </div>

    );
  }

  return (
    <div>
      <div className="forum-page">
        <h1>Social Forum</h1>
        <p>Browse through trusted groups to keep you aware!</p>
      </div>
      <div className="reddit-forum">
        <div className="reddit-container">
          <div className="reddit-header">
            <a
              className="reddit-link"
              href="https://www.reddit.com/r/Scams/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="reddit-logo"
                src="imgs/reddit-logo.webp"
                alt="Reddit Logo"
              />
              <h1>Reddit r/Scams</h1>
            </a>
            <div className="filters">
              <button
                id="latestBtn"
                onClick={() => handleFilterClick("new")}
                className={sort === "new" ? "active" : ""}
              >
                Latest
              </button>
              <button
                id="popularBtn"
                onClick={() => handleFilterClick("hot")}
                className={sort === "hot" ? "active" : ""}
              >
                Popular
              </button>
            </div>
          </div>

          {/* Render Reddit posts  */}
          <div id="reddit-feed" className="grid-container">
            {posts.map((post, index) => {
              const p = post.data;
              const postDate = new Date(p.created_utc * 1000);
              const readableDate = postDate.toLocaleDateString();
              const readableTime = postDate.toLocaleTimeString();

              const [hour, minute, rest] = readableTime.split(":");
              const period = rest.slice(-2); // Gets the AM/PM

              return (
                <div key={index} className="reddit-card">
                  <div className="grid-header">
                    <i className="reddit-icon fa-brands fa-reddit"></i>
                    <p className="username">u/{p.author}</p>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="post-date">
                    {readableDate} at {hour}:{minute} {period}
                  </p>
                  <p>
                    {p.selftext ? p.selftext.substring(0, 150) + "..." : "No content."}
                  </p>
                  <a href={`https://www.reddit.com${p.permalink}`} target="_blank" rel="noopener noreferrer">
                    See More
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <div className="hr-wrapper">
        <hr />
      </div>
      <div className="facebook-forum">
        <div className="facebook-container">
          <div
            className="tagembed-widget"
            data-widget-id="2165745"
            data-tags="false"
            view-url="https://widget.tagembed.com/2165745"
            ref={(el) => {
              if (el) {
                const existingScript = document.querySelector('script[src="https://widget.tagembed.com/embed.min.js"]');
                if (!existingScript) {
                  const script = document.createElement("script");
                  script.src = "https://widget.tagembed.com/embed.min.js";
                  script.async = true;
                  script.type = "text/javascript";
                  el.appendChild(script);
                }
              }
            }}
          ></div>

        </div>
      </div>

      <footer className="forum-footer">
        <p>&copy; 2025 Innov8</p>
      </footer>
    </div>
  );
};

export default Forum;
