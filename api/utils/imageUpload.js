const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const imageUpload = async () => {
  if (!req.file) {
    return res.status(400).json({ error: "No image provided" });
  }

  const transformation = [{ width: 300, height: 300, crop: "crop" }];

  const result = await cloudinary.uploader.upload(req.file.buffer, {
    folder: "Mern-ecommerce/Products",
    transformation,
  });
  const url = result.secure_url;
  return url;
};

module.exports = imageUpload;
