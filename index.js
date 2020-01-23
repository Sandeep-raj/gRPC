const grpc = require('grpc')
const uuidv1 = require('uuid/v1')
const protoLoader = require('@grpc/proto-loader')
//deprecated
const studentsProto = grpc.load('students.proto')

//loading proto file into grpc server
//const packageDefinition = protoLoader.loadSync('students.proto');
//const studentsProto = grpc.loadPackageDefinition(packageDefinition);

//Mock Data
const students = [
    { id : '1' , name : 'Shizuka', age: 25, gender : 'female'},
    { id : '2' , name : 'Sido', age: 24, gender : 'male'}
]

//starting grpc server
const server = new grpc.Server()

//adding services to grpc server using proto class
server.addService(studentsProto.StudentService.service,{
    list : (_,callback) => {
        callback(null,students);
    },
    insert : (call,callback) =>{
        let student = call.request;
        student.id = uuidv1();
        students.push(student);
        callback(null,student);
    },
    delete : (call,callback) => {
        let id = call.request.id;
        students.splice(students.findIndex( x => x.id == id),1);
        console.log(students);
        callback(null,{});
    },
    update : (call,callback) => {
        let updateStudent = call.request;
        let student = students.find( x => x.id == updateStudent.id);
        if(student){
            student.name = updateStudent.name;
            student.age = parseInt(updateStudent.age);
            student.gender = updateStudent.gender;
        }
        console.log(students);
        callback(null,student);
    }
})

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()