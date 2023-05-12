const { Login } = require("./controller")
const router =require("express").Router()

router.post("/login", Login)

module.exports = router
