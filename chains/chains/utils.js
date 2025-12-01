export async function sendTx(chain) {
  console.log(`(dummy) Sending tx on ${chain}...`);
  await new Promise(res => setTimeout(res, 1000));
  console.log("Done.");
}
