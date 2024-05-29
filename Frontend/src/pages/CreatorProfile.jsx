import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // Importing the NavBar component
import profile from "../assets/profile.jpg"; // Importing profile image
import hq from "../assets/hqdefault.webp"; // Importing a default image
import { HiOutlinePlus } from "react-icons/hi"; // Importing an icon from react-icons
import VideoCard from "../components/VideoCard"; // Importing the VideoCard component
import UploadVideoModal from "../components/UploadVideoModal"; // Importing the UploadVideoModal component
import axios from "axios"; // Importing axios for HTTP requests
import { useAuth } from "../context/AuthContext"; // Importing useAuth from AuthContext

const CreatorProfile = () => {
  // State to hold video data
  const [videoData, setVideoData] = useState([]);
  // State to control the modal visibility
  const [toggleModal, setToggleModal] = useState(false);
  // Destructuring authUser and isLoggedIn from useAuth context
  const { authUser, isLoggedIn } = useAuth();

  // Function to handle new video button click
  const addNewVideo = (ev) => {
    ev.preventDefault();
    setToggleModal(true); // Show the upload video modal
  };

  // Function to fetch video data from the server
  const fetchVideoData = async () => {
    const data = await axios.get("/creator/getVideos");
    return data;
  };

  // useEffect hook to fetch video data when the component mounts
  useEffect(() => {
    fetchVideoData().then((res) => {
      setVideoData(res.data.videos); // Set video data to state
    });
  }, []);

  return (
    <div>
      {/* NavBar component */}
      <NavBar />
      <div className="flex flex-col justify-center items-start ml-12">
        <div className="creator-info m-3 p-5 flex justify-start items-center">
          {/* Profile image */}
          <div className="w-[250px] ">
            <img className="rounded-full" src={profile} alt="" />
          </div>
          {/* Creator's information */}
          <div className="w-2/3 ml-5">
            <h1 className="text-4xl font-semibold font-mono m-5">
              {authUser.name}
            </h1>
            <p className="w-4/5 ml-5 font-medium font-mono">
              I'm kirat, a 2018 Computer Science undergrad from IIT Roorkee.
              I've been part of Google's Summer of code twice and have worked at
              FANG, Finance and Startups over the last 6 years since graduating.
            </p>
          </div>
        </div>
        {/* Videos section */}
        <div className="videos ">
          <div className="upload-button">
            <div className="ml-11 mt-5 flex space-x-2 items-center">
              <span className="text-2xl font-mono m-3 py-2 border-b-2 border-indigo-600">
                Uploads
              </span>
              {/* Button to add a new video */}
              <button
                onClick={addNewVideo}
                className="bg-[#238636]  font-mono  p-3 font-bold rounded-full "
              >
                <HiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="videos flex flex-wrap justify-center items-center ml-10">
            {/* Render VideoCard components for each video */}
            {videoData &&
              videoData?.map((video) => (
                <VideoCard
                  key={video._id}
                  name={video.title}
                  src={video.thumbnail}
                  duration={video.duration}
                />
              ))}
          </div>
          {/* Conditional rendering of the UploadVideoModal */}
          {toggleModal && <UploadVideoModal onClose={setToggleModal} />}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
