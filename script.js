'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal')



// we use for loop for btnsShowModal as there are three modals, so this for loop iterates for each modal
for (let i = 0; i < btnsShowModal.length; i++) {

  btnsShowModal[i].addEventListener('click', function () {
    // To remove the hidden class. The classList property returns the class name of an element
    // remove method will remove the class( or classes by putting commas) mentioned in ().
    // Remember we don't use dot before class name hidden as dot is only for selectors and here we are not selecting anything(like we did with querySelector method) but here we are just passing name of the class
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
};

// When we click on the cross of modal or outside of the modal, we want the hidden class back

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);



