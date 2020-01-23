const client = require('./client');
client.delete({id : '1'}, (err,data) => {
    if(!err){
        console.log('Recorded Deleted');
    }else{
        console.log('Error -> '+err);
    }
})