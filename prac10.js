var relationship1 = {
    name:'zero',
    friends:['nero', 'hero', 'xero'],
    logFriends:function(){
        var that =this;//relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend){
            console.log(that.name, friend)
        });
    },
};
relationship1.logFriends();

const relationship2={
    name:'zero',
    friends:['nero', 'hero', 'xero'],
    logFriends(){
        this.friends.forEach(friend=>{
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();

//relationship1.logFriends() 안의 foreach문에서는 function 선언문을 사용
//각자다른 함수스코프의 this를 가지므로 that이라는 변수를 사용해서 relationship에 간접적으로 접근
//relationship2.logFriends()안의 foreach문은 화살표 함수 사용
//바깥스코프인 logFriends()의 this를 그대로 사용가능->상위 this 를 상속
//결론적으로 기본적으로 화살표함수를 쓰되 this를 사용해야되면 화살표 함수와 함수선언문 둘중 선택해서 사용