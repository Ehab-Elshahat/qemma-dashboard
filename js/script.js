// Login Page
let warningMsg = document.querySelector(".error-msg");
let closeMsg = document.querySelector(".close-icon");
let submitBtn = document.querySelector(".submit-btn");
let inputs = document.querySelectorAll(".input-box input");

let error = true;


// Show Warning Message
if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    if (error) {
      warningMsg.style.display = "flex";
    }
    inputs.forEach((input) => {
      let val = input.value;
      if (val == "") {
        input.nextElementSibling.style.opacity = 1;
      } else {
        input.nextElementSibling.style.opacity = 0;
      }
    });
  });
}


// Close Warning Message
if (closeMsg) {
  closeMsg.addEventListener("click", function () {
    warningMsg.style.display = "none";
  }); 
}       

// Show Inputs Error Message 

inputs.forEach(input => {
  input.addEventListener("blur", function(){
    let val = input.value
    if (val == "") {
      input.nextElementSibling.style.opacity= 1
    } else {
      input.nextElementSibling.style.opacity = 0;
    }
  })
});

// Aside Titles  image
let buttons = document.querySelectorAll(".accordion-button");
let normalIcon = document.querySelector(".accordion-icon-normal");
let activeIcon = document.querySelector(".accordion-icon-active");
buttons.forEach((btn) => {
btn.addEventListener("click", () => {
  btn.classList.toggle("active")
  if (btn.classList.contains("active")) {
btn.children[0].style.display = "none";
btn.children[1].style.display = "block";
    
  } else {
   btn.children[0].style.display = "block";
   btn.children[1].style.display = "none";
  }
})

});

// Toggle menu in mobile
let toggler = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");
let closeMenu = document.querySelector(".close");
let body = document.querySelector(".body");

toggler.addEventListener("click",()=> {
aside.classList.add("show")
body.classList.add("overlay");
})
closeMenu.addEventListener("click",()=>{
  aside.classList.remove("show");
  body.classList.remove("overlay");
})

// Tree Rols
let treeBtns = document.querySelectorAll(".tree-btn");
if(treeBtns){
  treeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      if (btn.classList.contains("open")) {
        btn.nextElementSibling.style.display = "block";
      } else {
        btn.nextElementSibling.style.display = "none";
      }
    });
  });
}

// Show Hide Password
let iconShowHid = document.querySelector(".show-hide");
let passInput = document.querySelector(".pass-input");

if (iconShowHid) {
  iconShowHid.addEventListener("click", () => {
    if (passInput.type === "password") {
      passInput.type = "text";
    } else {
      passInput.type = "password";
    }
  });
}


