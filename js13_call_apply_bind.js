// call, apply, bind
// 함수를 어떻게 어디서 호출했느냐(함수 호출 방식)와 관계없이this를 지정할 수 있음

// call
// call()는 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정할 수 있음

const mike ={
    name: "Mike",
}

const tom = {
    name: "Tom",
}

function showThisName(){
    console.log(this.name);
}

showThisName(); // 아무것도 안뜸. this == window
showThisName(call(make)); //call을 이용하여 this를 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메소드인 것 처럼 사용할 수 있음

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(mike, 1999, 'singer');

console.log(mike);

// apply: 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음
// 매개변수를 배열로 받음
update.apply(mike, [1999, 'singer']);

// bind: 함수의 this값을 영구히 바꿀 수 있음

const updateMike = update.bind(mike);
updateMike(1900, 'police');
console.log(mike);

// 실습
const user = {
    name: "Mike",
    showName: function(){
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;
fn(); // hello, - this를 잃어버림
fn.call(user);
fn.apply(user);

let boundFn= fn.bind(user);