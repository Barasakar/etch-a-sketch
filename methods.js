//create div inside div

const container = document.querySelector('#container');
const divs = document.createElement('div');
divs.textContent = "this is the new div!!";
container.appendChild(divs);

const red_p = document.createElement('p');
red_p.textContent = "Hey I'm red!";
red_p.style.cssText = "color: red";
container.appendChild(red_p);