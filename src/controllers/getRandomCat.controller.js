const getRandomCatService = require("../services/getRandomCat.service");
const logger = require("../utils/logger");

const getRandomCat = async (url) => {
  try {
    return getRandomCatService(url);
  } catch (err) {
    logger.error("getRandomCat ERROR - ", err);
    return;
  }
};

module.exports = getRandomCat;
