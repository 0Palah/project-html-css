// =================================== MOBILE MENU
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

// =================================== MODAL WINDOW

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


// =================================== SLICK SLIDER 
$(document).ready(function () {
  $('.salat-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-next"><svg " viewBox="0 0 12 22"><path d="M11.2401 10.7284L11.2401 10.7284C11.2769 10.7635 11.3061 10.8056 11.3261 10.8523L11.7857 10.6553L11.3261 10.8523C11.3461 10.8989 11.3564 10.9492 11.3564 10.9999C11.3564 11.0507 11.3461 11.101 11.3261 11.1476L11.7857 11.3445L11.3261 11.1476C11.3061 11.1943 11.2769 11.2364 11.2401 11.2714L11.2401 11.2715L1.48736 20.564L1.48727 20.564C1.41753 20.6305 1.32487 20.6676 1.22852 20.6676C1.13374 20.6676 1.04253 20.6317 0.973195 20.5673L0.967806 20.5619L0.967921 20.5618L0.958644 20.5529C0.928655 20.5245 0.90477 20.4902 0.888449 20.4521C0.872129 20.4141 0.863712 20.3732 0.863712 20.3318C0.863712 20.2904 0.872128 20.2495 0.888449 20.2115C0.90477 20.1735 0.928653 20.1392 0.958644 20.1107L0.959092 20.1103L10.1431 11.3638L10.5232 11.0018L10.1432 10.6397L0.959166 1.88969L0.958645 1.88919C0.928654 1.8607 0.90477 1.8264 0.88845 1.78839C0.872129 1.75037 0.863713 1.70944 0.863713 1.66807C0.863713 1.6267 0.872129 1.58576 0.888449 1.54775C0.90477 1.50973 0.928654 1.47543 0.958645 1.44694L0.958758 1.44706L0.967809 1.43801L0.973205 1.43261C1.04254 1.36816 1.13374 1.33227 1.22852 1.33227C1.32487 1.33227 1.41753 1.36936 1.48727 1.43585L1.48736 1.43593L11.2401 10.7284Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-prev"><svg " viewBox="0 0 12 22"><path d="M0.759889 11.2716L0.75988 11.2716C0.723121 11.2365 0.693857 11.1944 0.673861 11.1477C0.653865 11.1011 0.643555 11.0508 0.643555 11.0001C0.643555 10.9493 0.653865 10.899 0.673861 10.8524C0.693857 10.8057 0.723122 10.7636 0.75988 10.7286L0.759889 10.7285L10.5126 1.43605L10.5127 1.43596C10.5825 1.36948 10.6751 1.33239 10.7715 1.33239C10.8663 1.33239 10.9575 1.36827 11.0268 1.43272L11.0322 1.43811L11.0321 1.43823L11.0414 1.44706C11.0713 1.47555 11.0952 1.50984 11.1116 1.54786C11.1279 1.58588 11.1363 1.62681 11.1363 1.66818C11.1363 1.70955 11.1279 1.75049 11.1116 1.7885C11.0952 1.82652 11.0713 1.86082 11.0414 1.88931L11.0409 1.88973L1.85691 10.6362L1.4768 10.9982L1.85683 11.3603L11.0408 20.1103L11.0414 20.1108C11.0713 20.1393 11.0952 20.1736 11.1116 20.2116C11.1279 20.2496 11.1363 20.2906 11.1363 20.3319C11.1363 20.3733 11.1279 20.4142 11.1116 20.4523C11.0952 20.4903 11.0713 20.5246 11.0414 20.5531L11.0412 20.5529L11.0322 20.562L11.0268 20.5674C10.9575 20.6318 10.8663 20.6677 10.7715 20.6677C10.6751 20.6677 10.5825 20.6306 10.5127 20.5642L10.5126 20.5641L0.759889 11.2716Z"/></svg></button>',
  
  });
});