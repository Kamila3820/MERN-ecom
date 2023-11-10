const User = require('../../models/user');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) =>{

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: req.body.email }).exec();
    
        if (existingUser) {
          return res.status(400).json({
            message: 'Admin already registered',
          });
        }
    
        // Create a new user
        const { firstName, lastName, email, password } = req.body;
        const randomUsername = Math.random().toString(36).substring(2); // Generate a random username
    
        const newUser = new User({
          firstName,
          lastName,
          email,
          password,
          userName: randomUsername,
          role: 'admin'
        });
    
        // Save the new user to the database
        const savedUser = await newUser.save();
    
        if (savedUser) {
          return res.status(201).json({
              message: "Admin created successfully..",// user: savedUser,
          });
        } else {
          return res.status(400).json({
            message: 'User could not be saved to the database',
          });
        }
      } catch (error) {
        console.error('Signup error:', error); // Log the error for debugging
        return res.status(500).json({
          message: 'Internal server error',
        });
      }
}

exports.signin = async (req, res) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: req.body.email }).exec();

    if (existingUser) {
      if (existingUser.authenticate(req.body.password) && existingUser.role === 'admin') {
        const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        });
        const { _id, firstName, lastName, email, role, fullName } = existingUser;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({ message: 'Invalid password' });
      }
    } else {
      return res.status(400).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Signin error:', error); // Log the error for debugging
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
    //jwt.decode()
}
