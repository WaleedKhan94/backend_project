import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnClodinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    const responce = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    //File upload successfully
    console.log("file is uploaded on clodinary", responce.url);
    return responce;
    //catch
  } catch (error) {
    fs.unlinkSync(localfilepath); // remove file from server because operation was failed
    return null;
  }
};

export { uploadOnClodinary };
