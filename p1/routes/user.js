const express =require("express");
const {handleDeleteUsers,handleGetAllUsers,handlePostAllUsers,handleUpdateUsers,handleUserById}=require("../controllers/user")

const router = express.Router();

router.route ("/")
.get(handleGetAllUsers)
.post(handlePostAllUsers );


router.route("/:id")
.get(handleUserById)
.patch(handleUpdateUsers)
.delete(handleDeleteUsers)

module.exports=router;