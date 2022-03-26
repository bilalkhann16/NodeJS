const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start',number =>{
    console.log('event started')
    console.log(number)
})

eventEmitter.emit('start',22)
