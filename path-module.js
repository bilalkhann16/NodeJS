const path = require('path')

const filepath = path.join('/content/','sub-folder','test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)
