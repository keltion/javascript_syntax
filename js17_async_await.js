//Promise의 then method를 chain 형식으로 호출하는 것 보다 가독성이 좋아짐

function getName(){
    return "Mike";
}
// 이런 함수 앞에 async를 붙이면 항상 Promise를 반환함

async function getName(){
    return "Mike";
}

getName().then(name => {
    console.log(name)
});

// 만약 반환값이 Promise면 그 값을 그대로 사용
async function getName(){
    return Promise.resolve("Tom");
}

getName().then(name => {
    console.log(name)
});

// 함수내부에서 예외발생시 rej 상태의 Promise 반환
async function getName(){
    //return Promise.resolve("Tom");
    throw new Error("err...");
}

getName().catch((err)=>{
    console.log(err);
})

// await : async 함수 내부에서만 사용할 수 있음
function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name);
        }, 1000);
        });
    }

async function showName(){
    const result = await getName('Mike');// await 오른쪽에는 Promise가 오고 그 프로미스가 처리될 때까지 기다림
    console.log(result);
}

console.log("시작");
showName();



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

async function order(){
    try{
    //     const reuslt1 = await f1();
    //     const result2 = await f2(result1);
    //     const result3 = await f3(result2);
    // console.log(result3);
    const result = await Promise.all([f1(),f2(),f3()]);
    console.log(resul3);
    }catch(e){
        console.log(e);
    }    console.log("종료");
}
order();

// 프로미스 체이닝 (Promises chaning)
// f1()
// .then((res)=> f2(res))
// .then((res)=> f3(res))
// .then((res)=>console .log(res))
// .catch(console.log)
// .finally(()=>{
//     console.log("끝");
// });