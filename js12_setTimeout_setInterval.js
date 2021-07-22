// setTimeout : 일정 시간이 지난 후 함수를 실행
// 1번째: 일정시간이 지난후 실행할 함수, 두번째: 시간

function fn(){
    console.log(3)
}

setTimeout(fn,3000);

setTimeout(function(){
    console.log(3);
}, 3000);
// 함수에 인수가 필요하다면 시간 뒤에 적어줘
// clearTimeout(tId); :  예정된 작업을 없애

//setTimeout은 time id를 반환하는데 이를 이용하면 스케쥴링을 취소할 수 있음
const tId = function showName(name){
    console.log(name);
}
setTimeout(showName, 3000, 'Mike');
clearTimeout(tId); // 3초 이전에 실행되므로 아무일도 발생하지않음



// setInterval : 일정 시간 간격으로 함수를 반복

// 주의 사항. delay time 0으로줘도 바로 실행되지않음 
// 현재 실행중인 스크립트가 종료된 이후 스케쥴링 함수를 실행하기 때문
setTimeout(function(){
    console.log(2)
},0);
console.log(1);
// browser는 4ms정도의 딜레이 시간이 있어서 0으로 적어도 그 이상이 걸릴 수 있음

// 사용자가 접속한 5초동안 1초에 한번씩 접속경과 메시지를 보내보기

const userName = 'Tom';
const time = 0;
setTimeout(function(){
    time++;
    console.log(`${userName}님 접속한 지 ${second}초 지났습니다.`)

},1000, userName)
