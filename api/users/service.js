const pool = require("../../configuration/database")



module.exports = {
    create: (data, callback)=>
    {
        pool.query(
            'insert into registration (email, name, password) values (?,?,?)',
            [
                data.email,
                data.name,
                data.password
            ],
            (error, results, fields)=>{
                if(error)
                {
                    return callback(error)
                }
                return callback(null, results)
            })
        },
getUsers: callback =>
{
pool.query(
    'select email,name,password',
    [],
    (error, results, fields)=> {
        if(error)
        {
            callback(error)
        }
        return callback(null, results)
    })
},
getUserByUserId: (email, callback) =>
{
pool.query(
    'select email,name,password from registration where email = ?',
    [email],
    (error, results, fields)=> {
        if(error)
        {
            callback(error)
        }
        return callback(null, results[0])
    })
},

updateUser: (data, callback) =>
{
pool.query(
    'update registration set email = ?,name = ?,password = ?',
    [email],
    (error, results, fields)=> {
        if(error)
        {
            callback(error)
        }
        return callback(null, results[0])
    })
},


deleteUser: (data, callback) =>
{
pool.query(
    'delete from registration where email = ?',
    [data.email],
    (error, results, fields)=> {
        if(error)
        {
            return callback(error)
        }
        return callback(null, results[0])
    },
)

},
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
