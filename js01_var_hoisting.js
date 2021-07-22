/*
let vs var
let과 var는 모두 hoisting된다.
-호이스팅: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
다만 할당은 해당 코드가 있는 line에서 발생함

console.log(name); //ReferenceError
let name = 'Mark';*/ 
//Temporal Dead Zone 때문에 에러 발생

let age=12;
function showAge(){
    console.log(age);
}

/*
var: 선언+ 초기화 동시에. 할당은 나중에 해도 가능
let: 선언과 초기화가 나눠져있음.
const: 선언 초기화 할당이 동시에

var: 함수 스코프
let, const: 블록 스코프
*/