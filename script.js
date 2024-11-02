const input = document.querySelector('input');
const ul = document.createElement('ul');
document.body.appendChild(ul);
function useData() {
    if (input.value === "") { return; }
    const li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
}


function changeText(button, text) {  
    button.textContent = text;  
}  
function changeColor(button) {  
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);  
    button.style.color = randomColor;  
}  


const ul3 = document.querySelector('.ul3');
function newOld() {
    const li = document.createElement('li');
    li.innerHTML = "Новый";
    li.addEventListener("click", function(e) {  
        getOlder(e.currentTarget);
    }); 
    ul3.appendChild(li);
}
function getOlder(li) {
    if (li.innerHTML === "Очень старый") {  
        li.remove(); 
    } else if (li.innerHTML === "Старый") {  
        li.innerHTML = "Очень старый";   
    } else if (li.innerHTML === "Новый") {  
        li.innerHTML = "Старый";   
    }  
}


const circle = document.getElementById('circle');  

let targetX = 0;  
let targetY = 0;  
let currentX = 0;  
let currentY = 0;  
const duration = 2000; 
 
circle.style.transform = `translate(${currentX}px, ${currentY}px)`;  

document.addEventListener('click', (event) => {  
    targetX = event.clientX - circle.offsetWidth / 2; // центр круга  
    targetY = event.clientY - circle.offsetHeight / 2;  

    const transform = getComputedStyle(circle).transform;
    if (transform !== 'none') {
        const matrix = transform.split('(')[1].split(')')[0].split(', ');
        currentX = parseFloat(matrix[4]); 
        currentY = parseFloat(matrix[5]);
    } else {
        currentX = 0;
        currentY = 0;
    }

    animate();  
});  

function animate() {  
    const startTime = performance.now();  

    function update(time) {  
        const elapsedTime = time - startTime;  
        const progress = Math.min(elapsedTime / duration, 1);  

        const x = currentX + (targetX - currentX) * progress;  
        const y = currentY + (targetY - currentY) * progress;  

        circle.style.transform = `translate(${x}px, ${y}px)`;  

        if (progress < 1) {  
            requestAnimationFrame(update);  
        }  
    }  

    requestAnimationFrame(update);  
}  

