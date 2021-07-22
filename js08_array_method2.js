// arr.sort() 배열 재정렬. 배열 자체가 변경
// 주의: 정렬시 숫자를 문자로 취급함
let arr = [1,5,4,2,3];
arr.sort();
console.log(arr);

let arr2 = [27, 8, 5, 13];
arr2.sort();
console.log(arr2);

 //위의 문제를 해결하고자 값을 비교해줄 수 있는 함수를 전달해줘
 
let arr3 = [27, 8, 5, 13];

function fn(a,b){
    return a-b;
}

arr.sort(fn);

console.log(arr);

// 보통 함수를 만들어 놓고 사용하기 보다는 Lodash같은 라이브러리 사용
_.sortBy(arr);
// https://lodash.com/

// arr.reduce() 인수로 함수를 받음
// 배열을 돌면서 원하는 작업을 하고 최종값을 반환
// (누적 계산값, 현재값) => {return 계산값};
let arr = [1,2,3,4,5];
// for, for of, forEach

let result = 0;
arr.forEach((num) =>{
    result += num;
});
console.log(result);

const result = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0) // 두번째 인수는 초기값

let userList = [
    {name: "Mike", age: 30},
    {name: "Tom", age: 10},
    {name: "Jane", age: 27},
    {name: "Sue", age: 26},
    {name: "Harry", age: 42},
    {name: "Steve", age: 60},
]
//reduce를 이용해서 성인만 뽑아서 새로운 배열 만들기

let result = userList.reduce((pre,cur)=>{
    if(cur.age>19){
        pre.push(cur);
    }
    return pre;
},[]);
