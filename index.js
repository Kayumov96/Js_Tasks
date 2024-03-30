const button = document.getElementById("button");
const box = document.getElementById("result");

const color = document.getElementById("color");
const form = document.getElementById("form");
const width = document.getElementById("width");
const height = document.getElementById("height");

button.addEventListener("click", () => {
  // if (color.value === "") return alert("Please select a color");

  result.style = `
  background-color: ${color}.value;
  width: ${width.value}px;
  height: ${height.value}px;
  `;
  if (form.value === "square") {
    result?.style?.borderRadius = "0";
  } else if (form.value === "circle") {
    result?.style?.borderRadius = "50%";
  }
});
jvnkfjnvkjnv

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
