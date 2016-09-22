'use strict';

var correctCounter = 0;

function uname() {
  var username = prompt('What is your name?');
  console.log('The username is ' + username);
  alert('Hi ' + username + '! So you want to learn all about me! Please answer the following questions about me with Yes/No or Y/N.');
}
uname();

function work() {
  var highTechJobs = prompt('Have I worked in high-tech companies since the mid 90s?').toUpperCase();
  console.log('highTechJobs is: ' + highTechJobs);
  if (highTechJobs === 'YES' || highTechJobs === 'Y') {
    alert(username + ', you are correct! I\'ve worked at startups in Seattle since 1994.');
    correctCounter += 1;
  } else if (highTechJobs === 'NO' || highTechJobs === 'N') {
    alert(username + ', you are wrong on this one. I\'ve been at high-tech firms in Seattle since 1994.');
  } else {
    alert(username + ', please use Yes/No or Y/N to respond. The correct answer was Yes.');
  }
}
work();

function fired() {
  var everFired = prompt('Have I ever been fired from a job before?').toUpperCase();
  console.log('everFired is: ' + everFired);
  if (everFired === 'NO' || everFired === 'N') {
    alert(username + ', you are correct! I work hard and add value, wherever I\'ve gone.');
    correctCounter += 1;
  } else if (everFired === 'YES' || everFired === 'Y') {
    alert(username + ', nope. My employers have enjoyed my hard work and inquisitive attitude.');
  } else {
    alert(username + ', you have to use Yes/No or Y/N. The correct answer was No, I\'ve never been everFired');
  }
}
fired();

function vic() {
  var vic20 = prompt('I started coding on a VIC-20 in the early 80s?').toUpperCase();
  console.log('vic20 is: ' + vic20);
  if (vic20 === 'YES' || vic20 === 'Y') {
    alert(username + ', you are correct! I used to write 1,000 line programs in BASIC.');
    correctCounter += 1;
  } else if (vic20 === 'NO' || vic20 === 'N') {
    alert(username + ', you\'re off on this one. I started coding in BASIC when I was 10.');
  } else {
    alert(username + ', use Yes/No or Y/N, please. Geek for life. The correct answer was Yes.');
  }
}
vic();

function conceived() {
  var productIdea = prompt('I conceived of and pitched a product idea to my CEO that launched and sold over $1 Billion in revenue?').toUpperCase();
  console.log('q4 is: ' + productIdea);
  if (productIdea === 'NO' || productIdea === 'N') {
    alert(username + ', you are correct. My product idea, RealPlayer Plus, has only made $750 Million since launching in 1997.');
    correctCounter += 1;
  } else if (productIdea === 'YES' || productIdea === 'Y') {
    alert(username + ', I wish. But unfortunately no. My product idea, RealPlayer Plus, only made $750 Million since launching in 1997.');
  } else {
    alert(username + ', please use Yes/No or Y/N. The correct answer was No.');
  }
}
conceived();

function launched() {
  var companyLaunch = prompt('I launched a company, raised a seed round, hired a team of devs, and built a product that had 500 companies using our SaaS app?').toUpperCase();
  console.log('companyLaunch is: ' + companyLaunch);
  if (companyLaunch === 'YES' || companyLaunch === 'Y') {
    alert(username + ', you are correct. It was a fun experience building a company up from nothing. Alas, it never gained the revenue it needed, but I learned a lot.');
    correctCounter += 1;
  } else if (companyLaunch === 'NO' || companyLaunch === 'N') {
    alert(username + ', you are wrong. I did launch it, but it eventually it petered out. But it was a great learning experience.');
  } else {
    alert(username + ', please use Yes/No or Y/N. I did launch it, had fun, and learned a great deal.');
  }
}
launched();

// setup counter for guesses
for (var i = 0; i < 4; i++) {
  var wine = parseInt(prompt('What year is the oldest bottle of wine or port I have in my cellar?'));
  console.log('The wine variable is : ' + wine);
//evaluate guesses against the correct answer
  if (wine === 1938) {
    alert('You are correct.');
    correctCounter += 1;
    break;
  } else if (wine > 1938) {
    alert('You guessed too recent. It\'s an older vintage (ie. lower number). Guess again.');
  } else if (wine < 1938) {
    alert('It\'s not that old of a vintage. It\'s more recent (or higher number). Guess again.');
  } else {
    alert('Did you enter a number?');
  }
}

// establish array of soccer states
var soccerStates = ['WA', 'CT', 'MA', 'IL', 'CO', 'UT', 'CA'];
var socStaSize = soccerStates.length - 1;
var flag = 0;

// setup of guess counter
for (var socGuesses = 0; socGuesses < 6; socGuesses++) {
  var soccerAnswer = prompt('In what states have I seen the U.S. Men\'s Soccer team play? (Use Postal Codes).');
  console.log('The soccerAnswer variable is: ' + soccerAnswer);

// setup of array counter and set flag
  for (var socAnsArr = 0; socAnsArr < socStaSize; socAnsArr++)
    if (soccerAnswer === soccerStates[socAnsArr]) {
      console.log(soccerStates[socAnsArr]);
      flag = 1;
      break;
    }

// evaluate flag
  if (flag === 1) {
    alert('Correct.');
    correctCounter += 1;
    break;
  } else {
    alert('Nope. Try again.');
  }
}

// print out all of the answers
var printer = '';
for (var j = 0; j < soccerStates.length; j++) {
  printer += soccerStates[j] + ' ';
}
alert('The states where I\'ve seen the U.S. Men\'s Soccer team play are: ' + printer);
alert('You had ' + correctCounter + ' out of 7 guesses correct. Well done.');
