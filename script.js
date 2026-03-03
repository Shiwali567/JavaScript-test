// // SECTION B
// // QUESTION 6
console.log(a);
var a = 5; // undefine

// QUESTION 7
// let x = 10;

function test() {
  console.log(x);
  let x = 20; // error
}
test();

// QUESTION 8
setTimeout(() => {
  console.log("A");
}, 0);
console.log("B");

// // SECTION C
// // QUESTION 9

function largest() {
  let arr = [10, 5, 20, 8];
  let largest = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log("largest number", largest);
}
largest(largest);

//  QUESTION 9
const arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

//11
function getData() {
  return new Promise((resolve) => {
    resolve(100);
  });
}
async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();
