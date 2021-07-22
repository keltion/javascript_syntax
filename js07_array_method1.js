// Array
// push() : 뒤에 삽입
// pop() : 뒤에 삭제
// unshift() : 앞에 삽입
// shift() : 앞에 삭제

// arr.splice(n,m): 특정 요소 지움 n시작, m개수
let arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr); // [1,4,5]

let arr = [1,2,3,4,5];
arr.splice(1,3,100,200);
console.log(arr); // [1, 100, 200, 5]

let arr = ["나는", "철수", "입니다."];
arr.splice(1,0,"대한민국", "소방관");

// arr.aplice()는 삭제된 요소 반환
let arr= [1,2,3,4,5];
let result =- arr.splice(1,2);

console.log(result); // [2,3]

// arr.slice(n,m) : n부터 m까지 반환
let arr = [1,2,3,4,5];
arr.slice(1,4); // [2,3,4]

let arr2 = arr.slice(); // 배열 복사

//arr.concat(arr2,arr3 .. ): 합쳐서 새배열 반환
let arr = [1,2];
arr.concat([3,4]);// [1,2,3,4]

// arr.forEach(fn): 배열 반복
// let users = ['Mike', 'Tom', 'Jane'];
// user.forEach((item, index, arr)=>{

// }); item: 해당 배열 요소, index , arr: 배열 그 자체

let arr = ["Mike", "Tom", "Jane"];
arr.forEach((name, index, arr)=>{
    console.log(`I am ${name}`);
});

// arr.indexOf / arr.lastIndexOf
let arr = [1,2,3,4,5,1,2,3];
arr.indexOf(3); // 2
arr.indexOf(3,3) // 두번째 인수는 시작위치를 의미 7
arr.lastIndexOf(3); // 끝에서 부터 검색 7

// arr.includes() : 포함하는지 확인 true, false 반환

// arr.find(fn) / arr.findIndex(fn) : 첫번째 true 값만 반환하고 끝 만약 없으면 undefined를 반환

let arr = [1,4,3,2,5];

const result = arr.find((itme) => {
    return item % 2 === 0; 
});

console.log(result); // 4

// 객체가 들어있는 배열의 경우 indexOf로 찾기 힘들어.
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

const result = userList.findIndex((item,idx) =>
{
    return item.age>19;
});
// 조건을 만조갛는 모든 요소 알고싶으면
//arr.filter(fn) 만족하는 모든 요소를 배열로 반환

const result = userList.filter((item,idx) =>
{
    return item.age>19;
});
console.log(result);

// arr.reverse() 역순으로 재정렬
let arr = [1,2,3,4,5];
arr.reverse(); // [5,4,3,2,1]

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

const result3= userList.map((user, index)=>{
    return Object.assign({},user, {
        id: index +1,
        isAult : user.age > 19,
    });    
});
console.log(result3);