// insert the name using querySelector.
const h1 = document.querySelector('h1');
h1.textContent = 'Alexandra Fernandez de Ruiz';
// Add the year in the HTML document.
const copyright = document.querySelector('#copyright').innerHTML += new Date().getFullYear();
// last modified
let lastModi = new Date(document.lastModified);
const day = lastModi.getDate();
const month = lastModi.getMonth();
const year = lastModi.getFullYear();
const hour = lastModi.getHours();
const min = lastModi.getMinutes();
const sec = lastModi.getSeconds();
const pickFooter = document.querySelector('#lastmodified').innerHTML += `Last Updated: ${month + 1}/${day}/${year} ${hour}:${min}:${sec}`;


