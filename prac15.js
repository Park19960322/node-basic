function findAndUser(Users){
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

/*==============================================*/

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender:'m'});
}

/*================================================*/

async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});
    }catch(error){
        console.error(error);
    }

}

//async function으로 교체한후 프로미스 앞에 await->해당 프로미스가 resolve될때까지 기다린후 다음 로직으로 넘어간다.

/*===================================================*/

const findAndSaveUser = async (Users)=>{
    try{
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender:'m'});

    }catch(error){
        console.error(error);
    }
};

/*====================================================*/

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async()=>{
    for await(promise of [promise1, promise2]){
        console.log(promise);
    }
})();