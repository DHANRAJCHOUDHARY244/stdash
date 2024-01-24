const jwt = require('jsonwebtoken');
const secretKey = 'bjbhqebiubden';

function verifyToken(req, res, next) {
  const token = req.body.token;

  try {
    // Verify the token 
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}
 
module.exports = verifyToken;
