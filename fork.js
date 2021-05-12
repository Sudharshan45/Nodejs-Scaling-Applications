
const { fork } = require('child_process')

const processes = [
    fork('./app', ['4001']),
    fork('./app', ['4002']),
    fork('./app', ['4003'])
]

console.log(`forked ${processes.length} processes`);