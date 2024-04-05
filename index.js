const button = document.getElementById("button");
const box = document.getElementById("box");

const color = document.getElementById("color");
const form = document.getElementById("form");
const width = document.getElementById("width");
const height = document.getElementById("height");
button.addEventListener("click", () => {
  console.log("Button clicked");
});
// document.getElementById("button").addEventListener("click", () => {
//   console.log("button clicked", color.value, form, width, height);
//   box.style=`
//   background-color: ${color}.value;
//   height: ${height}.value
//   `
// result.style = `
// background-color: ${color}.value;
// width: ${width.value}px;
// height: ${height.value}px;
// `;
// if (form.value === "square") {
//   result.style.borderRadius = "0";
// } else if (form.value === "circle") {
//   result?.style.borderRadius = "50%";
// }});

// --------------------------------------------------------
// ----------

// let arr = [1, 2, 5, 3, 1];

// function testPeaks(arr) {
//   let peak = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > peak) {
//       peak.push += i;
//     }
//   }
//   console.log(peak, peak[0]);
// }
// console.log(testPeaks(arr));
// -------------------
// var isPalindrome = function (x) {
//   let str = Math.abs(x).toString();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = str.length - 1; j--; ) {
//       if (str[i] === str[j]) {
//         return true;
//       }
//       return false;
//     }
//   }
// };
// console.log(isPalindrome(121));
// ------------------
// function romanToInt(roman) {
//   const romanValues = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;
//   let prevValue = 0;

//   for (let i = 0; i < roman.length; i++) {
//     const currentValue = romanValues[roman[i]];

//     if (currentValue > prevValue) {
//       total += currentValue - 2 * prevValue;
//     } else {
//       total += currentValue;
//     }

//     prevValue = currentValue;
//   }

//   return total;
// }
// console.log(romanToInt("X" + "II"));
