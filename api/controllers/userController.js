const User = require('../models/users');
const asyncHandler = require('../middleware/asyncHandler');
const CustomError = require("../errors/CustomError");
const generateToken = require("../utils/generateToken");


//@desc AUth user/set token
//route POST api/users/login
//@access Public 
const loginUser= asyncHandler(async(req,res)=>{
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPasswords(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
            throw new CustomError(401,false,"Invalid credentials");
    }
});

//@desc logout user
//route POST api/users/logout
//@access Public  
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'User Logged out' });
});

module.export={
    loginUser,
    logoutUser,
}