import path from "path";

const up = (workingDirectory) => {
  let currentDirectory;
  const parentDirectory = path.dirname(workingDirectory);

  if (currentDirectory === parentDirectory) {
    currentDirectory = workingDirectory;
  } else {
    currentDirectory = parentDirectory;
  }
  console.log(`You are currently in ${currentDirectory}`);
  return currentDirectory;
};

export { up };
