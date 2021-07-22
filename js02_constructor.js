/* 객체 리터럴
let user ={
    name : 'Mike',
    age : 30,
}
비슷한 객체를 여러개 만들어야하는 상황에서는 생성자 함수를 사용
*/
function User(name, age){
    this.name= name;
    this.age = age;
} 

let user1 = new User('Mike', 30);
let user2 = new User('keltion', 21);
/*
어떻게 동작?
new 함수명(); 
1. 빈 객체를 만들고 this에 할당
2. 함수실행하면서 this의 프로퍼티들을 추가
3. this 반환

function User(name, age){
    //this={};
    
    this.name = name;
    this.age = age;
    
    //return this;
}
어떤 함수라도 new를 붙여서 실행하면 위 알고리즘이 동작

function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
}
let user5 = new User('Han', 40);
user5.sayName();
new를 빼면 그냥 함수 호출

*/ 