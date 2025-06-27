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
gsap.from(".text",{
    opacity:0,
    stagger:0.4,
    duration:1.3,
    ease:"power.out",
    y:-40,
    delay:0.1,
})
gsap.from(".success div",{
    opacity:0,
    stagger:0.4,
    duration:1,
    ease:"power.out",
    x:-20,
    delay:0.6,
})
gsap.from("#email",{
    opacity:0,
    stagger:0.4,
    duration:1,
    ease:"power.out",
    scale:1.2,
    rotate:"-1rad",
    delay:0.8,
})
