var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.registerUser);

router.get('/login', userController.renderLoginForm);


module.exports = router;

