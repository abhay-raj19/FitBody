const User = require("../models/userModel");

const registerUser = async (req, res) => {
  console.log(req.body);
  const { userName, age, email, password, contact } = req.body;

  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    userName,
    email,
    password,
    age,
    contact,
  });

  if (user) {
    try {
      const found = await createAccount(email);
      console.log(found);
      res.status(201).send("Account Created");
    } catch (error) {
      console.error("Error creating email:", error);
      res.status(500).send("Error creating account");
    }
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    console.log(user);
    res.status(200).json({
      name: user.name,
      email: user.email,
      message: "Login successful",
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
};

module.exports = { registerUser, authUser };
