import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ id, src, name, duration }) => {
  return (
    <div className="mx-4 my-5 ">
      <Link to={`/video/${id}`}>
        <img className="bg-white w-[300px] h-[180px] rounded-md" src={src} />
      </Link>
      <div className="flex justify-between items-center">
        <h2 className="m-1 my-2 font-mono font-semibold ">{name}</h2>
        <span className="relative bottom-9 right-2 bg-black rounded-sm px-1 opacity-[0.5]">
          {duration}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
