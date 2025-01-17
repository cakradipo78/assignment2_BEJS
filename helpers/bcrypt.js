const bcrypt = require("bcrypt")

function hashPassword (password){
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)
    console.log(hash,"==> ini hasil hash passwordnya");
    
    return hash

}

function comparePassword(userPassword, hashPassword) {
    let result = bcrypt.compareSync(userPassword, hashPassword)
    // console.log(result,"==> ini comparenya");
    return result
    

}

module.exports = {hashPassword, comparePassword}

