const container = document.querySelector('#container');

function generateGrid(){
    container.innerHTML = '';
    let size = 150;
    do {
        size = prompt("How big do you want the grid to be?");
    } while (size > 100 || size < 1);
    let boxSize = 900/parseInt(size);
    for (let z = 0; z < size; z++){
        const gridLine = document.createElement('div');
        for (let i = 0; i < size; i++){
            const gridElement = document.createElement('div');
            gridElement.classList.add("grid-style");
            gridElement.style['height'] = `${boxSize}px`;
            gridElement.style['width'] = `${boxSize}px`;
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            gridElement.addEventListener('mouseover', function(){this.style['background-color'] = `#${randomColor}`});
            gridLine.appendChild(gridElement);
        }
        container.append(gridLine);
    }
}

const button = document.querySelector('#size-choice');
button.addEventListener('click', generateGrid);
