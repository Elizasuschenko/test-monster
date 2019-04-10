const checkbox = document.querySelector('#checkbox');
const label = document.querySelector('#label');
 checkbox.addEventListener("change", function() {
     if(checkbox.checked){
         console.log('false');
         document.documentElement.style.setProperty('--light_accent', '#64CC30');
         document.documentElement.style.setProperty('--main_brand', '#008000');
         document.documentElement.style.setProperty('--dark_accent', '#2D291D');
         document.documentElement.style.setProperty('--dark_shades', '#151402');
         return
     }
     else{
         document.documentElement.style.setProperty('--light_accent', '#C4C4C4');
         document.documentElement.style.setProperty('--main_brand', '#58C8E4');
         document.documentElement.style.setProperty('--dark_accent', '#021A4B');
         document.documentElement.style.setProperty('--dark_shades', '#031627');
         return
     }
});