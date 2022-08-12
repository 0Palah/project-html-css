'use strict';

const refs = {
  burgerBtn: document.querySelector('[data-mobile-open]'),
  mobileMenu: document.querySelector('[data-mobile-menu]'),
};

const closeMobileMenu = () => {
  refs.mobileMenu.classList.remove('is-open');
};

const nearMobileMenuClick = event => {
  if (
    event.target.closest('[data-mobile-open]') ||
    event.target.closest('[data-mobile-menu]')
  ) {
    return;
  }

  closeMobileMenu();
  document.removeEventListener('click', nearMobileMenuClick);
};

refs.burgerBtn.addEventListener('click', event => {
  event.stopPropagation();

  refs.mobileMenu.classList.toggle('is-open');

  if (refs.mobileMenu.classList.contains('is-open')) {
    document.addEventListener('click', nearMobileMenuClick);
  } else {
    document.removeEventListener('click', nearMobileMenuClick);
  }
});

refs.mobileMenu.addEventListener('click', event => {
  if (event.target.nodeName === 'A') {
    closeMobileMenu();

    if (!refs.mobileMenu.classList.contains('is-open')) {
      document.removeEventListener('click', nearMobileMenuClick);
    }
  }
});

// modal

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
