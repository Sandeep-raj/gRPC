const client = require('./client')
client.list({}, (error, students) => {
    if (!error) {
        console.log('successfully fetch List Students')
        console.log(students)
    } else {
        console.error(error)
    }
})