import Student from "../models/studentModel.js";
import Task from "../models/taskModel.js";
import multer from 'multer';
import aws from 'aws-sdk';


const getVideos = async (req, res) => {
   
    
   



}

const uploadVideo = async (req, res) => {


    const s3 = new aws.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:  process.env.AWS_SECRET_ACCESS_KEY,
    });

    const upload = multer({ dest: 'uploads/' });
   
   try {

    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
      }
    
      // Read file content
      const fileContent = fs.readFileSync(file.path);
    
      // Upload file to S3 bucket
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: fileContent,
      };

      
      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Error uploading file to S3:', err);
          return res.status(500).send('Failed to upload file to S3.');
        }
        console.log('File uploaded successfully:', data.Location);
        res.status(200).send('File uploaded to S3.');
      });
    



       
   } catch (error) {
     
      res.status(500).json({ message: "File was not uploaded" });

   }



}

const deleteVideo = async (req, res) => {
   
    const { filename } = req.params;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
    };
  
    s3.deleteObject(params, (err, data) => {
      if (err) {
        console.error('Error deleting file from S3:', err);
        return res.status(500).send('Failed to delete file from S3.');
      }
      console.log('File deleted successfully from S3:', filename);
      res.status(200).send('File deleted successfully from S3.');
    });





}

export { getVideos, uploadVideo, deleteVideo};