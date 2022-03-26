const contents = document.querySelector('.contents');
const gallery = document.querySelector('.howToView .buttons .galleryView');
const list = document.querySelector('.howToView .buttons .listView');

gallery.addEventListener('click', ()=>{
    contents.classList.add('galleryOnly');
    contents.classList.remove('listOnly');
});

list.addEventListener('click', ()=>{
    contents.classList.add('listOnly');
    contents.classList.remove('galleryOnly');
})