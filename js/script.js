const rangeElem = document.getElementById('rangeElem');
const counter = document.getElementById('counter')

document.getElementById("rangeElem").addEventListener("change", function() {
  counter.textContent = this.value + "%"
  console.log(this.value);
});

