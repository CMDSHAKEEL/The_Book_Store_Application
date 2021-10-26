 
// importing files and packages

const userModel     =  require('../../App/models/usermodel')
const Apollerror    =  require('apollo-server-errors')
 const joiValidation =  require('../../App/Utilites/validation')
 const bcryptpass    =  require('../../App/Utilites/bcrypt')
// const bcrtpt        =  require('bcrypt')
// const jwt           =  require('jsonwebtoken')
// const sendbymail    =  require('../../utilities/nodemailer') 
 

const resolvers={

    //in Query we can get all data present in database

    Query:{
         
        users: async ()=>{
             return await userModel.find()

        },
          
        
    },

    // in Mutation we update and delete and insert data

    Mutation:{

        // creating new user

        createuser:async (_,{path})=>{
          const user = new userModel({
              firstName:path.firstName,
              lastName:path.lastName,
              email:path.email,
              password:path.password
            })

            // implmentig regex pattern for input data

             const Validation = joiValidation.authRegister.validate(user._doc);
              if(Validation.error){
                  return new Apollerror.ValidationError(Validation.error)
              }

             //checking email should unique for creating new user

            const existinguser = await userModel.findOne({ email:path.email})
            if(existinguser){
                 return new Apollerror.UserInputError("Email exist already")
            }

            // using bcrypt for sequre password to be saved in database and using salt 

            bcryptpass.hash(path.password, (error,data)=>{
                 if(data){
                     user.password = data
                    console.log(data)
                 }else{
                     throw error;
                 }
                 user.save();
             })
             
            return user;
 

        },

      // login user

       
         
    }
}
module.exports =resolvers