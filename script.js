let ok = document.querySelector("button");
let select = document.querySelector("#grid-select");
let containers = document.querySelectorAll(".container");
let grid = document.getElementById("grid-select");
let colorSelect = document.getElementById('color-select');
let container2 = document.querySelector(".container2");

const imageBgArray = ["https://images.unsplash.com/photo-1631248622995-dcda25242eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", "https://images.unsplash.com/photo-1631261177942-ccc23fd24f8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80", "https://images.unsplash.com/photo-1631162004589-f4f3cd356bc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"];
const colorArray = ["yellow", "orange", "pink", "magenta", "grey", "purple", "brown", "green", "blue", "red"]


for (let index = 1; index <= 30; index++) {
    let optionNumb = document.createElement("option");
    optionNumb.innerHTML = index + "x" + index;
    optionNumb.value = index;
    grid.appendChild(optionNumb);
    
    
}

colorArray.forEach(element => {
    let optionColor = document.createElement("option");
    let optionText = element.charAt(0).toUpperCase() + element.slice(1);
    optionColor.innerHTML = optionText;
    optionColor.value = element;
    colorSelect.appendChild(optionColor);
    
});

ok.addEventListener('click', () => {
    let math = Math.floor(Math.random()*3);
    let img = imageBgArray[math];

    let value = select.value;
    containers.forEach(container => {
        
        container.innerHTML = "";
        container2.style.backgroundImage = "url("+ img + ")";


        for (let index = 0; index < (value * value); index++) {

            let square = document.createElement("div");
            if(container.classList.contains('container2')){
                
                square.addEventListener('click', (e) => {
                    e = e.target;                    
                    e.classList.add("backgroundColorNone");
                })
            } else {
                square.addEventListener('click', (e) => {
                    e = e.target;
                    e.style.background = colorSelect.value;
                })
            }

            square.classList.toggle("square");
            square.style.width = "calc(100%/" + value + ")";
            square.style.height = "calc(100%" + value + ")";

            if ((index + 1) % value === 0) {
                square.classList.toggle('xth');
            }

            if ((index + 1) > (value * value) - value) {
                square.classList.toggle("last-x");
            }

            container.appendChild(square);
        }
    })
});





