const input = document.querySelector('#favchap');
const btn = document.querySelector('button');
const ulEl = document.querySelector('#list');



function addToList() {

    const liEl = document.createElement('li');
    const delBtn = document.createElement('button');

    if (input.value.trim() === '') {
        return input.focus();
    }

    liEl.textContent = input.value;
    delBtn.textContent = '❌';

    liEl.append(delBtn);
    ulEl.append(liEl);

    input.value = '';
    input.focus();
    delBtn.addEventListener('click', () => deleteFromList(liEl));
}

function deleteFromList(liEl) {
    liEl.remove();
    input.focus();
}

btn.addEventListener('click', addToList);
