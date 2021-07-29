'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log('Hello');

const header1 = document.querySelector('.header');

const optionsObj = { root: null, threshold: 0 };
const optionsFn = entries => {
  console.log(entries);
  const [entry] = entries;
  console.log(entry);
  console.log(entry.isIntersecting);
  console.log(entries.isIntersecting);
};

const observeTest = new IntersectionObserver(optionsFn, optionsObj);

observeTest.observe(header1);
