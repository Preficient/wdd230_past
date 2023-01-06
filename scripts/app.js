const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright') ;
let quantity = document.querySelector('#q').value;
h1.textContent = 'Alexandra Fernandez de Ruiz' ;
copyright.textContent = `© ${new Date().getFullYear()}`;