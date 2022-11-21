const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

function addGoal() {
    const enteredValue = input.value;
    const listElement = document.createElement('li');
    listElement.textContent = enteredValue;
    list.appendChild(listElement);
    input.value = '';
}

button.addEventListener('click', addGoal);