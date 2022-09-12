const axios = require("axios").default; // Import axios and used as HTTP client.
const logger = require("../utils/logger"); // Import the logger function.

const getRandomCatService = async (url) => {
  return axios({
    method: "get",
    url: url,
    responseType: "arraybuffer", // Define responseType for images.
    headers: {
      "Content-Type": "image/png", // Define content-type for images.
    },
  })
    .then((res) => {
      return res; // Return the response details of random image.
    })
    .catch((err) => {
      logger.error("getRandomCatService ERROR - ", err); // Catch and log any error.
      return;
    });
};

module.exports = getRandomCatService; // Export the function.
