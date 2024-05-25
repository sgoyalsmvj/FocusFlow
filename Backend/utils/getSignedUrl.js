import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from "fs";
const s3Client = new S3Client({
  region: process.env.AWS_REGION_NAME,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const main = async () => {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME ,
    Key: "uploads/photo1.gif",
    Body: fs.createReadStream("./uploads/photo1.gif"),
  });

  try {
    const response = await s3Client.send(command);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// main();

async function getObjectURL() {
  const command = new GetObjectCommand({
    Bucket: "focus-flow-uploads",
    Key: "uploads/photo1.gif",
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function init() {
  console.log(await getObjectURL("uploads/photo1.gif"));
}

init();
