if(true){
    var x=3;
}
console.log(x); //3

if(true){
    const y=3;
}
console.log(y); //Uncaught ReferenceError : y is not defined

//var는 함수 스코프를 가지므로 -> if문의 블록과 관계없이 접근가능
//const와 let은 블록 스코프를 가지므로 블록빡에서 변수 접근 불가능->블록의 범위는 if, while, for, function등의 중괄호 기준
//->블록 스코프를 사용하기에 코드관리 수월,호이스팅같은 문제 해결

