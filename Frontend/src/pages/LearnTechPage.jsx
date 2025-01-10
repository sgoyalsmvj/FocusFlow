import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const LearnTechPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTechStacks = location.state?.selectedTechnologies;
  const [activeTech, setActiveTech] = useState(selectedTechStacks?.[0] ?? "");
  const [activeTab, setActiveTab] = useState("Videos");
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [videoIds, setVideoIds] = useState([]);

  const content = {
    Articles: `Articles related to ${activeTech}`,
    "Interview Prep": `Interview Prep content for ${activeTech}`,
  };

  useEffect(() => {
    if (!selectedTechStacks || selectedTechStacks.length === 0) {
      navigate("/");
    }
  }, [selectedTechStacks, navigate]);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    if (activeTech) {
      axios({
        method: "get",
        url: `https://www.googleapis.com/youtube/v3/search`,
        params: {
          key: "AIzaSyDKXnIFS2ouLKxNGsSI0hhD9ts2kO50Kcc",
          q: activeTech,
          type: "video",
          part: "snippet",
          maxResults: 10,
        },
        withCredentials: false,
      })
        .then((res) => {
          const videoIds = res.data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
          }));
          setVideoIds(videoIds);
        })
        .catch((err) => {
          console.error("Error fetching videos:", err);
        });
    }
  }, [activeTech]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  const handleVideoClick = (video) => {
    navigate("/watchVideo", { state: { video } });
  };

  if (!selectedTechStacks) {
    return null;
  }

  return (
    <div className="flex h-screen bg-[#0d1117] text-white">
      <aside className="w-1/5 bg-gray-900 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-4">Selected Tech Stacks</h2>
          <ul className="space-y-2">
            {selectedTechStacks.map((tech) => (
              <li
                key={tech}
                onClick={() => setActiveTech(tech)}
                className={`cursor-pointer p-2 rounded ${
                  activeTech === tech ? "bg-blue-600" : "bg-gray-800"
                } hover:bg-blue-500 transition`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 bg-gray-800 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Focus Timer</h3>
          <p className="text-2xl font-bold mb-4">{formatTime(timer)}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsTimerRunning((prev) => !prev)}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {isTimerRunning ? "Pause" : "Start"}
            </button>
            <button
              onClick={resetTimer}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{activeTech}</h1>

        <div className="flex border-b border-gray-700 mb-4">
          {["Videos", "Articles", "Interview Prep"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-400"
              } hover:text-white transition`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          {activeTab === "Videos" ? (
            videoIds.length > 0 ? (
              <div className="overflow-y-auto max-h-[36rem] flex flex-col gap-4">
                {videoIds.map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center space-x-4 bg-gray-900 p-4 rounded shadow cursor-pointer"
                    onClick={() => handleVideoClick(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-60 h-40 rounded"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-blue-400">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {video.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading videos...</p>
            )
          ) : (
            <p className="text-lg">{content[activeTab]}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default LearnTechPage;
