const winston = require("winston"); // Import winston as logger package.
const envConfig = require("../config/env"); // Import values form env.js.

const { combine, timestamp, printf } = winston.format; // Destructuring.
const myFormat = printf(({ level, timestamp, message, stack }) => {
  // Define error message format.
  return `${timestamp} ${level}: ${message} \n ${stack}`;
});

const logConfiguration = {
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), myFormat), // Combine with timestamp.
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: "error",
      filename: envConfig.ERROR_LOG_PATH, // Error logs to the errors.log file.
    }),
  ],
};

const logger = winston.createLogger(logConfiguration); // create the error log.

module.exports = logger; // Export the function.
