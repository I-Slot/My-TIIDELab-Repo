// const nemo = ["nemo"];
// let t0 = performance.now();
// console.log(t0);
// function findNemo(arrays) {
//   for (let i = 0; i < arrays.length; i++) {
//     if (arrays[i] === "nemo") {
//       console.log("Nemo is found.");
//     }
//   }
//   let t1 = performance.now();
//   console.log(t1);
//   console.log(`call to find nemo ${t1 - t0}`);
// }
// findNemo(nemo);

alert("connected");

const arr = ["isamil"];

let time1 = performance.now();
function arrTT() {
  for (let i = 0; i < arr.length; i++) {
    console.log();
  }

  let time2 = performance.now();

  console.log(`our time complexity is ${time2 - time1}`);
}

arrTT();
