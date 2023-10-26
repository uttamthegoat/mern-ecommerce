const cloudinary = require("cloudinary").v2;
const CustomError = require("../errors/CustomError");
const sharp = require("sharp");

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const imageUploadUser = async (file) => {
  if (!file) throw new CustomError(400, false, "No image provided");

  const webpBuffer = await sharp(file.buffer).toFormat("webp").toBuffer();
  const fileStr = webpBuffer.toString("base64");

  let transformationOptions = {
    transformation: [
      { gravity: "face", width: 400, height: 400, crop: "thumb" },
    ],
    folder: "Mern-ecommerce/Users",
  };

  const result = await cloudinary.uploader.upload(
    `data:image/jpeg;base64,${fileStr}`,
    transformationOptions
  );

  if (!result)
    throw new CustomError(400, false, "Image not Uploaded! Try Again");

  const url = result.secure_url;
  return url;
};

module.exports=imageUploadUser