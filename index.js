const argv = require("minimist")(process.argv.slice(2));

const blendImages = require("./src/utils/blendImages");
const { url_input } = require("./public/input");

const {
  greeting_value,
  who_value,
  width_value,
  height_value,
  color_value,
  size_value,
  imageFormat_value,
} = url_input;

const {
  greeting = greeting_value,
  who = who_value,
  width = width_value,
  height = height_value,
  color = color_value,
  size = size_value,
  imageFormat = imageFormat_value,
} = argv;

const reqData = [greeting, who, width, height, color, size, imageFormat];

blendImages(reqData);
