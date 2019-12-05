function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{//첫번째 콜백
     if(err){
        return console.error(err);
     }
     user.name='zero';
     user.save((err)=>{//두번째 콜백 
     if(err){
        return console.error(err);
     }
    Users.findOne({gender:'m'}, (err, user)=>{//세번째 콜백
      });
    });
  });
}

/*=============================================================*/

function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name='zero';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'});
    })
    .then((user)=>{

    })
    .catch(err=>{
        console.error(err);
    });
}

/*================================================================*/

const promise1=Promise.resolve('성공1');
const promise2=Promise.resolve('성공2');
Promise.all([promise1, promise2])
.then((result)=>{
    console.log(result);//['성공1','성공2' ]
})
.catch((error)=>{
    console.error(error);
});

//모든 resolve가 완료되어야 then 실행

