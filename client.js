const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = './students.proto'
const studentsService = grpc.load(PROTO_PATH).StudentService

//const packageDefinition = protoLoader.loadSync('./students.proto');
//const studentsService = grpc.loadPackageDefinition(packageDefinition).StudentService;

const client = new studentsService('localhost:50051',
    grpc.credentials.createInsecure())
module.exports = client