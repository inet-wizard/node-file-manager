import { EOL, cpus, homedir, userInfo, arch } from "os";

const getOperationInfo = (command, workingDirectory) => {
  try {
    switch (command) {
      case "--architecture":
        console.log(arch());
        break;
      case "--homedir":
        console.log(homedir());
        break;
      case "--EOL":
        console.log(EOL);
        break;
      case "--username":
        console.log(userInfo().username);
        break;
      case "--cpus":
        const numCPUs = cpus().length;
        console.log("SPUS number:", numCPUs);
        const spusInfo = [];
        cpus().forEach((cpu, index) => {
          const model = cpu.model;
          const speedMHz = cpu.speed;
          const speedGHz = (speedMHz / 1000).toFixed(2);
          spusInfo.push({
            CPU: index + 1,
            model,
            speedGHz,
          });
        });
        console.table(spusInfo);
        break;
      default:
        console.log("Invalid input");
        break;
    }
    console.log(`\nYou are currently in ${workingDirectory}`);
  } catch (err) {
    console.log("Operation failed");
  }
};
export { getOperationInfo };
