'use strict';

var username = prompt('What is your name?');
  console.log('The username is ' + username);
alert('Hi ' + username + '! So you want to learn all about me! Please answer the following questions about me with Yes/No or Y/N.')

var answerOne = prompt('Have I worked in high-tech companies since the mid 90s?').toUpperCase();
  console.log('answerOne is: ' + answerOne);
  if (answerOne === 'YES' || answerOne === 'Y') {
    alert(username + ', you are correct! I\'ve worked at startups in Seattle since 1994.');
  } else if (answerOne === 'NO' || answerOne === 'N') {
    alert(username + ', you are wrong on this one. I\'ve been at high-tech firms in Seattle since 1994.');
  } else {
    alert(username + ', please use Yes/No or Y/N to respond. The correct answer was Yes.');
  }

var answerTwo = prompt('Have I been fired from a job before?').toUpperCase();
  console.log('answerTwo is: ' + answerTwo);
  if (answerTwo === 'NO' || answerTwo === 'N') {
    alert(username + ', you are correct! I work hard and add value, wherever I\'ve gone.');
  } else if (answerTwo === 'YES' || answerTwo === 'Y') {
    alert(username + ', nope. My employers have enjoyed my hard work and inquisitive attitude.');
  } else {
    alert(username + ', you have to use Yes/No or Y/N. The correct answer was No, I\'ve never been fired');
  }

var answerThree = prompt('I started coding on a VIC-20 in the early 80s?').toUpperCase();
  console.log('answerThree is: ' + answerThree);
  if (answerThree === 'YES' || answerThree === 'Y') {
    alert(username + ', you are correct! I used to write 1,000 line programs in BASIC.');
  } else if (answerThree === 'NO' || answerThree === 'N') {
    alert(username + ', you\'re off on this one. I started coding in BASIC when I was 10.');
  } else {
    alert(username + ', use Yes/No or Y/N, please. Geek for life. The correct answer was Yes.');
  }

var answerFour = prompt('I conceived of and pitched a product idea to my CEO that launched and sold over $1 Billion in revenue?').toUpperCase();
  console.log('q4 is: ' + answerFour);
  if (answerFour === 'NO' || answerFour === 'N') {
    alert(username + ', you are correct. My product idea, RealPlayer Plus, has only made $750 Million since launching in 1997.');
  } else if (answerFour === 'YES' || answerFour === 'Y') {
    alert(username + ', I wish. But unfortunately no. My product idea, RealPlayer Plus, only made $750 Million since launching in 1997.')
  } else {
    alert(username + ', please use Yes/No or Y/N. The correct answer was No.');
  }

var answerFive = prompt('I launched a company, raised a seed round, hired a team of devs, and built a product that had 500 companies using our SaaS app?').toUpperCase();
  console.log('answerFive is: ' + answerFive);
  if (answerFive === 'YES' || answerFive === 'Y') {
    alert(username + ', you are correct. It was a fun experience building a company up from nothing. Alas, it never gained the revenue it needed, but I learned a lot.');
  } else if (answerFive === 'NO' || answerFive === 'N') {
    alert(username + ', you are wrong. I did launch it, but it eventually it petered out. But it was a great learning experience.');
  } else {
    alert(username + ', please use Yes/No or Y/N. I did launch it, had fun, and learned a great deal.');
  }
