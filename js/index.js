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

//Contextmenu
document.addEventListener('contextmenu', function (event){
    logoHeading.style.color = 'orange';
    navLinks[0].style.color = 'orange';
    navLinks[1].style.color = 'orange';
    navLinks[2].style.color = 'orange';
    navLinks[3].style.color = 'orange';
    introHeader.style.color = 'orange';
    contentSecA.style.color = 'orange';
    contentSecB.style.color = 'orange';
    contentSecC.style.color = 'orange';
    contentSecD.style.color = 'orange';
    footerText[9].style.color = 'orange';
});

//Scroll
document.addEventListener('scroll', function (event){
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

//Wheel 
document.addEventListener('wheel', function (event){
    logoHeading.style.color = '#fff000';
    navLinks[0].style.color = '#fff000';
    navLinks[1].style.color = '#fff000';
    navLinks[2].style.color = '#fff000';
    navLinks[3].style.color = '#fff000';
    introHeader.style.color = '#fff000';
    contentSecA.style.color = '#fff000';
    contentSecB.style.color = '#fff000';
    contentSecC.style.color = '#fff000';
    contentSecD.style.color = '#fff000';
    footerText[9].style.color = '#ffff00';
});

//Wheel B Stopped Propagation()
document.addEventListener('wheel', function (event){
    logoHeading.style.color = '#fff000';
    navLinks[0].style.color = '#fff000';
    navLinks[1].style.color = '#fff000';
    navLinks[2].style.color = '#fff000';
    navLinks[3].style.color = '#fff000';
    introHeader.style.color = '#fff000';
    contentSecA.style.color = '#fff000';
    contentSecB.style.color = '#fff000';
    contentSecC.style.color = '#fff000';
    contentSecD.style.color = '#fff000';
    footerText[9].style.color = '#fff000';
    event.stopPropagation();
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

//Key Up
document.addEventListener('keyup', function (event){
    if(event.key === "e"){
    logoHeading.style.color = 'pink';
    navLinks[0].style.color = 'pink';
    navLinks[1].style.color = 'pink';
    navLinks[2].style.color = 'pink';
    navLinks[3].style.color = 'pink';
    introHeader.style.color = 'pink';
    contentSecA.style.color = 'pink';
    contentSecB.style.color = 'pink';
    contentSecC.style.color = 'pink';
    contentSecD.style.color = 'pink';
    footerText[9].style.color = 'pink';
    };
});

//Mouse over, out and click (AND event.preventDefault();)
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
   });
navLinks[0].addEventListener("mouseout", function (event) {
    navLinks[0].style.color = '#0000ff';
   });
navLinks[0].addEventListener("click", function (event) {
    navLinks[0].style.color = 'cyan';
    event.preventDefault();
   });


navLinks[1].addEventListener("mouseover", function (event) {
    navLinks[1].style.color = '#00ff00';
   });
navLinks[1].addEventListener("mouseout", function (event) {
    navLinks[1].style.color = '#0000ff';
   });
navLinks[1].addEventListener("click", function (event) {
    navLinks[1].style.color = 'cyan';
    event.preventDefault();
   });


navLinks[2].addEventListener("mouseover", function (event) {
    navLinks[2].style.color = '#00ff00';
   });
navLinks[2].addEventListener("mouseout", function (event) {
    navLinks[2].style.color = '#0000ff';
   });
navLinks[2].addEventListener("click", function (event) {
    navLinks[2].style.color = 'cyan';
    event.preventDefault();
   });   

navLinks[3].addEventListener("mouseover", function (event) {
    navLinks[3].style.color = '#00ff00';
   });
navLinks[3].addEventListener("mouseout", function (event) {
    navLinks[3].style.color = '#0000ff';
   });
navLinks[3].addEventListener("click", function (event) {
    navLinks[3].style.color = 'cyan';
    event.preventDefault();
   });

introHeader.addEventListener("mouseover", function (event) {
    introHeader.style.color = '#00ff00';
   });
introHeader.addEventListener("mouseout", function (event) {
    introHeader.style.color = '#0000ff';
   });
introHeader.addEventListener("click", function (event) {
    introHeader.style.color = 'cyan';
   });


contentSecA.addEventListener("mouseover", function (event) {
    contentSecA.style.color = '#00ff00';
   });
contentSecA.addEventListener("mouseout", function (event) {
    contentSecA.style.color = '#0000ff';
   });
contentSecA.addEventListener("click", function (event) {
    contentSecA.style.color = 'cyan';
   });


contentSecB.addEventListener("mouseover", function (event) {
    contentSecB.style.color = '#00ff00';
   });
contentSecB.addEventListener("mouseout", function (event) {
    contentSecB.style.color = '#0000ff';
   });
contentSecB.addEventListener("click", function (event) {
    contentSecB.style.color = 'cyan';
   });

contentSecC.addEventListener("mouseover", function (event) {
    contentSecC.style.color = '#00ff00';
   });
contentSecC.addEventListener("mouseout", function (event) {
    contentSecC.style.color = '#0000ff';
   });
contentSecC.addEventListener("click", function (event) {
    contentSecC.style.color = 'cyan';
   });

contentSecD.addEventListener("mouseover", function (event) {
    contentSecD.style.color = '#00ff00';
   });
contentSecD.addEventListener("mouseout", function (event) {
    contentSecD.style.color = '#0000ff';
   });
contentSecD.addEventListener("click", function (event) {
    contentSecD.style.color = 'cyan';
   });

footerText[9].addEventListener("mouseover", function (event) {
    footerText[9].style.color = '#00ff00';
   });
footerText[9].addEventListener("mouseout", function (event) {
    footerText[9].style.color = '#0000ff';
   });
footerText[9].addEventListener("click", function (event) {
    footerText[9].style.color = 'cyan';
   });

