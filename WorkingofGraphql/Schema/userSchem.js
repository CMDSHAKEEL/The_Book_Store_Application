const {gql} = require('apollo-server-express')

const typeDefs = gql`

 

type Users{
    id:ID
    firstName:String
    lastName:String
    email:String
    password:String
}
type Authuser{
    userId:ID
    firstName:String
    lastName:String
    email:String
    token:String
    tokenExpiration: Int!

}

type Books{
    id:ID
    title:String
    description:String
    topic:String
} 

type Forgot{
    email:String
    message:String
}

type Reset{
    email:String
    message:String
    newpassword:String
} 
 
 
input userInput{
    firstName:String
    lastName:String
    email:String
    password:String
} 

input loginUser{
    email:String
    password:String
}
 
input forgotPassword{
    email:String
}
 
input resetPassword{
    email:String
    Code:String
    newpassword:String
}

input BookInput{
    id:ID
    title:String
    description:String
    emailid:String
    topic:String
 }
 
 

type Query {
    users:[Users]
    books:[Books]
    getbooks(id:ID):Books
    
}

type Mutation{

    createuser(path:userInput):Users
    loginuser(path:loginUser):Authuser
    forgotpassword(path:forgotPassword):Forgot
    resetpassword(path:resetPassword):Reset
    
    Admin(email:String):String

    createBook(post:BookInput):Books
    deleteBook(id:ID): String
    updateBook(id:ID,post:BookInput):Books
    
} 
`
module.exports = typeDefs;