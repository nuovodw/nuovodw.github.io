const openModalWindow = document.querySelectorAll('.show-modal'); //create NodeList
const closeModalWindow = document.querySelector('.close-modal');
const theModalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeWindow = function () {
  theModalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openWindow = function () {
  theModalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//1b. Click the buttons

for (i = 0; i < openModalWindow.length; i++) {
  openModalWindow[i].addEventListener('click', openWindow);
}

//2. Close modal window by a) clicking x b)cliking overlay
closeModalWindow.addEventListener('click', closeWindow);
overlay.addEventListener('click', closeWindow);

// c) by pressing the 'escape' key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !theModalWindow.classList.contains('hidden')) {
    closeWindow();
  }
});
