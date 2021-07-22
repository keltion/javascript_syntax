/**************8
arguments : 함수로 넘어 온 모든 인수에 접근
배열이 아니라 Array 형태의 객체임
배열의 내장 메서드 없음
(forEach, map 사용 못함)  
 */

function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName('Mike', 'Tom'); 
// 2
// 'Mike' 
// 'Tom'

// 나머지 매개변수 사용 권장 (Rest parameters)
// 정해지지 않는 배열로 나타낼 수 있음
function showName(...names){
    console.log(names);    
}

showName(); // []
showName('Mike'); // ['Mike']

showName('Mike', 'Tom') // ['Mike', 'Tom'] 

// 전달받은 모든 수를 더해야 하는 함수
function add(...nums){
    const ret = nums.reduce((prev, cur)=>{
        return prev+cur;
        
    },0)
    console.log(ret);
}

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skill = skills;
}

const user1 = new User('Mike', 30, 'html','css');
const user2 = new User('Tom', 20, '35' ,'React');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);

// 전개구문(Spread syntax): 배열

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2];
console.log(result); // [1,2,3,4,5,6]

let user = {name: 'Mike'};
let mike = {...user, age:30};
console.log(mike) // {name: "Mike", age:30};

// 복제
let arr= [1,2,3];
let arr2 = [...arr];

// arr1을 [4,5,6,1,2,3]으로 만들기
let arr1 = [1,2,3];
let arr2 = [4,5,6];
arr1 = [...arr2,...arr1];
console.log(arr1);

// 
let user = {name: "Mike"};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

let newObj = {
    ...user,
    ...info,
    'skills': [...fe, ...lang]
}
console.log(newObj);

