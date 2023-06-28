import path from "path";
import { createReadStream } from "node:fs";

const printFileContent = (fileName, workingDirectory) => {
  const filePath = path.resolve(workingDirectory, fileName);
  const readableStream = createReadStream(filePath, { encoding: "utf-8" });
  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on("end", () => {
    console.log(`\nYou are currently in ${workingDirectory}`);
  });

  readableStream.on("error", (err) => {
    console.error("Operation failed");
  });
};
export { printFileContent };
