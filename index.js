// const button = document.getElementById("button");
// const box = document.getElementById("box");

// const color = document.getElementById("color");
// const form = document.getElementById("form");
// const width = document.getElementById("width");
// const height = document.getElementById("height");

// button.addEventListener("click", () => {
//   if (color.value === "") return alert("Please select a color");

//   box.style = `
//   background-color: ${color}.value;
//   width: ${width.value};
//   border-radius: ${form.value === "circle" ? "50%" : "0"}
//   height: ${height.value};
//   `;
// });
// function createDiv() {
//   const color = document.getElementById("color").value;
//   const width = document.getElementById("width").value;
//   const height = document.getElementById("height").value;

//   const div = document.createElement("div");
//   div.style.backgroundColor = color;
//   div.style.width = width + "px";
//   div.style.height = height + "px";

//   document.getElementById("result").appendChild(div);
// }

// --------------------------------------------------------
// ----------

let arr = [1, 2, 5, 3, 1];

function testPeaks(arr) {
  let peak = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > peak) {
      peak.push += i;
    }
  }
  console.log(peak, peak[0]);
}
console.log(testPeaks(arr));
