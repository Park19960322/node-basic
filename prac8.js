var sayNode=function(){
    console.log('Node');
};
var es='ES';
//oldObject 객체에 동적으로 속성을 추가
var oldObject={
    sayJS:function(){
        console.log('JS');
    },
    sayNode:sayNode,
};
oldObject[es+6]='Fantastic';

oldObject.sayNode();//Node
oldObject.sayJS();//JS
console.log(oldObject.ES6);//Fantastic

const newObject={
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]:'Fantastic',
};
newObject.sayNode();//Node
newObject.sayJS();//JS
console.log(newObject.ES6);//Fantastic

//같은 객체의 메서드에 함수를 연결할 떄 콜론과 function을 붙힐 필요가 없다.
//속성명과 변수명이 겹치는 경우 한번만 쓸수 있다.->코드의 중복을 피할수 있다.
//객체의 속성명을 동적으로 생성가능->ES2015에서는 객체 리터럴안에 선언 가능
