const router = require('express').Router();
const User = require('./user.model');

router.route('/').post((req, res) => {
    User.find()
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const email = req.body.email;
  User.find({email:email})
  .then(user => res.json(user))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rand').post((req, res) => {
  User.aggregate()
  .then(test => res.json(test))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const fullname = req.body.fullname
  const password = req.body.password
  const email  = req.body.email
  const phone = req.body.phone
  const code = req.body.code
  const Account = req.body.Account
  const creditunit = req.body.creditunit

  const userData = new User({
    fullname,password,email,phone,code,Account,creditunit});

  userData.save()
    .then(() => res.json('User Registration sucessful!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const test = req.body.test;
  User.findOneAndRemove({"test":test})
  
    .then(() => res.json('user Removed.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/up').post((req, res) => {
  const user = req.body.user
  User.findOne({user:user})
    .then(user => {
      user.user = req.body.fullname;
      user.password = req.body.password;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.code = req.body.code;
      user.Account = req.body.Account;
      user.sys = req.body.ds12;

      user.save()
        .then(() => res.json('user updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;