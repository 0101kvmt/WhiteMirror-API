import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

const TOKEN_TIME = 60 * 60 * 24 * 365; //1 Year
const SECRET = 'SECRETCONST';

let generateAccessToken = (req, res) => {
  let returnedUser = req.user.toObject();
  req.token = req.token || {};
  req.token = jwt.sign({
    _id: req.user._id,
  }, SECRET, {
    expiresIn: TOKEN_TIME
  });

  res.status(200).json({
    status: 'Success!',
    message: 'User authenticated successfully.',
    data: {
      token: req.token,
      user: returnedUser
    }
  });
};

module.exports = {
  generateAccessToken
};
