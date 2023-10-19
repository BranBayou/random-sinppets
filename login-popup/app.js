const body = document.querySelector("body");
const modal = document.querySelector(".login-modal");
const loginBtn = document.querySelector(".login");

loginBtn.addEventListener('click', () => {
  modal.showModal();
});

