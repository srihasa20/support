const {create, getUserByUserId, getUsers, updateUser, deleteUser,getUserByUserEmail } = require("./service")

const{ genSaltSync, hashSync, compareSync} = require("bcrypt")

const{ signin} = require("jsonwebtoken")


module.exports ={
Login: (req, res)=>
{
    const body = req.body;
    getUserByUserEmail(body.email, (err, results)=>
    {
        if(err)
        {
            console.log(err)
        }

        if(!results.length){
            return res.json({
                success: 0,
                data: "Invalid email or password"
            })
        }

        results = results[0]


        const result = compareSync(body.password, results.password)


        if(result)
        {
            results.password = undefined
            const jsontoken = signin({result: results})
            return res.json(
                {
                    success: 1,
                    message:"login successfully",
                    token: jsontoken
                })
            }
            else{
                return res.json({
                    success: 0,
                    data: "Invalid email or passwords"
                })
            }
    })
}


}
