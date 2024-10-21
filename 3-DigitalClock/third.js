const clock = document.getElementById('clock')

// to set manually 
setInterval(function()  {
   let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
}, 1000);
