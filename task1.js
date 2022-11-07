// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function keys(object) {
    for (let key in object) {
        if (objTest.hasOwnProperty(key)) {
            console.log(key);
            console.log(object[key]);
        }
    }
}
