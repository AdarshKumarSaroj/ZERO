const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function updateClock() {
    let currentTime = new Date();
    let newHours = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    let newMinutes = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    let newSeconds = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    animateDigitChange(hrs, newHours);
    animateDigitChange(min, newMinutes);
    animateDigitChange(sec, newSeconds);
}

function animateDigitChange(element, newValue) {
    if (element.innerText !== newValue) {
        element.classList.remove("change");
        void element.offsetWidth; // Trigger reflow to restart the animation
        element.classList.add("change");
        element.innerText = newValue;
    }
}

setInterval(updateClock, 1000);
