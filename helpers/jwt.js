const jwt = require("jsonwebtoken")
const SECRET_KEY = "inirahasiabanget"

function generateToken (payload) {
    const token =jwt.sign(payload,SECRET_KEY)
console.log(token,"dari JWT====>");

    return token
}

function verifyToken (token) {
    console.log(token,"===token dari verify");
    
    const result = jwt.verify(token,SECRET_KEY)
   console.log(result,"<====   coba coba ");
   
    
    return result

}




module.exports ={
    generateToken, verifyToken
}