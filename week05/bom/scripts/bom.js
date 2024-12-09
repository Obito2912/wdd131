const input = document.querySelector('#favchap');
const btn = document.querySelector('button');
const ulEl = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}


function displayList(item) {
    let liEl = document.createElement('li');
    let delBtn = document.createElement('button');

    if (input.value.trim() === '') {
        return input.focus();
    }

    liEl.textContent = item;
    delBtn.textContent = '❌';

    liEl.append(delBtn);
    ulEl.append(liEl);

    input.value = '';
    input.focus();
    delBtn.addEventListener('click', () => {
        deleteFromList(liEl, item);
    });
}

function addToList() {
    const chapter = input.value.trim();

    if (chapter !== '') {
        displayList(chapter)
        chaptersArray.push(chapter)
        setChapterList();
        input.value = '';
        input.focus();
    }
}

function deleteFromList(liEl, item) {
    liEl.remove();
    item.remove();
    deleteChapter();
    input.focus();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

btn.addEventListener('click', addToList);
