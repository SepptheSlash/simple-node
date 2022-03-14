const crazy = process.env.CRAZY;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock like ${crazy}!");
    await sleep(5000);
  }
}

main();
