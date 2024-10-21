const form = document.querySelector('form')

// whenever form is submitted, by  post or get ...there values url or server m chli jati h 
form.addEventListener('submit', (e) => {
   e.preventDefault() // for preventing getting values in url or server

   // the value which we getting  is in string ...for conversion we use parseInt
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results =document.querySelector('#results')
   
   if(height ==='' || height < 0 || isNaN(height)){
      results.innerText ='Please give me valid height';
   }
   else if(weight ==='' || weight < 0 || isNaN(weight)){
      results.innerText ='Please give me valid weight';
   }else{
      const bmi = (weight / ((height * height)/10000)).toFixed(2)
      //show the result
      results.innerText = `Your bmi is ${bmi}\n`;
      if(bmi < 18.6){
         results.innerText += "You are underweight";
      }else if(18.6 < bmi < 24.9){
         results.innerText += "You are normal weight";
      }else{
         results.innerText += "You are overweight";
      }
   }
})
