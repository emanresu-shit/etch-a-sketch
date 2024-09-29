const container = document.querySelector(".container");
let numberOfGrid = parseInt(prompt("Please enter the number of grid that you want b/n(1-100)"));

if(!(Number(numberOfGrid))){
    numberOfGrid = 16;
}

if(numberOfGrid > 100 || numberOfGrid < 1){
    numberOfGrid = 16;
}


let row, col;

let width = Number((760/numberOfGrid).toFixed(0));
const style = document.createElement('style');
style.innerHTML = `
    .grid-size {
        width: ${width}px; 
        height: ${width}px;
    }
`; //since width and height are same for square

document.head.appendChild(style);

// use nested loop to create the grid
for (let i = 1; i <= numberOfGrid; i++) {
    row = document.createElement("div");
    for (let j = 1; j <= numberOfGrid; j++) {
        col = document.createElement("div");
        row.appendChild(col)
        col.setAttribute("class", `col col-${j}`);
        col.classList.add('grid-size');
    }
    row.setAttribute("class", `row row-${i}`);
    container.appendChild(row);
}
container.setAttribute("class", "container");
container.setAttribute("style", "width:760px");

const cols = document.querySelectorAll(".col");

cols.forEach((col) => {
    let red, green, blue;
    col.addEventListener("mouseenter", ()=>{
        red = Math.floor(Math.random()*256);
        green = Math.floor(Math.random()*256);
        blue = Math.floor(Math.random()*256);
        col.setAttribute("style",  `background-color: rgb(${red},${green},${blue})`);
    });
});

// to-do: implement darkening effect other day