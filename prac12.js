/*var array=['node', {}, 10, true];
var node=array[0];
var obj=array[1];
var bool=array[3];*/

//위 배열을 비구조화할당으로 선언

const array=['nodejs', {}, 10, true];
const[node, obj, bool]=array;
//배열의 첫번쨰 요소 node, 두번쨰 요소 obj, 세번쨰 요소 bool