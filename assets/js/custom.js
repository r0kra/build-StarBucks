const burger = document.querySelector('#btn-burger');
  const mobileContainer = document.querySelector('#mobile-container');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileContainer.classList.toggle('show');
  });

  // modal

  const btnShowModal = document.querySelector('[data-triger-modal="process"]');
  const btnCloseModal = document.querySelector('[data-modal="close"]');
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");

  function showModal(event){
    event.preventDefault();
    overlay.classList.add("show");
    body.classList.add("overflow-hidden");
    modal.classList.add("show");
  }

  function closeModal(event){
    event.preventDefault();
    modal.classList.remove("show");
    overlay.classList.remove("show");
    body.classList.remove("overflow-hidden");
  }

  btnShowModal.addEventListener("click", showModal);
  btnCloseModal.addEventListener("click", closeModal);
