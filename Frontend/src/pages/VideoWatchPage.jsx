import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VideoWatchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const videoDetails = location.state?.video;

  if (!videoDetails) {
    navigate(-1);
    return null;
  }

  const { id, title, description } = videoDetails;

  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-white">
      <header className="bg-gray-900 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">FocusFlow</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Back to LearnTechPage
        </button>
      </header>

      <main className="flex flex-1 flex-col items-center p-6">
        <div className="w-full max-w-5xl bg-black aspect-video rounded-lg shadow-lg">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full max-w-5xl mt-6 text-left">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-400 mb-4">
            {description || "No description available."}
          </p>

          <h3 className="text-xl font-semibold mb-2">Suggested Videos</h3>
          <div className="flex flex-wrap gap-4">
            <div className="w-60 bg-gray-900 p-4 rounded shadow hover:bg-gray-800 transition cursor-pointer">
              <div className="aspect-video bg-gray-700 rounded mb-2"></div>
              <p className="text-gray-300">Suggested Video Title 1</p>
            </div>
            <div className="w-60 bg-gray-900 p-4 rounded shadow hover:bg-gray-800 transition cursor-pointer">
              <div className="aspect-video bg-gray-700 rounded mb-2"></div>
              <p className="text-gray-300">Suggested Video Title 2</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 p-4 text-center">
        <p className="text-gray-500 text-sm">
          FocusFlow &copy; 2024. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default VideoWatchPage;
