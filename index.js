const express = require('express')
const app = express()
const bodyparser = require ('body-parser')
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json())


app.post('/login', (req,res)=>
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