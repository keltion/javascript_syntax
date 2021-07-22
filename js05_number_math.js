// 10진수 -> 2진수/16진수
// toString() 숫자를 문자로 변경
let num =10;

num.toString(); // "10"
num.toString(2); // "1010"

let num2 = 255;

num2.toString(16); // "ff"


/// 
Math.PI;
//올림
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1); //6
Math.ceil(num2); //6

//내림
Math.fllor(num1);
// 반올림
Math.round(num1);

//thtnwja wkflttn
let userRate = 30.1234;
// 요구사항: 소수점 둘째자리까지 표현
Math.round(userRate *100)/100; // 30.12
userRate.toFixed(2);// "30.12"
userRate.toFixed(0);// "30"
userRate.toFixed(6);// "30.123400"
// isNaN()
let x = Number('x'); // NaN
x == NaN // false
x === NaN // false
NaN == NaN // false
// isNaN()만이 NaN인지 아닌지 판단할 수 있음
isNaN(x) // true
isNaN(3) // false

// parseInt() 문자열을 숫자로 바꿔줌, Number와는 다르게 문자가 혼용되어있어도 동작함
let margin = '10px';
parseInt(margin); //10
Number(margin); //NaN

let reColor = 'f3';
parseInt(redColor);// NaN 
parseInt(redColor,16)// 243
parseInt('11',2); // 3

// ParseFloat() 부동소수점 반환
let padding = '18.5%';
parseInt(padding); // 18
parseFloat(padding); // 18.5

// Math.random() 0~1사이 무작위 숫자 생성
Math.random();
let ranNum = Math.floor(Math.random()*100)+1;

// Math.max()/ Math.min()
Math.max(1,4,-1,5,10,9,5.54); //10
Math.min(1,4,-1,5,10,9,5.54); // -1

// 절대값
Math.abs(-1)// 1
 
// 제곱
Math.pow(2,10); // 1024

// 제곱근
Math.sqrt(16); // 4

