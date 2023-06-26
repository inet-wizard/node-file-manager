import fs from "fs";
import path from "path";

const createFile = (fileName, workingDirectory) => {
  const filePath = path.resolve(workingDirectory, fileName);
  try {
    fs.createWriteStream(filePath);
    console.log(`\nFile ${filePath} has been created`);
    console.log(`\nYou are currently in ${workingDirectory}`);
  } catch (err) {
    console.log(`\nOperation failed`);
  }
};
export { createFile };
