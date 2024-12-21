import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

const TechLearningPage = () => {
  const allTechStacks = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Angular",
    "Svelte",
    "Next.js",
    "Nuxt.js",
    "Gatsby",
    "Remix",
    "Astro",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Less",
    "Styled Components",
    "Material UI",
    "Chakra UI",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Django",
    "Flask",
    "FastAPI",
    "Ruby on Rails",
    "Spring Boot",
    "ASP.NET Core",
    "Laravel",
    "Phoenix",
    "GraphQL",
    "Apollo",
    "gRPC",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Redis",
    "Cassandra",
    "DynamoDB",
    "Firebase",
    "Oracle",
    "MariaDB",
    "Elasticsearch",
    "CouchDB",
    "Neo4j",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Terraform",
    "Jenkins",
    "GitLab CI",
    "GitHub Actions",
    "CircleCI",
    "Ansible",
    "Nginx",
    "Apache",
    "Python",
    "Java",
    "C++",
    "Go",
    "Rust",
    "Swift",
    "Kotlin",
    "Scala",
    "Dart",
    "Elixir",
    "Julia",
    "R",
    "Haskell",
    "Clojure",
    "React Native",
    "Flutter",
    "Ionic",
    "Xamarin",
    "Swift",
    "Kotlin Multiplatform",
    "PhoneGap",
    "Cordova",
    "WebAssembly",
    "Blockchain",
    "TensorFlow",
    "PyTorch",
    "Kafka",
    "RabbitMQ",
    "WebRTC",
    "Socket.IO",
    "Electron",
    "Unity",
    "Unreal Engine",
  ];

  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "GraphQL",
    "Node.js",
    "Python",
    "Django",
    "Blockchain",
    "Go",
    "React Native",
    "Github",
    "Microsoft Azure",
  ];

  const [typedText, setTypedText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser, setIsAuthenticated, authUser } = useAuth();

  const maxTechStacks = 5;

  useEffect(() => {
    const text = "What do you want to learn today?";
    let i = 0;

    setTypedText("");

    const interval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = allTechStacks.filter((tech) =>
      tech.toLowerCase().includes(searchText.toLowerCase())
    );
    setSuggestions(filtered);
  }, [searchText]);

  const removeTechStack = (tech) => {
    setSelectedTechStacks((prev) => prev.filter((t) => t !== tech));
  };

  const handleLogout = () => {
    axios.get("api/auth/logout").then(() => {
      setAuthUser(null);
      setIsAuthenticated(false);
    });
    navigate("/");
  };

  const userName = authUser.name;

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <Navbar page="addtask" userName={userName} handleLogout={handleLogout} />

      <main className="p-6">
        <h1 className="text-4xl font-bold mb-6 flex items-center justify-center">
          {typedText}
          <span className="animate-blink">|</span>
        </h1>

        <div className="bg-[#0d1117] p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <button
                key={index}
                className="bg-blue-600 text-white py-1 px-3 rounded-full hover:bg-blue-700 transition duration-300"
                onClick={() => {
                  if (
                    selectedTechStacks.length < maxTechStacks &&
                    !selectedTechStacks.includes(tech)
                  ) {
                    setSelectedTechStacks((prev) => [...prev, tech]);
                    setSearchText("");
                  }
                }}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mb-4 flex justify-center">
          {selectedTechStacks.length === maxTechStacks ? (
            <p className="text-yellow-400 mt-4">
              You&apos;ve reached the maximum number of technologies!
            </p>
          ) : (
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setShowSuggestions(true);
              }}
              placeholder={
                selectedTechStacks.length === maxTechStacks
                  ? "You've reached the maximum number of technologies!"
                  : "Search for technologies..."
              }
              disabled={selectedTechStacks.length === maxTechStacks}
              className="w-1/3 p-4 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-solid"
            />
          )}

          {suggestions.length > 0 && showSuggestions && (
            <ul className="absolute top-full w-1/3 bg-gray-700 mt-1 rounded shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSearchText("");
                    setShowSuggestions(false);
                    if (
                      selectedTechStacks.length < maxTechStacks &&
                      !selectedTechStacks.includes(suggestion)
                    ) {
                      setSelectedTechStacks((prev) => [...prev, suggestion]);
                    }
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-center flex-col items-center">
          {selectedTechStacks.map((tech, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-800 p-4 rounded mb-2 w-1/3"
            >
              <span>{tech}</span>
              <button
                onClick={() => removeTechStack(tech)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {selectedTechStacks.length >= 1 ? (
          <div className="flex justify-center mt-10">
            <button
              className={`transform -translate-y-1/2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition`}
            >
              Start Learning
            </button>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default TechLearningPage;
