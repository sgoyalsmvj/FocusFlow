import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import TimerNavbar from "../components/TimerNavbar";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

const StudentVideosBrowse = () => {
  const { keywords, id } = useParams();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios.get(`/student/getVideos/${keywords}`).then((res) => {
      setVideoList(res.data.videos);
    });
  }, [keywords]);

  return (
    <div className="">
      <div>
        <TimerNavbar currentTask={id} />
      </div>
      <div className="flex justify-center mt-6 flex-wrap items-center">
        {videoList?.map((video) => (
          <VideoCard key={video._id} id={video._id} src={video.thumbnail} name={video.title} />
        ))}
      </div>
    </div>
  );
};

export default StudentVideosBrowse;
