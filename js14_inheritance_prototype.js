const user ={
    name: 'Mike'
}

user.hasOwnProperty('name');// 해당 property가 존재 하는지 알려줌
// 근데 hasOwnProperty property는 만든적이 없는데?


const user ={
    name: 'Mike',
    hasOwnProperty : function(){
        console.log('haha');
    }
}

user.hasOwnProperty(); // haha
 
const car = {
    wheels:4,
    drive(){
        console.log("drive..");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
}

bmw.__proto__ =car;//car가 bmw의 프로토 타입이됨. bmw는 car의 상속을 받음
// prototype chain

const x5 = {
    color: "white",
    name: "x5",
};
for(p in x5){
    console.log(p);
}// 다 나와

// Object.keys(x5) : 객체 내장메소드는 상속받은 property는 안나와

const Bmw = function(color){
    this.color = color;
    this.wheels = 4;
    this.drive = function(){
        console.log("drive..");
    };
};

Bmw.prototype.wheel= 4;
Bmw.prototype.drive = function(){
    console.log("drive..");
};

const x6 = new Bmw("red");
const x7 = new Bmw("blue");

// 생성자 함수가 새로운 객체를 만들어 낼때, 그 객체ㅐ는 생성자의 instance라고 불림
x7 instanceof Bmw; // true
x7.constructor === Bmw;// true


Bmw.prototype= {
    constructor : Bmw,
    wheels:4,
    drive(){
        console.log("drive..");
    },
};
//로도 표현 가능 하지만 이렇게되면 construcotr가 없어져서 좋은 방법은 아님. 보완은 가능

const Bmw = function(color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    };
};

// 이렇게 코드를 짜면 색을 얻을 수만 있고 수정은 불가능하게됨
