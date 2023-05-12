require("dotenv").config()
const express = require('express')
const app = express()
const userRouter = require("./api/users/router")
app.use(express.json())
//const bodyparser = require ('body-parser')
//app.use(bodyparser.urlencoded({ extended: false}));
//app.use(bodyparser.json())


/*app.post('/login', (req,res)=>
{
  const {email, password} = req.body
  if(email === 'srihasa0307@gmail.com' && password === 'srihasa1234')
  {
    res.send('Login Successfull!')
  }
  else{
    res.status(401).send('Incorrect email or password')

  }
})

app.listen(6001, () => {
  console.log('server listening on port 6001')
})

app.get("/api", (req,res)=>
{
    res.json({
        success: 1,
        message: "This rest API is working"
    })
})*/
app.use("/api/users", userRouter)
app.listen(process.env.APP_PORT, () =>
{
    console.log("Server up and running on PORT: ", process.env.APP_PORT)
})

