const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, Login } = require("./controller")
const router =require("express").Router()

router.post("/login", Login)

module.exports = router
