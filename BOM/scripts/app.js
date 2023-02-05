const input1 = document.querySelector('input');
const button1 = document.querySelector('button');
const list1 = document.querySelector('#list');
const elementul = document.querySelector('ul');

button1.addEventListener('click', function() {

 if (input1.value != ""){
    let chapter = input1.value;
    const elementli = document.createElement('li');
    const buttonerase = document.createElement('button');
    
    elementli.textContent = chapter;
    buttonerase.innerHTML = '❌';

    elementul.appendChild(elementli);
    elementul.appendChild(buttonerase);
    
    buttonerase.addEventListener('click', () => {
        elementul.removeChild(elementli);
        elementul.removeChild(buttonerase);

    })
    
   
    // let texto = `<li>${chapter}</li>`;
    // const getli = document.querySelector('#list');
    // getli.innerHTML = texto;
 }
 input1.value="";
 input1.focus();


});