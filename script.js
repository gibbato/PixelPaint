let gridSize = 24;
const container = document.querySelector('.grid-container');
let bgColor = 'white';
let ink = '#000000';
let isDrawing = false;

container.style.backgroundColor = bgColor;

// Create Grid
function createGrid() {
    container.innerHTML = ''; // Clear the container before creating a new grid
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.setAttribute('draggable', 'false');
        square.style.backgroundColor = bgColor;
        container.appendChild(square);

        // Event listeners for drawing
        square.addEventListener('mousedown', () => {
            isDrawing = true;
            square.style.backgroundColor = ink;
        });
        square.addEventListener('mouseover', () => {
            if (isDrawing) square.style.backgroundColor = ink;
        });
        square.addEventListener('mouseup', () => {
            isDrawing = false;
        });
    }
}

// Event listeners for drawing
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

createGrid();

// Pen color picker logic
const colorPicker = document.querySelector('#color-select');
colorPicker.addEventListener('input', (e) => {
    ink = e.target.value;
});

// Background color picker logic
const bgColorPicker = document.querySelector('#bg-color-select');
bgColorPicker.addEventListener('input', (e) => {
    bgColor = e.target.value;
    document.querySelectorAll('.grid-item').forEach(square => {
        square.style.backgroundColor = bgColor;
    });
});

// Variable grid size logic
const rangeSlider = document.querySelector('#range-slider');
rangeSlider.addEventListener('input', (e) => {
    gridSize = e.target.value;
    document.getElementById('range-value').textContent = gridSize;
    createGrid();
});

// Clear grid logic
const clearGridBtn = document.querySelector('#clear-grid');
clearGridBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid-item').forEach(square => {
        square.style.backgroundColor = bgColor;
    });
});

// Toggle grid lines logic
const gridBtn = document.querySelector('#grid-btn');
gridBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid-item').forEach(square => {
        square.classList.toggle('border-hidden');
    });
});