const rangeElem = document.getElementById('rangeElem');
const counter = document.getElementById('counter');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const cross = document.querySelector('.cross');

document.getElementById("rangeElem").addEventListener("change", function() {
  counter.textContent = this.value + "%"
  console.log(this.value);
});


burger.addEventListener('click', ()=>{
  document.body.classList.add('overflow-hidden');
  menu.classList.toggle('active');
});

cross.addEventListener('click', ()=>{
  menu.classList.remove('active');
  document.body.classList.remove('overflow-hidden')
})
