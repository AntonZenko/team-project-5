(() => {
    const refs = {
      openModalMenuBtn: document.querySelector('[data-modalMenu-open]'),
      closeModalMenuBtn: document.querySelector('[data-modalMenu-close]'),
      modalMenu: document.querySelector('[data-modalMenu]'),
    };
  
    refs.openModalMenuBtn.addEventListener('click', toggleModalMenu);
    refs.closeModalMenuBtn.addEventListener('click', toggleModalMenu);
  
    function toggleModalMenu() {
      document.body.classList.toggle("modalMenu-open");
      refs.modalMenu.classList.toggle('is-hidden');
    }
  })();