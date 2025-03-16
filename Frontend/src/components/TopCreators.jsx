import React, { useState } from "react";

const TopCreators = () => {
  const creators = [
    { name: "Alice", image: "https://via.placeholder.com/150?text=Alice" },
    { name: "Bob", image: "https://via.placeholder.com/150?text=Bob" },
    { name: "Charlie", image: "https://via.placeholder.com/150?text=Charlie" },
    { name: "Diana", image: "https://via.placeholder.com/150?text=Diana" },
    { name: "Diana", image: "https://via.placeholder.com/150?text=Diana" },
    { name: "Diana", image: "https://via.placeholder.com/150?text=Diana" },
    { name: "Diana", image: "https://via.placeholder.com/150?text=Diana" },
    { name: "Diana", image: "https://via.placeholder.com/150?text=Diana" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? creators.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === creators.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#0d1117] p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4">Top Creators</h2>
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
            {creators.map((creator, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full p-4"
              >
                {/* Circular Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Creator Name */}
                <p className="text-white mt-2 text-center font-semibold">
                  {creator.name}
                </p>
              </div>
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

export default TopCreators;
