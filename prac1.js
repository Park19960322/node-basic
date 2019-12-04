function first(){
    second();
    console.log('첫번쨰');
}

function second(){
    third();
    console.log('두번째');
}

function third(){
    console.log('세번째');
}

first();

//실행시 세번째->두번쨰->첫번째 순서
//main()->first()->second()->third()순으로 저장되고 실행은 그 역순