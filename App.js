const { appendFileSync } = require('fs');
module.exports = (path,data) => {
if(!(path&&data)) throw Error('Please enter value and the path correctly')
appendFileSync(path, '\n'+data)
}