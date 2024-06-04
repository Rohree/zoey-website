const button = document.querySelector('button');
const popup = document.querySelector('.popup');

button.addEventListener('click', ()=>{
  popup.style.display === 'none' ? popup.style.display = 'block' : popup.style.display = 'none';
})