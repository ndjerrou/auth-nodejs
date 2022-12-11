const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.URL_DB);

    console.log('Connected to the DB');
  } catch (err) {
    console.error(err);
  }
};
