require("dotenv").config();

const envConfig = {
  BASE_URL: process.env.BASE_URL,
  DOWNLOAD_IMAGE_PATH: process.env.DOWNLOAD_IMAGE_PATH,
  ERROR_LOG_PATH: process.env.ERROR_LOG_PATH,
};

module.exports = envConfig;
