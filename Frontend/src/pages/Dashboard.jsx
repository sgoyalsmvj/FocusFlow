import React from "react";

const Dashboard = () => {
  const userName = "John Doe"; // Replace with dynamic data
  const progress = 65; // Progress percentage, dynamic data
  const recommendedContent = [
    {
      id: 1,
      title: "Learn React Basics",
      thumbnail: "https://via.placeholder.com/200?text=React+Basics",
    },
    {
      id: 2,
      title: "Master GraphQL",
      thumbnail: "https://via.placeholder.com/200?text=GraphQL",
    },
    {
      id: 3,
      title: "Intro to Blockchain",
      thumbnail: "https://via.placeholder.com/200?text=Blockchain",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-3xl font-bold">Welcome back, {userName}!</h1>
        <p className="text-gray-400 mt-2">
          Continue learning and track your progress.
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Progress Tracker */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          <div className="relative h-4 bg-gray-700 rounded">
            <div
              className="absolute top-0 left-0 h-4 bg-blue-600 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-400">{progress}% completed</p>
        </div>

        {/* Recommended Content */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
          <div className="flex overflow-x-scroll gap-4">
            {recommendedContent.map((item) => (
              <div
                key={item.id}
                className="w-48 flex-shrink-0 bg-gray-900 rounded-lg overflow-hidden"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-28 object-cover"
                />
                <div className="p-2">
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
          <div className="flex flex-col space-y-2">
            <button className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition">
              My Courses
            </button>
            <button className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition">
              Live Classes
            </button>
            <button className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition">
              My Profile
            </button>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <span className="font-bold text-white">React Basics:</span>{" "}
              Assignment due tomorrow
            </li>
            <li className="mb-2">
              <span className="font-bold text-white">GraphQL Mastery:</span>{" "}
              Live Class in 2 days
            </li>
            <li>
              <span className="font-bold text-white">Blockchain Intro:</span>{" "}
              Quiz in 3 days
            </li>
          </ul>
        </div>

        {/* Announcements */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <p className="text-gray-400">
            🚀 New course on *Machine Learning* is now live. Enroll today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
