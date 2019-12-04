//기존 ES5 문법 사용
var num1=1;
var num2=2;
var result=3;
var string1=num1+' 더하기 '+num2+' 는 \''+result+'\'';
console.log(string1);//1 더하기 2는 '3'
//문자열 string1은 띄어쓰기와 변수, 더하기 기호 때문에 가독성이 좋지 않다.
//또한 작은 따옴표로 이스케이프해서 코드가 지저분하다.

//ES2015사용
const num3=1;
const num4=2;
const result2=3;
const string2=`${num3} 더하기 ${num4}는 '${result2}'`
//${변수} 형식으로 변수를 더하기 기호없이 문자열에 넣을 수 있습니다.
//백틱으로 사용하기 때문에 큰따옴표나 작은따옴표 사용 가능

