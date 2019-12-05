const condition=true;//true면 resolve, false면 reject
const promise=new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        console.log(message);//성공(resolve)한 경우 실행
    })
    .catch((error)=>{
        console.error(error);//실패(reject)한 경우 실행
    });

//new Promise로 프로미스 생성->내부에 resolve와 reject를 매개변수로 갖는 콜백함수 삽입
//->이렇게 새성한 promise변수에 then과 catch메서드를 붙일수 있음
//프로미스 내부에서 resolve가 호출되면 then이 실행되고, reject가 호출되면 catch가 실행된다.
//resolve와 reject에 넣어준 인자는 각각 then과 catch의 매개변수를 받을 수있음->resolve호출시 then의 message는 '성공'
//->reject가 호출되면 catch의 error가 '실패'
//then 이나 catch에서 다시 다른 then이나 catch를 붙일 수 있음->이전 then의 return값을 다음 thendml 매개변수로 넘김
//프로미스를 return한 경우 프로미스가 수행된 후 다음 then이나 cathc가 호출

promise.then((message)=>{
    return new Promise((resolve, reject)=>{
        resolve(message);
    });
})

.then((message2)=>{
    console.log(message2);
    return new Promise((resolve, reject)=>{
        resolve(message2);
    });
})

.then((message3)=>{
    console.log(message3);
})

.catch((error)=>{
    console.error(error);
});

//처음 then에서 message를 resolve하면 다음 then에서 받을 수있음.
//message2로 resolve했으므로 다음 then에서 message3를 받을수 있음.