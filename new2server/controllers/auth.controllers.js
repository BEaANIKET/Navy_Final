import jwt from 'jsonwebtoken';

export const Login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Please provide email and password',
        });
    }

    try {
        const name = 'Admin'
        const hardcodedEmail = 'admin@example.com';
        const hardcodedPassword = 'example123';

        if (email !== hardcodedEmail || password !== hardcodedPassword) {
            return res.status(401).json({
                message: 'Invalid email or password',
            });
        }

        const token = jwt.sign({ email, name }, 'your_jwt_secret', {
            expiresIn: '1d',
        });

        return res
            .status(200)
            .cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000,
            })
            .json({
                message: 'Login successful',
                data: {
                    name: 'admin',
                    email: hardcodedEmail,
                },
            });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
};

export const Logout = async (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({
        message: 'Logout successful',
    });
}


export const getCurrUser = async (req, res) => {
    try {
        const user = req.user;
        return res.status(200).json({
            message: 'User data fetched successfully',
            data: {
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token',
        });
    }
}