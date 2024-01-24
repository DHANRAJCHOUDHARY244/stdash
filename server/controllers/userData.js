const jwt = require('jsonwebtoken');
const secretKey = 'bjbhqebiubden';

exports.getUserData=async(req,res)=>{
    const jwtCookie = req.body.token;
    if (!jwtCookie) {
        res.status(404).json({ error: 'Cookie not found' });
    } else {
        jwt.verify(jwtCookie, secretKey, (err, decoded) => {
            res.status(201).json({id:decoded.id,email:decoded.email,name:decoded.name})
        })
    }
}