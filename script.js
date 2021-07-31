'use strict';

const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal')

// When we click on the cross of modal or outside of the modal, we want the hidden class back

const closeModal = function (element) {
  element.classList.add('hidden');
  overlay.classList.add('hidden');
}

const showModal = function (element) {
  // To remove the hidden class. The classList property returns the class name of an element
  // remove method will remove the class( or classes by putting commas) mentioned in ().
  // Remember we don't use dot before class name hidden as dot is only for selectors and here we are not selecting anything(like we did with querySelector method) but here we are just passing name of the class
  element.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// we use for loop for modals, btnsShowModal and btnCloseModals as the same corresponding classes are used thrice, so this for loop iterates for each modal, showModal and closeModal
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    showModal(modals[i])
  });
  btnCloseModal[i].addEventListener('click', function () {
    closeModal(modals[i])
  });
  overlay.addEventListener('click', function () {
    closeModal(modals[i])
  });
  document.addEventListener('keydown', function (e) {
    // to see which key is pressed on the console
    //console.log(e);
    // to look for a specific proerty we use its name, like
    //console.log(e.key);
    // to close the modal with esc key, when the modal is already open
    if (e.key === 'Escape' && !modals[i].classList.contains('hidden')) {
      closeModal(modals[i]);
    }
  });
};

// To show present day in HTML file

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = `Hope you are enjoying ${days[new Date().getDay()]}!! 😎`
document.querySelector('#today').innerHTML = today;




