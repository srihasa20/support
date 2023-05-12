const pool = require("../../configuration/database")



module.exports = {
getUserByUserEmail: (email, callback)=>
{
    pool.query(
        'select * from registration where email = ?',
        [email],
        (error, results, fields)=> {
            if(error)
            {
                return callback(error)
            }
            return callback(null, results[0])
        })
    
    }
    
}
