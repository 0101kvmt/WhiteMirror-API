import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

const TOKEN_TIME = 60 * 60 * 24 * 365 * 2;

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

let verifyAuth = (req, res) => {
  let token = req.params.id;
  let secret = SECRET;
  jwt.verify(token, secret, function(err, decoded) {
    if(err) {
      res.status(400).json({
        status: 'Error!',
        message: 'Access Token is invalid',
        data: {
          valid: false
        }
      })
    } else {
      console.log(req.token);
      res.status(200).json({
        status: 'Success!',
        message: 'Access Token is valid',
        data: {
          decoded: decoded,
          valid: true
        }
      });
    }
  });
}

module.exports = {
  generateAccessToken,
  authenticate,
  respond,
  verifyAuth
}
