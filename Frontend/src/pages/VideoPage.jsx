import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TimerNavbar from "../components/TimerNavbar";
import axios from "axios";
import profile from "../assets/profile.jpg";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";

const VideoPage = () => {
  const { taskId, videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [suggestionVideos, setSuggestionVideos] = useState(null);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(`/student/getVideo/${videoId}`);
      setVideo(res.data?.video);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  const fetchSuggestionVideos = async (keywords) => {
    try {
      const res = await axios.get(`/student/getVideos/${keywords}`);
      const filteredVideos = res.data.videos.filter((v) => v._id !== videoId);
      setSuggestionVideos(filteredVideos);
    } catch (error) {
      console.error("Error fetching suggestion videos:", error);
    }
  };

  useEffect(() => {
    const loadVideo = async () => {
      await fetchVideo();
    };
    loadVideo();
  }, [videoId]);

  useEffect(() => {
    if (video) {
      const keywords = video.tags.join(" ");
      fetchSuggestionVideos(keywords);
    }
  }, [video]);

  return (
    <div>
      <TimerNavbar currentTask={taskId} />
      <div className="flex justify-between items-start">
        <div className="w-2/3 mt-2 ml-7">
          <video className="rounded" src={video?.src} controls></video>
          <div className=" p-1 rounded-md">
            <h1 className="font-bold text-2xl m-2">
              {video?.title?.charAt(0).toUpperCase() + video?.title?.slice(1)}
            </h1>
            <div className="flex  justify-between items-center">
              <div className=" m-3 mt-1 flex  items-center">
                <img
                  className="rounded-full w-[40px] h-[40px] mr-1"
                  src={profile}
                  alt="profile"
                />
                <div className="flex flex-col justify-center items-start ml-3">
                  <h1 className="font-medium text-xl">Harkirat </h1>
                  <h1> 41K views</h1>
                </div>
                <div className="bg-[#272727] text-white   font-mono py-1  px-3 rounded-full ml-10 ">
                  <button>Subscribe</button>
                </div>
              </div>
              <div>
                <div className=" flex justify-center items-center ">
                  <div className="flex bg-[#272727] text-white py-1 px-3 mr-6 rounded-full">
                    <button className="text-xl mr-3">
                      <BiSolidLike />
                    </button>
                    <span className="text-xl font-thin">|</span>
                    <button className="text-xl ml-3">
                      <BiSolidDislike />
                    </button>
                  </div>
                  <div className="mr-3">
                    <button className="flex jusitfy-center text-lg font-mono items-center rounded-full bg-[#272727] text-white py-1 px-3">
                      <FaShare />
                      <span className="ml-2">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] mt-2 mr-2 ml-3 p-2">
          {suggestionVideos?.map((v) => (
            <div key={v._id} className="flex mb-4">
              <div>
                <img className="rounded-lg w-[200px]" src={v.thumbnail} />
              </div>
              <div className="ml-2 flex flex-col items-start">
                <h1 className="text-xl">
                  {v.title.charAt(0).toUpperCase() + v?.title?.slice(1)}
                </h1>
                <h1 className="text-[1rem] font-semibold text-gray-400">
                  Harkirat
                </h1>
                <p className="text-[1rem] text-gray-400">41k views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
