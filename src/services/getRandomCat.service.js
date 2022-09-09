const axios = require("axios").default;
const logger = require("../utils/logger");

const getRandomCatService = async (url) => {
  return axios({
    method: "get",
    url: url,
    responseType: "arraybuffer",
    headers: {
      "Content-Type": "image/png",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      logger.error("getRandomCatService ERROR - ", err);
      return;
    });
};

module.exports = getRandomCatService;
