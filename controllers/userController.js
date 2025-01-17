    const{User,Movie} = require("../models")
    const db = require("../db")
    const { comparePassword } = require("../helpers/bcrypt")
    const {generateToken} = require("../helpers/jwt")




    class UserContoller {

        static async getAllData(req,res){
            try {
                const queryGet = `
                select * from "users" limit 1;             
                `
              
            const result = await db.query(queryGet)
           
        
            console.log(result.rows,"==> ini data quey selectnya") 
              
            res.status(200).json({
                users: result.rows,
             
            });
        
            } catch (error) {
                res.status(500).json(error)     
            }}

            //Movies
            static async movies(req,res){
                try {                    
                    // const queryGet1 = `
                    // SELECT * FROM "Movies"
                    
                    // `

                    const data = await Movie.findAll()
                // const result = await db.query(queryGet1)
                const dataloop = []

                data.forEach(element => {
                    
                    dataloop.push(element.dataValues)
                //  console.log(element.dataValues,"==> element");
                //  console.log();
                 
                    
                });                

                
                console.log(dataloop,"==>tampungan data");
                res.status(200).json({
                    users: dataloop,
                 
                });
                // console.log(data[0].dataValues,"==> ini data quey selectnya")   
                // res.status(200).json(result.rows)
            
                } catch (error) {
                    res.status(500).json(error)     
                }}   

            // end Movies
    //REGISTER
        static async registerUser(req,res){

            const {name, username, email, password, address, phonenumber} = req.body
            console.log(name, username,"==>ini dari postman"); 
            const data_kolom = {
                name,
                username, 
                email, 
                password, 
                address, 
                phonenumber,
                createdAt : new Date(),
                updatedAt : new Date()
            } 

            try {
            const inserDataUser = await User.create(data_kolom)
            
            console.log(inserDataUser," ==> data user");
            res.status(201).json({message: "Success Creating New User",
                inserDataUser
            },

            )
            
            } catch (error) {
                console.log(error);
                
                res.status(500).json(error)

            }


        }   
        //END REGISTER
        // LOGIN

        static async loginUser(req, res) {
            const { email, password } = req.body;
            try {
                const dataEmail = await User.findOne({
                    where: {
                        email: email 
                    }
                    
                    
                });
            
                

                if (!dataEmail) {
                    return res.status(404).json({ 
                        
                        message: "Email tidak ditemukan" });
                } 
                let manipulateJson = dataEmail.toJSON()
                const isValidPassword = comparePassword(password,dataEmail.password)   
                
                            
                    if (!isValidPassword) {
                        return res.status(401).json({
                        "massage": "email / Password salah" });
                }
                console.log(manipulateJson,"==> hasil akhir");
                let responBody = {
                    name: manipulateJson.name,
                    username: manipulateJson.username,
                    email: manipulateJson.email,
                    // phonenmber: manipulateJson.phonenumber
                            
                }
                let hasilToken = generateToken(responBody)

                res.status(200).json({ 
                    "message":"login Berhasil",
                    hasilToken,
                    "sampai sini":"---"

                    // responBody
                });


            } catch (error) {
                // console.log(error);
                res.status(500).json({ error: "Terjadi kesalahan saat login" });
            }
        }

        
    }

    module.exports = UserContoller