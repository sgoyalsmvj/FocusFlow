import Video from "../models/video.models.js";
import capitalize from "../utils/capitalize.js";
import { uploadToS3 } from "../utils/getSignedUrl.js";

export const getVideos = async (req, res) => {
  const { creator } = req;
  try {
    const videosByCreator = await Video.find({ owner: creator._id });
    res.status(200).json({ videos: videosByCreator });
  } catch (error) {
    res.status(500).json({ message: "Videos were not found" });
  }
};

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const videoFile = req.files["video"][0];
    const thumbnailFile = req.files["thumbnail"]
      ? req.files["thumbnail"][0]
      : null;

    const videoKey = await uploadToS3(videoFile);
    let thumbnailKey = null;

    if (thumbnailFile) {
      thumbnailKey = await uploadToS3(thumbnailFile);
    }

    const newVideo = new Video({
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
      src: videoKey,
      thumbnail: thumbnailKey,
      owner: req.creator._id,
    });

    await newVideo.save();

    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "File was not uploaded" });
  }
};

export const deleteVideo = async (req, res) => {
  const { filename } = req.params;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: filename,
  };

  s3.deleteObject(params, (err, data) => {
    if (err) {
      console.error("Error deleting file from S3:", err);
      return res.status(500).send("Failed to delete file from S3.");
    }
    console.log("File deleted successfully from S3:", filename);
    res.status(200).send("File deleted successfully from S3.");
  });
};
