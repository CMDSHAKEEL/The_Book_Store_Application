
const jwt = require('jsonwebtoken')

const {SECRET_KEY} = require('../../DB.Config/database.config')

module.exports = (context) => {

    //context {will have headers }
    const authHeader =context.headers.authorization;

    if(authHeader){
        // we  send the header with value of bearer

        const token =authHeader.split('Bearer ')[1];

        if(token){
            const user = jwt.verify(token ,SECRET_KEY)
            return user;
        }
        throw new Error('Authentication token should be corrct')
    }
}