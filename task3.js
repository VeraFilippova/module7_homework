// Написать функцию, которая создает пустой объект, но без прототипа.

const obj = function () {
    Object.create(null);
   } 
 console.log(typeof obj); 

 