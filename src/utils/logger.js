const winston = require("winston");
const envConfig = require("../config/env");

const { combine, timestamp, printf } = winston.format;
const myFormat = printf(({ level, timestamp, message, stack }) => {
  return `${timestamp} ${level}: ${message} \n ${stack}`;
});

const logConfiguration = {
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), myFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: "error",
      filename: envConfig.ERROR_LOG_PATH, // Error logs to the errors.log file
    }),
  ],
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
