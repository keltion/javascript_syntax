/***
const pr = new Promise((resolve, reject)=>{
// resolve는 성공했을때 실행, reject는 실패시 실행되는 함수
})
이렇게 어떤일이 완료되었을 때 실행되는 함수를 callback 함수라고 함

new Promise 생성자가 반환하는 promise객체는 state와 result를 프로퍼티로 갖음
 */

/*** new Promise
state: pending(대기)
result: undefined
 */

// if 성공 -> resolve(value) 호출
/***
state: fulfilled(이행됨)
result: value
 */

// else -> reject(error)
/*** 
state: rejeced(거부됨)
result: error
*/

//판매자 코드
const pr = new Promise((resolve, reject)=> {
    setTimeout(()=>{
            resolve('OK')
            //reject(new Error('error..'))
    }, 3000)
});
//소비자 코드
pr.then(
    function(result){
        console.log(result + ' 가지러 가자.'); // 이행 되었을때 실행
    },
    function(err){
        console.log('다시 주문해주세요..');// 거부 되었을때 실행
    }
);

// ==
pr.then(
    function(result){}
).catch(
    function(err){}
)
// finally: 이행이되든 거부되든 항상 실행됨
pr.then(
    function(resolve){}
).catch(
    function(err){}
).finally(
    function(){
        console.log('--- 주문 끝 ---')
    }
)

// 실습
const f1 = (callback)=>{
    setTimeout(function(){
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback)=>{
    setTimeout(function(){
        console.log("2번 주문 완료");
        callback();
    }, 2000);
};

const f3 = (callback)=>{
    setTimeout(function(){
        console.log("3번 주문 완료");
        callback();
    }, 3000);
};

// callback 지옥
console.log('시작');
f1(function(){
    f2(function(){
        f3(function(){
            console.log('끝');
        })
    })
})

//Promise() 구현

const pr = new Promise((resolve,reject)=>{
    setTimeot(()=>{
        resolve("Ok")},3000);
});

const f1 =
    new Promise((res, rej)=>{
        setTimeout(()=>{
            res("1번 주문 완료");
            }, 1000);
        });


const f2 = (message) => {
    console.log(message);
    new Promise((res, rej)=>{
        setTimeout(()=>{
            res("2번 주문 완료");
            }, 3000);
        });
    };

const f3 = (message)=>{
    console.log(message);
    new Promise((res, rej)=>{
        setTimeout(()=>{
            res("3번 주문 완료");
            }, 2000);
        });
    };

console.log('시작');

// 프로미스 체이닝 (Promises chaning)
f1()
.then((res)=> f2(res))
.then((res)=> f3(res))
.then((res)=>console .log(res))
.catch(console.log)
.finally(()=>{
    console.log("끝");
});

// Promise.all : 한꺼번에 시작, 하나의 정보라도 누락되면 안됨
console.time('x');
Promise.all([f1(),f2(),f()]).then((res)=>{
    console.log(res);
    console.timeEnd('x');
});// 3작업이 완료되어야 then 부분이 실행됨

//Promis.race : 하나라도 1등으로 완료되면 끝냄
console.time('x');
Promise.race([f1(),f2(),f()]).then((res)=>{
    console.log(res);
    console.timeEnd('x');
});