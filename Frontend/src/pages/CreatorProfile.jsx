import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import profile from "../assets/profile.jpg";
import hq from "../assets/hqdefault.webp";
import { HiOutlinePlus } from "react-icons/hi";
import VideoCard from "../components/VideoCard";
import UploadVideoModal from "../components/UploadVideoModal";
const CreatorProfile = () => {
  const [videoData, setVideoData] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  const data = [
    {
      id: "1",
      name: "Test Video 1",
      src: "https://example.com/videos/test_video1.mp4",
      description: "A 10-second test video with a solid blue color.",
      duration: "00:00:10",
      format: "mp4",
      resolution: "1280x720",
    },
    {
      id: "2",
      name: "Test Video 2",
      src: "https://example.com/videos/test_video2.mp4",
      description: "A 10-second test video with a color gradient pattern.",
      duration: "00:00:10",
      format: "mp4",
      resolution: "1280x720",
    },
    {
      id: "3",
      name: "Test Video 3",
      src: "https://example.com/videos/test_video3.mp4",
      description: "A 10-second test video with a moving test pattern.",
      duration: "00:00:10",
      format: "mp4",
      resolution: "1280x720",
    },
    {
      id: "4",
      name: "Test Video 4",
      src: "https://example.com/videos/test_video3.mp4",
      description: "A 10-second test video with a moving test pattern.",
      duration: "00:00:10",
      format: "mp4",
      resolution: "1280x720",
    },
  ];
  const addNewVideo = (ev) => {
    ev.preventDefault();
    setToggleModal(true);
  };
  useEffect(() => {
    setVideoData(data);
    console.log(videoData);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-start ml-12">
        <div className="creator-info m-3 p-5 flex justify-start items-center">
          <div className="w-[250px] ">
            <img className="rounded-full" src={profile} alt="" />
          </div>
          <div className="w-2/3 ml-5">
            <h1 className="text-4xl font-semibold font-mono m-5">
              Harkirat Singh
            </h1>
            <p className="w-4/5 ml-5 font-medium font-mono">
              I'm kirat, a 2018 Computer Science undergrad from IIT Roorkee.
              I've been part of Google's Summer of code twice and have worked at
              FANG, Finance and Startups over the last 6 years since graduating.
            </p>
          </div>
        </div>
        <div className="videos ">
          <div className="upload-button">
            <div className="ml-11 mt-5 flex space-x-2 items-center">
              <span className="text-2xl font-mono m-3 py-2 border-b-2 border-indigo-600">
                Uploads
              </span>
              <button
                onClick={addNewVideo}
                className="bg-[#238636]  font-mono  p-3 font-bold rounded-full "
              >
                <HiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="videos flex flex-wrap justify-center items-center ml-10">
            {videoData &&
              videoData.map((video, i) => (
                <VideoCard
                  key={i}
                  name={video.name}
                  src={hq}
                  duration={video.duration}
                />
              ))}
          </div>
          {toggleModal && <UploadVideoModal onClose={setToggleModal}/>}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
