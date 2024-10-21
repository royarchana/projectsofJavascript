const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// loops in buttons so that they can be clickable
buttons.forEach(function(button){
   button.addEventListener('click', function(e){
      console.log(e);
      console.log(e.target); // kis target se event aaya h 

      if(e.target.id === 'grey'){
         body.style.backgroundColor = e.target.id;
      }      
      if(e.target.id === 'blue'){
         body.style.backgroundColor = e.target.id;
      }      
      if(e.target.id === 'yellow'){
         body.style.backgroundColor = e.target.id;
      }      
      if(e.target.id === 'pink'){
         body.style.backgroundColor = e.target.id;
      }      

      
   })
});
