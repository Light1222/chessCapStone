var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render("choices");
});

/* get turn */
router.get('/turn', function(req, res) {
  let playerChoice = req.query.choice;
  let pcChoice = getPcChoice(['queen','rook','bishop', 'knight', 'pawn']);
  // let pcChoice = getPcChoice(['rock','paper','scissors']);
  let winner = pickWinner(playerChoice, pcChoice);
  res.render('results', {
    playerChoice: playerChoice,
    pcChoice: pcChoice,
    winner: winner
  });
})

module.exports = router;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getPcChoice(options){
  let choiceIndex = getRandomInt(5);
  return options[choiceIndex];
}

function pickWinner(playerChoice, pcChoice) {
  if (playerChoice === pcChoice) {
    return 'draw';
  }
  if (playerChoice === 'queen') {
    return 'Player'
  }
  if (playerChoice === 'rook') {
    if (pcChoice === 'queen') {
      return 'PC'
    }
    if (pcChoice !== 'queen') {
      return 'Player'
    }
  }
  if (playerChoice === 'bishop') {
    if (pcChoice === 'queen' || 'rook') {
      return 'PC'
    }
    if (pcChoice !== 'queen' || 'rook') {
      return 'Player'
    }
  }
  if (playerChoice === 'knight') {
    if (pcChoice === 'queen' || 'rook' || 'bishop') {
      return 'PC'
    }
    if (pcChoice === 'pawn') {
      return 'Player'
    }
  }
  if (playerChoice === 'pawn') {
    return 'PC'
  }
}

router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.register);
router.get('/login', userController.renderLogin);

router.post('/login', userController.login);
router.get('/logout', userController.logout);


module.exports = router;

