const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/usir")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  first: {
    type: String,
  },
  last: {
    type: String,
  },
  email: {
    type: String,
  },
});

// Model
const User = mongoose.model("user1", userSchema);

app.get("/users", async (req, res) => {
    const users = await User.find();
    const html = `
    <ul>
        ${users.map(user => `
            <li>${user.first} - ${user.email}</li>
        `).join("")}
    </ul>
    `;
    return res.send(html);
});
app.get("/api/users", async (req, res) => {
    const users = await User.find();
    return res.json(users);
});

// Route
app.post("/users", async (req, res) => {
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
});


app.route("/users/:id")
.get(async(req,res)=>{
  const user=await User.findById(req.params.id);
  return res.json(user);
})
.patch( async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res.json(user);
})
.delete(async(req,res)=>{
  const user = await User.findByIdAndDelete(req.params.id)
  return res.json(user);
})

app.listen(port, () => {
  console.log("Server started...");
});