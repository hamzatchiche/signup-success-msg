let images = document.querySelector(".imgs");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = document.getElementById("email");
let form = document.querySelector(".form");
let msg = document.querySelector(".err-msg");
let success = document.querySelector(".success-msg");
let container = document.querySelector(".container");
let ems = document.querySelector(".e-msg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value.trim() === "" || !emailPattern.test(email.value)) {
    msg.style.display = "block";
    email.style.backgroundColor = "hsl(4, 87.20%, 90.80%)";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
  } else {
    container.style.display = "none";
    success.style.display = "block";
    gsap.from(".success-msg", {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });
    ems.innerText = email.value;
  }
});
function fermer() {
  location.reload();
  
}
