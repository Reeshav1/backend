const express = require("express");
const app = express();
const port = 8000;
const userRouter=require("./routes/user")
const {connectMongoDB}=require("./connection")

connectMongoDB("mongodb://127.0.0.1:27017/uris")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));
  
app.use(express.urlencoded({ extended: true }));

app.use("/user",userRouter)

app.listen(port, () => {
  console.log("Server started...");
});