const { verifyToken } = require("../helpers/jwt")

const {users} = require("../models")

const db = require("../db")
const{User} = require("../models")



async function autehenticationUser (req,res,next) {

    try {
        // console.log("==> aku terpangiil di web token");
        
        const token = req.get("token")
        if (!token){
res.status(401).json("Anautorize")

        }
             
        console.log(token,"ini tokennya <====");
        
        const isValid = verifyToken(token)
        console.log(isValid,"==> validasi token cek")

        const dataWithToken = await User.findOne({
          
            where: {
                email: isValid.email,
                username: isValid.username
                }
        })
        
        console.log(dataWithToken,"==> data ada compare dari token data ada");
        if (!dataWithToken) {

           return res.status(401).json({
                message: "UnAutorized"
            })
        } 
        let manipulateJson = dataWithToken.toJSON()
        console.log(manipulateJson,"data FINAL");
        res.locals.user = manipulateJson
        next()
        

        
    } catch (error) {
      return  res.status(500).json(error)
        
        
    }

}

module.exports = autehenticationUser

