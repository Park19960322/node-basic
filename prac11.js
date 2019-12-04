/*var candyMachine={
    status:{
        name: 'node',
        count:5,
    },
    getCandy:function(){
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;*/

//위 코드를 비구조화 할당을 사용해서 수정

const candyMachine = {
    status:{
        name: 'node',
        count: 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
};
const {getCandy, status:{count}}=candyMachine;
//candyMachine 객체 안의 속성을 찾아서 변수와 매칭
//count처럼 여러단계 안의 속성도 탐색가능
//getCandy와 count 변수가 초기화 된것