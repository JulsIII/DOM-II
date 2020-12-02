// Your code goes here
//Selectors
const mainNavHeader = document.querySelector(".main-navigation");
const navContainer = document.querySelector(".nav-container");
const logoHeading = document.querySelector(".logo-heading");
const navMain = document.querySelector('nav');
const navLinks = document.querySelectorAll("a");

const homeContainer = document.querySelector(".home");
const introHeader = document.querySelector(".intro");
const contentSecA = document.querySelector(".content-section");
const contentSecB = document.querySelector(".inverse-content");
const contentSecC = document.querySelector(".content-destination");
const contentSecD = document.querySelector(".content-pick");

const siteFooter = document.querySelector(".footer");
const footerText = document.querySelectorAll("p");

//Events

//Reset Colors
//Keydown
document.addEventListener('keydown', function (event){
    if(event.key === "r"){
        logoHeading.style.color = '#000000';
        navLinks[0].style.color = '#000000';
        navLinks[1].style.color = '#000000';
        navLinks[2].style.color = '#000000';
        navLinks[3].style.color = '#000000';
        introHeader.style.color = '#000000';
        contentSecA.style.color = '#000000';
        contentSecB.style.color = '#000000';
        contentSecC.style.color = '#000000';
        contentSecD.style.color = '#000000';
        footerText[9].style.color = '#000000';
    }
});

//Keypress
document.addEventListener('keypress', function (event){
    if(event.key === "w"){
        logoHeading.style.color = '#ffffff';
        navLinks[0].style.color = '#ffffff';
        navLinks[1].style.color = '#ffffff';
        navLinks[2].style.color = '#ffffff';
        navLinks[3].style.color = '#ffffff';
        introHeader.style.color = '#ffffff';
        contentSecA.style.color = '#ffffff';
        contentSecB.style.color = '#ffffff';
        contentSecC.style.color = '#ffffff';
        contentSecD.style.color = '#ffffff';
        footerText[9].style.color = '#ffffff';
    }
});

//Wheel
document.addEventListener('wheel', function (event){
    logoHeading.style.color = '#ff0000';
    navLinks[0].style.color = '#ff0000';
    navLinks[1].style.color = '#ff0000';
    navLinks[2].style.color = '#ff0000';
    navLinks[3].style.color = '#ff0000';
    introHeader.style.color = '#ff0000';
    contentSecA.style.color = '#ff0000';
    contentSecB.style.color = '#ff0000';
    contentSecC.style.color = '#ff0000';
    contentSecD.style.color = '#ff0000';
    footerText[9].style.color = '#ff0000';
});

//DBLClick
document.addEventListener('dblclick', function (event){
    logoHeading.style.color = '#ff00ff';
    navLinks[0].style.color = '#ff00ff';
    navLinks[1].style.color = '#ff00ff';
    navLinks[2].style.color = '#ff00ff';
    navLinks[3].style.color = '#ff00ff';
    introHeader.style.color = '#ff00ff';
    contentSecA.style.color = '#ff00ff';
    contentSecB.style.color = '#ff00ff';
    contentSecC.style.color = '#ff00ff';
    contentSecD.style.color = '#ff00ff';
    footerText[9].style.color = '#ff00ff';
});

//Aux Click
document.addEventListener('auxclick', function (event){
    logoHeading.style.color = '#ffff00';
    navLinks[0].style.color = '#ffff00';
    navLinks[1].style.color = '#ffff00';
    navLinks[2].style.color = '#ffff00';
    navLinks[3].style.color = '#ffff00';
    introHeader.style.color = '#ffff00';
    contentSecA.style.color = '#ffff00';
    contentSecB.style.color = '#ffff00';
    contentSecC.style.color = '#ffff00';
    contentSecD.style.color = '#ffff00';
    footerText[9].style.color = '#ffff00';
});

//Mouse over, out and click
logoHeading.addEventListener("mouseover", function (event) {
    logoHeading.style.color = '#00ff00';
    //console.log('ASDF');
   });
logoHeading.addEventListener("mouseout", function (event) {
    logoHeading.style.color = '#0000ff';
    //console.log('ASDF');
   });
logoHeading.addEventListener("click", function (event) {
    logoHeading.style.color = 'cyan';
    //console.log('ASDF');
   });


navLinks[0].addEventListener("mouseover", function (event) {
    navLinks[0].style.color = '#00ff00';
    console.log('ASDF');
   });
navLinks[0].addEventListener("mouseout", function (event) {
    navLinks[0].style.color = '#0000ff';
    console.log('ASDF');
   });
navLinks[0].addEventListener("click", function (event) {
    navLinks[0].style.color = 'cyan';
    console.log('ASDF');
   });


navLinks[1].addEventListener("mouseover", function (event) {
    navLinks[1].style.color = '#00ff00';
    console.log('ASDF');
   });
navLinks[1].addEventListener("mouseout", function (event) {
    navLinks[1].style.color = '#0000ff';
    console.log('ASDF');
   });
navLinks[1].addEventListener("click", function (event) {
    navLinks[1].style.color = 'cyan';
    console.log('ASDF');
   });


navLinks[2].addEventListener("mouseover", function (event) {
    navLinks[2].style.color = '#00ff00';
    console.log('ASDF');
   });
navLinks[2].addEventListener("mouseout", function (event) {
    navLinks[2].style.color = '#0000ff';
    console.log('ASDF');
   });
navLinks[2].addEventListener("click", function (event) {
    navLinks[2].style.color = 'cyan';
    console.log('ASDF');
   });   

navLinks[3].addEventListener("mouseover", function (event) {
    navLinks[3].style.color = '#00ff00';
    console.log('ASDF');
   });
navLinks[3].addEventListener("mouseout", function (event) {
    navLinks[3].style.color = '#0000ff';
    console.log('ASDF');
   });
navLinks[3].addEventListener("click", function (event) {
    navLinks[3].style.color = 'cyan';
    console.log('ASDF');
   });

introHeader.addEventListener("mouseover", function (event) {
    introHeader.style.color = '#00ff00';
    console.log('ASDF');
   });
introHeader.addEventListener("mouseout", function (event) {
    introHeader.style.color = '#0000ff';
    console.log('ASDF');
   });
introHeader.addEventListener("click", function (event) {
    introHeader.style.color = 'cyan';
    console.log('ASDF');
   });


// introHeader.addEventListener("mouseover", function (event) {
//     introHeader.style.color = '#00ff00';
//     console.log('ASDF');
//    });
// introHeader.addEventListener("mouseout", function (event) {
//     introHeader.style.color = '#0000ff';
//     console.log('ASDF');
//    });


contentSecA.addEventListener("mouseover", function (event) {
    contentSecA.style.color = '#00ff00';
    console.log('ASDF');
   });
contentSecA.addEventListener("mouseout", function (event) {
    contentSecA.style.color = '#0000ff';
    console.log('ASDF');
   });
contentSecA.addEventListener("click", function (event) {
    contentSecA.style.color = 'cyan';
    console.log('ASDF');
   });


contentSecB.addEventListener("mouseover", function (event) {
    contentSecB.style.color = '#00ff00';
    console.log('ASDF');
   });
contentSecB.addEventListener("mouseout", function (event) {
    contentSecB.style.color = '#0000ff';
    console.log('ASDF');
   });
contentSecB.addEventListener("click", function (event) {
    contentSecB.style.color = 'cyan';
    console.log('ASDF');
   });

contentSecC.addEventListener("mouseover", function (event) {
    contentSecC.style.color = '#00ff00';
    console.log('ASDF');
   });
contentSecC.addEventListener("mouseout", function (event) {
    contentSecC.style.color = '#0000ff';
    console.log('ASDF');
   });
contentSecC.addEventListener("click", function (event) {
    contentSecC.style.color = 'cyan';
    console.log('ASDF');
   });

contentSecD.addEventListener("mouseover", function (event) {
    contentSecD.style.color = '#00ff00';
    console.log('ASDF');
   });
contentSecD.addEventListener("mouseout", function (event) {
    contentSecD.style.color = '#0000ff';
    console.log('ASDF');
   });
contentSecD.addEventListener("click", function (event) {
    contentSecD.style.color = 'cyan';
    console.log('ASDF');
   });

footerText[9].addEventListener("mouseover", function (event) {
    footerText[9].style.color = '#00ff00';
    console.log('ASDFAAAAA');
   });
footerText[9].addEventListener("mouseout", function (event) {
    footerText[9].style.color = '#0000ff';
    console.log('ASDFAAAA');
   });
footerText[9].addEventListener("click", function (event) {
    footerText[9].style.color = 'cyan';
    console.log('ASDFAAAA');
   });





//     //if (event.target === launchButton) {
//     } //else {
//     //}
// p {
//     animation-duration: 3s;
//     animation-name: slidein;
//   }
  
//   @keyframes slidein {
//     from {
//       margin-left: 100%;
//       width: 300%; 
//     }