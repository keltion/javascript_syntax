const car = {
    color: 'red',
    wheels: 4,
}

const bmw = car;
car.drive=function(){
    console.log("drive..");
}

bmw.drive();