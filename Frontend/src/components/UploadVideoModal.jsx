import React from "react";
import { RxCross2 } from "react-icons/rx";
const UploadVideoModal = ({onClose}) => {
    const handleClose = () => {
        onClose(false);
      };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
      <div className="w-1/2 bg-[#0d1117] p-6 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-white mb-4 text-xl font-semibold">
            Add new video
          </h1>
          <button onClick={handleClose} className="mb-4 p-1 rounded-md bg-red-600 text-2xl">
            <RxCross2 />
          </button>
        </div>
        <form>
          <label className="my-2">Select Video</label>
          <input
            type="file"
            accept="video/*"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <label className="my-2">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <label className="my-2">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <label className="my-2">Tags</label>
          <input
            type="text"
            name="tags"
            id="tags"
            placeholder="Tags"
            className="mb-3 w-full rounded-md border border-gray-600 bg-[#0d1117] p-1 focus:border-blue-600 focus:outline-none text-white"
          />
          <div className="w-full flex justify-center items-center">
            <button className="bg-[#238636] mt-3 p-2  font-semibold w-1/4 rounded-md text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadVideoModal;
