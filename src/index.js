import readline from "readline";
import os from "os";
import { up } from "./up.js";
import { output } from "./ls.js";
import { cdr } from "./cd.js";
import { createFile } from "./add.js";

let workingDirectory = os.homedir();

const launchFileManager = async () => {
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const username = process.argv
      .find((a) => a.startsWith("--username="))
      .split("=")
      .pop();
    console.log(`Welcome to the File Manager, ${username}!`);
    console.log(`You are currently in ${workingDirectory}`);

    rl.on("line", async (line) => {
      const [command, ...args] = line.trim().split(" ");

      switch (command) {
        case "up":
          workingDirectory = up(workingDirectory);
          break;
        case "ls":
          await output(workingDirectory);
          break;
        case "cd":
          workingDirectory = await cdr(args[0], workingDirectory);
          break;
        case "add":
          await createFile(args[0], workingDirectory);
          break;
        default:
          console.log("Invalid input");
          break;
      }
    });

    rl.on("close", () => {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      process.exit(0);
    });
  } catch (err) {
    console.log("Operation failed");
  }
};

await launchFileManager();
