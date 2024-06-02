import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import TimerNavbar from "../components/TimerNavbar";
import { Link, useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

const StudentVideosBrowse = () => {
  const { keywords, taskId } = useParams();
  console.log(keywords)
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios.get(`/student/getVideos/${keywords}`).then((res) => {
      setVideoList(res.data.videos);
    });
  }, [keywords]);

  return (
    <div>
      <TimerNavbar currentTask={taskId} />
      <div className="flex justify-center mt-6 flex-wrap items-center">
        {videoList.map((video) => (
          <Link to={`/video/${taskId}/${video._id}`} key={video._id}>
            <VideoCard
              key={video._id}
              id={video._id}
              src={video.thumbnail}
              name={video.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentVideosBrowse;
