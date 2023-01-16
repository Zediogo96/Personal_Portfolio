 // circle follow mouse

// map and filter 

let circles;
function eraseCircles() {
  circles = Array.from(document.querySelectorAll('.circle'));
  circles
    .filter(circle => getComputedStyle(circle).opacity === '0')
    .map(circle => circle.remove());
  setTimeout(eraseCircles, 450);
}
eraseCircles();

var colors = ['#6B6361', '#876E58', '#C46F43']

export function animateCircles(event) {
    var circle = document.createElement("div");
    
    // this is to prevent the circle from being clickable
    circle.style.pointerEvents = "none";
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle); 

    // adds motion
    var scrollOffsetVertical = window.pageYOffset
    var scrollOffsetHorizontal = window.pageXOffset

    circle.style.left = event.clientX + scrollOffsetHorizontal + 'px';
    circle.style.top = event.clientY + scrollOffsetVertical + 'px';

    // randomize color
    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color;

    // adds animation
    circle.style.transition = "all 0.5s linear 0.1s";

    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "2px";
    circle.style.opacity = 0;
}


export function animateBackground(elem) {

    document.onmousemove = (e) => {
      elem.style.setProperty('--x', (-e.clientX / 50)  + "px");
      elem.style.setProperty('--y', (-e.clientY / 50) + "px");
    };
}