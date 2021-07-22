// javascript는 어휘적 환경(Lexical Environment)를 갖음 
// 코드가 실행되면 script 내에서 선언한 변수들이 Lexical 환경에 올라감
let one; //할당은 안되어있어서 초기값 undefined
one = 1;

function jaddOne(num){
    console.log(one +num);
}

addOne(5);
/********************* 
전역 Lexical 환경
one: 초기화X 사용불가
addOne: function 사용가능
**********************/


/********************* 
내부 Lexical 환경 - 함수가 실행되는동안 내부에서 만들어진 변수나 매개변수 
num: 5
+ 외부 Lexical 환경에 대한 참조를 갖음
**********************/

/*** Closure
 * 함수와 그 함수의 렉시컬 환경의 조합
 * 함수가 생성될 당시 외부 변수를 기억
 * 생성 이후에도 계속 접근 가능
 */
function makeAdder(x){
    return function(y){
        return x+y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); // 5

const add10 = makeAdder(10); 
console.log(add10(5)); // 15
console.log(add3(1)); //4

function makeCounter(){
    let num = 0; //  은닉화

    return function(){
        return num++;
    };
}

let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2