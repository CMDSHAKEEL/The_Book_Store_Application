const bcrypt = require('bcrypt');
const salting = 11;
class bcryptpass{
       hash = (details, callback) => {
        bcrypt.hash(details, salting, function (error, hash) {
            console.log(details)
            console.log(error)
            if (error) {
                return callback(error, null);
            } else {
                return callback(null, hash);
            }
        })
    }
}
module.exports = new bcryptpass()