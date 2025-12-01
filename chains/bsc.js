import { sendTx } from "./utils.js";

async function main(){
  console.log("Running on BSC...");
  await sendTx("bsc");
}

main();
