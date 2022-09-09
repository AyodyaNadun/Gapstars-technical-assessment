# Gapstars-technical-assessment

## _Installation_

#### Install node modules
 :warning: It will take little amount of time to install **node_modules**!
```
npm install
```
#### Set up environment variables
- Create a .env file in project root and add values related to the src/config/env.js
```javascript
  1. BASE_URL: process.env.BASE_URL,
  2. DOWNLOAD_IMAGE_PATH: process.env.DOWNLOAD_IMAGE_PATH,
  3. ERROR_LOG_PATH: process.env.ERROR_LOG_PATH
```
#### Run the code
- For the automatic restarting mood
```
npm run dev
```
- For the normal mood
```
npm run start
```

#### Output file locations
- For downloaded image : Location in "DOWNLOAD_IMAGE_PATH" in .env
- For error logs : Location in "ERROR_LOG_PATH" in .env
