const User=require("../models/user")


async function  handleGetAllUsers(req,res){
    const users = await User.find();
    return res.json(users)
}

async function  handlePostAllUsers(req,res){
  try {
    const body = req.body;
    const result = await User.create({
      first: body.first,
      last: body.last,
      email: body.email,
    });

    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
}
async function  handleUpdateUsers(req,res){
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
}

async function handleDeleteUsers(req,res){
    const user = await User.findByIdAndDelete(req.params.id)
  return res.json(user);
}

async function handleUserById(req,res){
  const user=await User.findById(req.params.id);
  return res.json(user)
}

module.exports ={
    handleGetAllUsers,
    handlePostAllUsers,
    handleUpdateUsers,
    handleDeleteUsers,
    handleUserById
}