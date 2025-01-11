import React, { useState } from "react";

const TopVideos = () => {
  const images = [
    "https://via.placeholder.com/300x150?text=Video+1",
    "https://via.placeholder.com/300x150?text=Video+2",
    "https://via.placeholder.com/300x150?text=Video+3",
    "https://via.placeholder.com/300x150?text=Video+4",
    "https://via.placeholder.com/300x150?text=Video+5",
    "https://via.placeholder.com/300x150?text=Video+6",
    "https://via.placeholder.com/300x150?text=Video+7",
    "https://via.placeholder.com/300x150?text=Video+8",
    "https://via.placeholder.com/300x150?text=Video+9",
    "https://via.placeholder.com/300x150?text=Video+10",
    "https://via.placeholder.com/300x150?text=Video+11",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#0d1117] p-6 rounded-lg shadow-lg ">
      <h2 className="text-white text-xl font-bold mb-4 ml-2">Top Videos</h2>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          &#8592;
        </button>

        {/* Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Video ${index + 1}`}
                className="w-full rounded-lg mx-2"
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TopVideos;
