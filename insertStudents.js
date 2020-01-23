const client = require('./client')
client.insert({name:'Saim',age:24,gender:'male'}, (err,student) => {
    if(!err){
        console.log('The new record has been added with id'+ student.id);
    }
    else{
        console.log('Error -> '+err);
    }
})