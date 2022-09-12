require("dotenv").config(); // Import the package for read .env type files.

const envConfig = {
  BASE_URL: process.env.BASE_URL,
  DOWNLOAD_IMAGE_PATH: process.env.DOWNLOAD_IMAGE_PATH, // These configurations come from .env file in project root.
  ERROR_LOG_PATH: process.env.ERROR_LOG_PATH,
};

module.exports = envConfig; // Export the object.
