// Your code goes here
//Selectors
const mainNavHeader = document.querySelector(".main-navigation");
const navContainer = document.querySelector(".nav-container");
const logoHeading = document.querySelector(".logo-heading");
const navLinks = document.querySelector(".nav");

const homeContainer = document.querySelector(".container home");
const introHeader = document.querySelector(".intro");
const contentSecA = document.querySelector(".content-section");
const contentSecB = document.querySelector(".inverse-content");
const contentSecC = document.querySelector(".content-destination");
const contentSecD = document.querySelector(".content-pick");

const siteFooter = document.querySelector(".footer");

introHeader.addEventListener("mouseover", function (event) {
    introHeader.style.color = '#00ff00';
    console.log('ASDF');
   });

introHeader.addEventListener("mouseout", function (event) {
    introHeader.style.color = '#0000ff';
    console.log('ASDF');
   });


// const introImg = document.querySelector('.intro img')
// introImg.addEventListener('mouseover', (event) => {
//     introImg.style.opacity = '0.5'
// })
// // 7        mouseout - A pointing device is moved off the element that has the listener attached or off one of its children.
// introImg.addEventListener('mouseout', (event) => {
//     introImg.style.opacity = '1'
// })



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