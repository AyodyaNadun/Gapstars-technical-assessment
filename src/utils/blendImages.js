const { writeFile } = require("fs"); // Import file wtite function from fs package.
const { join } = require("path"); // Import join method for URLs from path pakcage.
const blend = require("@mapbox/blend"); // Import blend function from @mapbox/blend package.

const getRandomCat = require("../controllers/getRandomCat.controller"); // Import random cat controller function.
const envConfig = require("../config/env"); // Import values form env.js.
const { uploadMessages, errorMessages } = require("./responseMessagesEN"); // Import custom response messages.
const logger = require("./logger"); // import the logger function.

const blendImage = async (reqData) => {
  try {
    const [greeting, who, width, height, color, size, imageFormat] = reqData; // Destructure the arguments array.

    const baseURL = envConfig.BASE_URL;

    const firstReq = `${baseURL}/${greeting}?width=${width}&height=${height}&color${color}&s=${size}`; // Define two seperate URLs using arguments.
    const secondReq = `${baseURL}/${who}?width=${width}&height=${height}&color${color}&s=${size}`;

    const [firstImage, secondImage] = await Promise.all([
      getRandomCat(firstReq),
      getRandomCat(secondReq),
    ]); // Use Promise.all() for call more than one promise functions.

    blend(
      [
        { buffer: new Buffer.from(firstImage.data, "binary"), x: 0, y: 0 }, // Create new two buffers with random image data.
        {
          buffer: new Buffer.from(secondImage.data, "binary"),
          x: width,
          y: 0,
        },
      ],
      { width: width * 2, height: height, format: imageFormat },
      (err, data) => {
        const fileOut = join(process.cwd(), envConfig.DOWNLOAD_IMAGE_PATH); // Configure saved file path(in .env).

        writeFile(fileOut, data, "binary", (err) => {
          // Save file to the destination.
          if (err) {
            logger.error(errorMessages.UPLOAD_ERROR, err); // If any error, log the error.
            return;
          }

          console.log(uploadMessages.FILE_SAVED); // If success, return the success message.
          return;
        });
      }
    );
  } catch (err) {
    logger.error(errorMessages.BLEND_ERROR, err); // Catch and log any error.
    return;
  }
};

module.exports = blendImage; // Export the function.
