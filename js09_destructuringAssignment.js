/**************
Destructuring assignment
    구조 분해 할당 구문은 배ㅑ열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 ㅣㅇㅆ게 하는 표현식
***************/

// 배열 구조 분해

let [x,y] = [1,2];
console.log(x); //1
console.log(y); // 2

let str = "Mike-Tom-Jane";
let [user1,user2,user3] = str.split("-");

let [a,b,c] =[1,2];
// c는 undefined가 됨
// 기본값을 줘서 에러 방지
let [a=3,b=4,c=5]= [1,2];

// 일부 반환값 무시
let [user1, , user2]= ['Mike', 'Tom', 'Jane', 'Tony'];

console.log(user1); // 'Mike'
console.log(user2); // 'Jane'

// 바꿔치기
let a = 1;
let b = 2;
[a,b] = [b,a];

// 객체 구조 분해
let user = {name: 'Mike', age: 30};
let {name, age} = user;
// let name = user.name;
// let age = user.age;

// 순서를 신경쓰지않아도됨
let {age, name}= user; // 동일하게 동작

// 새로운 변수 이름으로 할당
let user = {name: 'Mike', age:30};
let {jname: userName, age: userAge}= user;

console.log(userName); // 'Mike'
console.log(userAge); // 30