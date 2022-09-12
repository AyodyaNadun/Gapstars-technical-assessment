const getRandomCatService = require("../services/getRandomCat.service"); // import the service function.
const logger = require("../utils/logger"); // import the logger function.

const getRandomCat = async (url) => {
  try {
    return getRandomCatService(url); // Call the service function.
  } catch (err) {
    logger.error("getRandomCat ERROR - ", err); // Catch and log any error.
    return;
  }
};

module.exports = getRandomCat; // Export the function.
