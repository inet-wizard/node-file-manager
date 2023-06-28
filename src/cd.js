import path from "path";
import { access } from "node:fs/promises";

const cdr = async (dirName, workingDirectory) => {
  const currentDirectory = path.resolve(workingDirectory, dirName);
  try {
    await access(currentDirectory, fs.constants.F_OK);
    console.log(`You are currently in ${currentDirectory}`);
    return currentDirectory;
  } catch (error) {
    console.log(
      `Operation failed: sorry, there is no this directory ${currentDirectory}`
    );
    console.log(`You are currently in ${workingDirectory}`);
    return workingDirectory;
  }
};

export { cdr };
