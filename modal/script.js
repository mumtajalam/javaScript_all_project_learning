'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnsopenModal = document.querySelectorAll('.show-modal');

   console.log(btnsopenModal);

   for(let i=0; i<btnsopenModal.length; i++)
   btnsopenModal[i].addEventListener('click',()=>{
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
   })

   btncloseModal.addEventListener('click', ()=>{
       modal.classList.add('hidden');
       overlay.classList.add('hidden');
   })
overlay.addEventListener('click',()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})




