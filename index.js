const argv = require("minimist")(process.argv.slice(2)); // import the minimist package.

const blendImages = require("./src/utils/blendImages"); // import the blendImage function.
const { url_input } = require("./public/input"); // import custom URL inputs.

const {
  greeting_value,
  who_value,
  width_value,
  height_value,
  color_value,
  size_value,
  imageFormat_value,
} = url_input; // Destructuring.

const {
  greeting = greeting_value,
  who = who_value,
  width = width_value,
  height = height_value,
  color = color_value,
  size = size_value,
  imageFormat = imageFormat_value,
} = argv; // Optimize arguments using minimist module before send to the function.

const reqData = [greeting, who, width, height, color, size, imageFormat]; // Create parameter array.

blendImages(reqData); // Send parameter array as an argument and call the blendImage function.
