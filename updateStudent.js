const client = require('./client');
client.update({id : '1' , name : 'Shizuka' , age : 23 , gender : 'feMale'}, (err,data) =>{
    if(!err){
        console.log('Data updated ->');
        console.log(data);
    }
    else{
        console.log('Error -> '+err);
    }
})