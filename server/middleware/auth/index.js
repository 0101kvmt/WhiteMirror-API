import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

const TOKEN_TIME = 60 * 60 * 24 * 365;

const SECRET = "SECRETCONST"

let authenticate = expressJwt({ secret: SECRET });

let generateAccessToken = (req, res, next) => {
  req.token = req.token || {};
  req.token = jwt.sign({
    id: req.user.id,
  }, SECRET, {
    expiresIn: TOKEN_TIME
  });
  next();
};

let respond = (req, res) => {
  let returnedUser = req.user.toObject();

  delete returnedUser.salt
  delete returnedUser.hash
  delete returnedUser.__v

  res.status(200).json({
    status: 'Success!',
    message: 'User authenticated succesfully.',
    data: {
      token: req.token,
      user: returnedUser,
    }
  });
};

module.exports = {
  authenticate,
  resond
}
