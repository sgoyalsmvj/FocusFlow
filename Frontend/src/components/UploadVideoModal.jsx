import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const UploadVideoModal = ({ onClose }) => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    onClose(false);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("video", video);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("thumbnail", thumbnail);

    try {
      const response = await axios.post("/creator/uploadVideo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Reset form fields after successful upload
      setVideo(null);
      setTitle("");
      setDescription("");
      setTags("");
      setThumbnail(null);
      handleClose();
    } catch (error) {
      console.error("Error uploading video:", error);
      setError("Failed to upload video. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
      <div className="w-1/2 bg-[#0d1117] p-6 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-white mb-4 text-xl font-semibold">
            Add new video
          </h1>
          <button
            onClick={handleClose}
            className="mb-4 p-1 rounded-md bg-red-600 text-2xl"
          >
            <RxCross2 />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="my-2 text-white">Select Video</label>
          <input
            onChange={(e) => setVideo(e.target.files[0])}
            type="file"
            accept="video/*"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <label className="my-2 text-white">Select Thumbnail</label>
          <input
            onChange={(e) => setThumbnail(e.target.files[0])}
            type="file"
            accept="image/*"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <label className="my-2 text-white">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <label className="my-2 text-white">Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id="description"
            placeholder="Description"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <label className="my-2 text-white">Tags</label>
          <input
            type="text"
            onChange={(e) => setTags(e.target.value)}
            name="tags"
            id="tags"
            placeholder="Tags"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          {error && <p className="text-red-600">{error}</p>}
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#238636] mt-3 p-2 font-semibold w-1/4 rounded-md text-white"
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadVideoModal;
