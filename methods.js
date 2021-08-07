//create div inside div

/* This For-Loop creates a 16 X 16 board*/ 
const container = document.querySelector('#container');
for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.className = 'grid';
    divs.id = 'grid' + i;  // assign each grid with an id. This will become handy later on.
    container.appendChild(divs); // appending all the divs to the container 
    divs.addEventListener('mouseover', Draw); // i don't why having this line in the for-loop will make it draw
}

/* This function changes the color of the grids */
function Draw(e) {
    
      Object.assign(e.target.style, {
        backgroundColor : '#FF0000',
      });
}

/* This function clears all the grids one by one*/
function clearGrid(e) {
    for (let i = 0; i< 256; i++) {
        document.getElementById('grid' + i).style.background = '';
    }
}

/* These two lines are for the button Reset on the HTML page */
const btnClear = document.querySelector('#reset');
btnClear.onclick = () => clearGrid();




// /*a <p> with red text that says “Hey I’m red!” */
// const red_p = document.createElement('p');
// red_p.textContent = "Hey I'm red!";
// red_p.style.cssText = "color: red";
// container.appendChild(red_p);

// /*an <h3> with blue text that says “I’m a blue h3!”*/
// const blue_h3 = document.createElement('h3');
// blue_h3.textContent = "I am blue h3";
// blue_h3.style.cssText = "color: blue";
// container.appendChild(blue_h3);

// /* a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.*/

// const lastDiv = document.createElement('div');
// lastDiv.id = 'boarder';
// lastDiv.style.border = "thin solid #000000";
// lastDiv.style.backgroundColor = 'pink';

// const h1 = document.createElement('h1');
// const p_X = document.createElement('p');
// h1.textContent = 'I am in a div!';
// p_X.textContent = 'Me Too';
// lastDiv.appendChild(h1);
// lastDiv.appendChild(p_X);

// container.appendChild(lastDiv);