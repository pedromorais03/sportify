const crypto = require('crypto')

const cryptPassword = (password) => {
   return crypto.createHash('md5').update(password).digest('hex')
}

module.exports = { cryptPassword }