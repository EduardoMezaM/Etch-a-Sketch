const container = document.querySelector('.container');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submitBtn');
const blackBtn = document.querySelector('.blackBtn');
const randomBtn = document.querySelector('.randomBtn'); 
const eraserBtn = document.querySelector('.eraserBtn'); 
const clearBoardBtn = document.querySelector('.resetBtn');

let currentColor = 'black'; 

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(size) {
    container.innerHTML = ''; 
    const containerSize = 400; 
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = currentColor;
        });

    container.appendChild(square);
  }
}

submitBtn.addEventListener('click', () => {
    const newSize = parseInt(input.value);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    createGrid(newSize);
});

createGrid(16);

blackBtn.addEventListener('click', () => {
    currentColor = 'black'; 
});

randomBtn.addEventListener('click', () => {
    currentColor = getRandomColor(); 
});

eraserBtn.addEventListener('click', () => {
    currentColor = 'white'; 
});

clearBoardBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});