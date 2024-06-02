import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TimerNavbar from "../components/TimerNavbar";
import axios from "axios";

const VideoPage = () => {
  const { taskId, videoId } = useParams();
  const [video, setVideo] = useState(null);
  useEffect(() => {
    axios.get(`/student/getVideo/${videoId}`).then((res) => {
      console.log(res.data);
      setVideo(res.data.video)
    });
  },[]);
  return (
    <div>
      <TimerNavbar currentTask={taskId} />
      <div className="w-2/3 m-9">
        <video
          src={video.src}
          controls
          muted
        ></video>
      </div>
    </div>
  );
};

export default VideoPage;
