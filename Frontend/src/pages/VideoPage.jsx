import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TimerNavbar from "../components/TimerNavbar";
const VideoPage = () => {
  const [video, setVideo] = useState(null);
  const { id } = useParams();
  //     useEffect(()=>{
  //         axios.get(`/student/getVideo/${id}`).then((res)=>setVideo(res.data))
  //     },[])
  return (
    <div>
      <TimerNavbar />
      <div className="w-2/3  m-9">
        {" "}
        <video
          src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1717089762894-20230831_235302.mp4"
          controls
          muted
        ></video>
      </div>
    </div>
  );
};

export default VideoPage;
