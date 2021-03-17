(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-maps-open]'),
    closeModalBtn: document.querySelector('[data-modal-maps-close]'),
    modal: document.querySelector('[data-modal-maps]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('is-hidden');
  }
})();
