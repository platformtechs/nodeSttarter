import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    // eslint-disable-next-line no-param-reassign
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: 'Auth failed',
    });
  }
};
