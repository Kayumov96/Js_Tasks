const button = document.getElementById("button");
const box = document.getElementById("box");

const color = document.getElementById("color");
const form = document.getElementById("form");
const width = document.getElementById("width");
const height = document.getElementById("height");

button.addEventListener("click", () => {
  if (color.value === "") return alert("Please select a color");

  box.style = `
  background-color: ${color.value};
  width: ${width.value};
  border-radius: ${form.value === "circle" ? "50%" : "0"}
  height: ${height.value};
  `;
});
