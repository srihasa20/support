const { createUser, getUserByUserId, getUsers, updateUser, deleteUser, Login } = require("./controller")
const router =require("express").Router()

/*router.post("/", createUser)
router.get("/", getUsers)
router.get("/:id", getUserByUserId)
router.patch("/", updateUser)
router.delete("/", deleteUser)*/
router.post("/login", Login)




module.exports = router
