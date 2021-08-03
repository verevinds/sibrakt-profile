import connectDB from '../../mongodb';
import User from '../../mongodb/models/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const isValid = name && email && password;

    if (isValid) {
        try {
          // Hash password to store it in DB
          var passwordhash = password;
          var user = new User({
            name,
            email,
            password: passwordhash,
          });
          // Create new user
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);