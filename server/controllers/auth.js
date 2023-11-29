const Users = require( "../models/user");


// /**
//  * @route POST v1/auth/register
//  * @desc Registers a user
//  * @access Public
//  */

const registerUser = async (req, res) => {  
     // get required variables from request body

    // using es6 object destructing
    const { firstName, lastName, email, password } = req.body;
    try {

        // create an instance of a user
        const newUser = new Users({
            firstName,
            lastName,
            email,
            password,
        });

        // Check if user already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "It seems you already have an account, please log in instead.",
            }); console.log(error);console.log(error);
            res.status(500).json({ msg: "problem area 001", error });
            // save new user into the database
        const savedUser = await newUser.save(); 
        const { password, role, ...user_data } = savedUser._doc;
        res.status(200).json({
            status: "success",
            data: [user_data],
            message:
                "Thank you for registering with us. Your account has been successfully created.",
        }); console.log(error);
        res.status(500).json({ msg: "problem area 002", error });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
    res.end();
}

module.exports = registerUser