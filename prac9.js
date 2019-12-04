function add1(x, y){
    return x+y;
}

const add2=(x,y)=>{
    return x+y;
};

const add3=(x,y)=>x+y;

const add4=(x,y)=>(x+y);

function not1(x){
    return !x;
}

const not2 = x => !x;

//add1,add2,add3,add4s는 같은 기능을 하는 함수
//not1, not2도 같은 기능을 하는 함수
//function 선언대신 => 기호로 함수 선언->변수에 대입하여 추후 재사용가능
//add3와 add4처럼 return할 식을 바로 기재가능->return문 줄일수 있음
//add4처럼 보기좋게 소괄호로 감쌀수 있음
//not2처럼 매개변수가 하나면 매개변수를 소괄호로 묶어주지않아도 됨