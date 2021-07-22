// computed property
let a = 'age';
const user = {
    name : 'Mike',
    [a]: 30 // age: 30
}
// 변수 a에 할당된 값이 들어감

const user = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "Hello"
}

// # 객체에서 사용할 수 있는 메소드
// 1. Object.assign(): 객체 복제
const user = {
    name : 'Mike',
    age : 30
}

/*
const cloneUser= user;
를 한다고 해서 객체 복사가 이뤄지지않음
user에는 객체자체가 들어있는것이 아니라, 객체가 저장되어 있는 메모리 주소인 객체에 대한 참조값이 저장됨. 즉 참조값만 복사됨
*/
const newUser = Object.assign({},user);
// {}는 초기값, 두번째 매개변수부터 들어온 객체들이 초기값에 병합됨.
Object.assign({ gender:'male'}, user);

// 2. Object.keys(): 키 배열 반환
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}
Object.keys(user); //[name, age, gender]
// 3. Object.values(): 값 배열 반환
// 4. Object.entries(): 키/값 배열 반환
Object.entries(user); 
/*
[
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"]
]
*/
// 5. Object.fromEntries(): 키/값 배열을 객체로
const arr = 
[
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"] 
];
Object.fromEntries(arr);