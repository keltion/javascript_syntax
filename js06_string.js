const { strict } = require("yargs");

// ` : 여러줄에 걸쳐 문자를 쓸 수 있음
let desc = '안녕하세요.';
desc.length // 6
desc[2]; // '하'
desc[4] = '용';// 변화 x
console.log(desc); // 안녕하세요.

// goUpperCase()/ toLowerCase()
let desc = "Hi guys. Nice to meet you.";

desc.toUpperCase(); // "HI GUYS. NICE TO MEET YOU."
desc.toLowerCase(); // "hi guys. nice to meet you."

// str.indexOf(text)
let desc = "Hi guys. Nice to meet you.";
desc.indexOf('to'); // 14
desc.indexOf('man'); // -1

// 주의
if(desc.indexOf('Hi')>-1){ // >0 X
    console.log('Hi가 포함된 문장입니다.');
}

// str.slic(n,m) m: 없으면 문자열 끝까지, 양수면 그 숫자까지(폿함하지 않음), 음수면 끝에서부터 셈
let desc = 'abcdefg';
desc.slice(2); // 'cdefg';
desc.slice(0,5); // 'abcde
desc.slice(2,-2)// "cde"

// str.substring(n.m) n과 m 사이 문자열 반환, 음수는 0으로 인식
let desc = "abcdefg";
desc.substring(2,5);// "cde"
desc.substring(5,2);// "cde"

//strict.substr(n,m) n부터 시작, m개를 가져옴
desc.substr(2,4); // "cdef"
desc.substr(-4,2); // "de"

// str.trim() 앞 뒤 공백 제거
let desc = " coding   ";
desc.trim(); // "coding"

// str.repeat(n) n번 반복
let hello = "hello!";
hello.repeat(3); // "hello!hello!hello!"

// 문자에 해당되는 아스키코드 얻기
"a".codePointAt(0); // 97
// 반대
String.fromCodePoint(97) // "a"

// str.include("콜라")


