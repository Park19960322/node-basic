function run(){
    console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');

//실행시 시작->끝-(3초)->3초후 실행
//1.호출스택에main()과 setTimeout()저장
//2.setTimeout() 실행 시 콜백 run은 백그라운드로 이동
//3.백그라운드에서 3초 후 태스크 큐로 전송
//4.호출 스택 실행이 끝면 호출스택 공백
//5.이벤트 루프가 태스크 큐의 콜백을 호출 스택으로 올림.
//6.run이 호출스택에서 실행되고 비워짐.
//7.이벤트 루프는 태스크 큐에 콜백이 들어올때 까지 대기