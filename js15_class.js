// ES6에 추가된 스펙

class User2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name)
    }// 프로퍼티가 아니라 User2의 프로토타입에 저장됨.
}

const tom = new User2("Tom",19); 

/***
 * class는 new를 붙이지 않으면 에러
 * for in 문에서 함수는 제외됨
***/

// 상속
// 생성자함수는 프로토타입함수를 이용해서 상속 구현
// 클래스에서는 extends 사용

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive..");
    }
    stop(){
        console.log("STOP!");
    }
}

class Bmw extends Car {
    constructor(color){
        super(color); // 항상 부모 클래스 컨스트럭트 실행해줘야함. 일부 과정을 생략하지 때문에
        this.navigation = 1;
    }
    park(){
        console.log("PARK");
    }
    stop(){
        super.stop();
        console.log("OFF");
    }
}
const z4 = new Bmw("blue");