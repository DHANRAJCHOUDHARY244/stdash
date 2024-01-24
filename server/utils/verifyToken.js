const jwt = require('jsonwebtoken');
const secretKey = 'bjbhqebiubden';

function verifyToken(req, res, next) {
  const token = req.cookies.jwt;
  try {
    // Verify the token 
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach the decoded user to the request object
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = verifyToken;
