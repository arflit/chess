let songList = document.querySelector('.song-list');
let openListButton = document.querySelector('.song-list-open-button');
let closeListButton = document.querySelector('.song-list-close-button');

function openList () {
songList.classList.remove('hide');
openListButton.classList.add('hide');
}

function closeList () {
songList.classList.add('hide');
openListButton.classList.remove('hide');
}

openListButton.addEventListener('click', openList);
closeListButton.addEventListener('click', closeList);