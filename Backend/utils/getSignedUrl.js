import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION_NAME,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const uploadToS3 = async (file) => {
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${file.filename}`, // Unique file key
    Body: fileStream,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
    const getObjectParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `uploads/${file.filename}`,
    };
    const url = await getSignedUrl(
      s3Client,
      new GetObjectCommand(getObjectParams)
    );

    // Delete the file from the local filesystem
    fs.unlink(file.path, (err) => {
      if (err) {
        console.error("Error deleting local file:", err);
      } else {
        console.log("Local file deleted successfully");
      }
    });

    return url;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw new Error("Could not upload file to S3");
  }
};

export { uploadToS3 };
  