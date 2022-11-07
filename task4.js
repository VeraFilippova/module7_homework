// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


const ElectricalAppliance = {
    property: 'electrical',
    on: false
};

function  Appliance(name, current, voltage){
    this.name = name,
        this.current = current,
        this.voltage = voltage
    this.getPower = function(){
        if (this.on == true)  {
            console.log('Power of ' + name +' is ' + current*voltage + 'W');
        }
    }
}

Appliance.prototype = ElectricalAppliance;

const laptop = new Appliance('Laptop', 2, 220);
const lamp = new Appliance('lamp', 1, 220);
lamp.on = true;

console.log(laptop);
laptop.getPower();
console.log(lamp);
lamp.getPower();