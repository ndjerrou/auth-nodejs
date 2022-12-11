const User = require('./users.model');

const jwt = require('jsonwebtoken');
const _ = require('underscore');

module.exports = {
  signUp: async (req, res) => {
    const { email } = req.body;
    // check if email already exists with mongoose
    let user = await User.findOne({
      email,
    });

    if (user) {
      return res.status(400).send({
        ok: false,
        msg: {
          error: 'Email already found',
          details: 'Provide an other email',
        },
      });
    }

    user = new User(req.body);

    try {
      await user.save();
    } catch (err) {
      return res.status(500).send({
        ok: false,
        error: err,
      });
    }

    const token = jwt.sign(
      _.pick(user, ['_id', 'firstName']),
      process.env.PRIVATE_KEY
    );

    res.send({
      ok: true,
      data: token,
    });
  },
};
