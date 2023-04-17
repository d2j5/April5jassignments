




 
//Get the header element
const hd = document.getElementsByTagName('header');
console.log(hd);
// Get all the section elements
const sect = document.getElementsByTagName('section');
console.log(sect);
// Get the section element with class="current"
const classCurrent = document.querySelector('section.current');
console.log(classCurrent);
// Get the section that comes after the current section
const nextSec = classCurrent.nextElementSibling;
console.log(nextSec);

// Get the h2 node from the section before the 'current' section
const prevSecH2 = classCurrent.previousElementSibling.lastElementChild;
console.log(prevSecH2);

// Get the div that contains the section that has an h2 with a class of 'highlight'

const sectDiv = classCurrent.lastElementChild.parentElement.parentElement;
console.log(sectDiv);

// Get all the sections that contain an H2 (using a single statement);

const getH2Elements = document.querySelectorAll('h2');
console.log(getH2Elements);

