const obj = {
    1: '1입니다.',
    false: '거짓',
    'name': 'hi',
}
Object.keys(obj);//  Object.keys(obj);
// 객체의 property는 숫자형이나 불린형으로 만들어도 문자형으로 반환됨
obj['1']
obj['false']

// Symbol -> 유일한 식별자를 만들때 사용(new를 붙이지 않음)
// 유일한 property를 추가하고 싶을 때 심볼 사용
const a = Symbol();
const b = Symbol();

console.log(a) // Symbol()
console.log(b) // Symbol()
// a===b; false
// a==b; false

const id = Symbol('id'); // 문자열로 설명을 추가할 수 있음
const user ={
    name: 'Mike',
    age: 30,
    [id]: 'myid'
}
user // {name: "Mike", age:30, Symbol(id): "myid"}
user[id] // "myid"
Object.keys(user); // ["name", "age"]
// key가 symbol형인 property는 건너뜀 for in도

// Symbol.for() 전역 심볼
/*
- 하나의 심볼만 보장받을 수 있음
- 없으면 만들고, 있으면 가져오기 때문
- Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
- Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
*/
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
id1 === id2; // true
Symbol.keyFor(id1); // "id"
// 전역변수가 아닌 symbol은 description으로 이름을 알 수 있음
const id = Symbol('id 입니다.');
id.description; // "id 입니다."

Object.getOwnPropertySymbols(user); // [Symbol(id)]
Reflect.ownKeys(user); // ["name", "age", Symbol(id)]



// 실습
// 다른 개발자가 만들어 놓은 객체
const user= {
    name: "Mike",
    age: 30,
};

// 내가 작업
// user.showName = function(){};
const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user){
    console.log(`His ${key} is ${user[key]}.`);
}