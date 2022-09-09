const { writeFile } = require("fs");
const { join } = require("path");
const blend = require("@mapbox/blend");

const getRandomCat = require("../controllers/getRandomCat.controller");
const envConfig = require("../config/env");
const { uploadMessages, errorMessages } = require("./responseMessagesEN");
const logger = require("./logger");

const blendImage = async (reqData) => {
  try {
    const [greeting, who, width, height, color, size, imageFormat] = reqData;

    const baseURL = envConfig.BASE_URL;

    const firstReq = `${baseURL}/${greeting}?width=${width}&height=${height}&color${color}&s=${size}`;
    const secondReq = `${baseURL}/${who}?width=${width}&height=${height}&color${color}&s=${size}`;

    const [firstImage, secondImage] = await Promise.all([
      getRandomCat(firstReq),
      getRandomCat(secondReq),
    ]);

    blend(
      [
        { buffer: new Buffer.from(firstImage.data, "binary"), x: 0, y: 0 },
        {
          buffer: new Buffer.from(secondImage.data, "binary"),
          x: width,
          y: 0,
        },
      ],
      { width: width * 2, height: height, format: imageFormat },
      (err, data) => {
        const fileOut = join(process.cwd(), envConfig.DOWNLOAD_IMAGE_PATH);

        writeFile(fileOut, data, "binary", (err) => {
          if (err) {
            logger.error(errorMessages.UPLOAD_ERROR, err);
            return;
          }

          console.log(uploadMessages.FILE_SAVED);
          return;
        });
      }
    );
  } catch (err) {
    logger.error(errorMessages.BLEND_ERROR, err);
    return;
  }
};

module.exports = blendImage;
