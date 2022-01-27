const body = document.querySelector('body');
const container = document.querySelector('.container');

const containerSize = 500;
container.style.width= `${containerSize}px`;
container.style.height = `${containerSize}px`;
container.style.border = "medium solid black";
let gridDim =16;

function createGrid() {
    for (let i = 0; i < (gridDim**2); i++ ) {
        const div = document.createElement('div');
        div.style.height = `${containerSize/gridDim}px`;
        div.style.width =  `${containerSize/gridDim}px`;
        //div.style.margin = `${sizeProportion}%`;
        //div.style.border ="thin solid green";
        container.appendChild(div);
    
    }
}
createGrid();

function hover() {
    const divs = document.querySelectorAll('.container div');
    divs.forEach((d) => {
        d.addEventListener('mouseover', function() {
        d.style.backgroundColor = "#"+ Math.floor(Math.random()*16777215).toString(16);
        })
    })
}
hover()
const button = document.createElement('button')
button.innerText = "Clear";
body.insertBefore(button,container);
button.addEventListener('click', () => {
    container.innerHTML=''    
    gridDim = Number(prompt("Enter grid dimension"));
    createGrid();
    hover();
})