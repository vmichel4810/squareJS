
let ok = document.querySelector("button");
let select = document.querySelector("#grid-select");
let containers = document.querySelectorAll(".container");
let grid = document.getElementById("grid-select");
let colorSelect = document.getElementById('color-select');
let container2 = document.querySelector(".container2");

const colorArray = ["yellow", "orange", "pink", "magenta", "grey", "purple", "brown", "green", "blue", "red"]

for (let index = 1; index <= 30; index++) {
    let option1 = document.createElement("option");
    option1.innerHTML = index + "x" + index;
    option1.value = index;
    grid.appendChild(option1);


}

colorArray.forEach(element => {
    let option2 = document.createElement("option");
    let optionText = element.charAt(0).toUpperCase() + element.slice(1);
    option2.innerHTML = optionText;
    option2.value = element;
    colorSelect.appendChild(option2);
    
});

ok.addEventListener('click', () => {
    let value = select.value;
    containers.forEach(container => {

        container.innerHTML = "";
        for (let index = 0; index < (value * value); index++) {

            let square = document.createElement("div");

            if(container.classList.contains('container2')){
                square.addEventListener('click', (e) => {
                    e = e.target;
                    e.classList.add("backgroundColorNone");
                })
            } else {
                square.addEventListener('click', (e) => {
                    alert("vodka1")
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





