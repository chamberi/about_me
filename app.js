'use strict';

var username = prompt('What is your name?');
  console.log('The username is ' + username);
alert('Hi ' + username + '! So you want to learn all about me! Please answer the following questions about me with Yes/No.')

var q1 = prompt('Have I worked in high-tech companies since the mid 90s?').toUpperCase();
  console.log('q1 is: ' + q1);
  if (q1 === 'YES' || 'Y') {
    alert(username + ', you are correct! I\'ve worked at startups in Seattle since 1994.');
  }
  else if (q1 === 'NO' || 'N') {
    alert(username + ', you are wrong on this one. I\'ve been at high-tech firms in Seattle since 1994.');
  }
  else {
    alert(username + ', please use Yes or No to respond. The correct answer was Yes.');
  }

var q2 = prompt('Have I been fired from a job before?').toUpperCase();
  console.log('q2 is: ' + q2);
  if (q2 === 'NO' || 'N') {
    alert(username + ', you are correct! I work hard and add value, wherever I\'ve gone.');
  }
  else if (q2 === 'YES' || 'Y') {
    alert(username + ', nope. My employers have enjoyed my hard work and inquisitive attitude.');
  }
  else {
    alert(username + ', you have to use Yes or No. The correct answer was No, I\'ve never been fired');
  }

var q3 = prompt('I started coding on a VIC-20 in the early 80s?').toUpperCase();
  console.log('q3 is: ' + q3);
  if (q3 === 'YES' || 'Y') {
    alert(username + ', you are correct! I used to write 1,000 line programs in BASIC.');
  }
  else if (q3 === 'NO' || 'N') {
    alert(username + ', you\'re off on this one. I started coding in BASIC when I was 10.');
  }
  else {
    alert(username + ', use Yes or No, please. Geek for life. The correct answer was Yes.');
  }

var q4 = prompt('I conceived of and pitched a product idea to my CEO that launched and sold over $1 Billion in revenue?').toUpperCase();
  console.log('q4 is: ' + q4);
  if (q4 === 'NO' || 'N') {
    alert(username + ', you are correct. My product idea, RealPlayer Plus, has only made $750 Million since launching in 1997.');
  }
  else if (q4 === 'YES' || 'Y') {
    alert(username + ', I wish. But unfortunately no. My product idea, RealPlayer Plus, only made $750 Million since launching in 1997.')
  }
  else {
    alert(username + ', please use Yes or No. The correct answer was No.');
  }

var q5 = prompt('I launched a company, raised a seed round, hired a team of devs, and built a product that had 500 companies using our SaaS app?').toUpperCase();
  console.log('q5 is: ' + q5);
  if (q5 === 'YES' || 'Y') {
    alert(username + ', you are correct. It was a fun experience building a company up from nothing. Alas, it never gained the revenue it needed, but I learned a lot.');
  }
  else if (q5 === 'NO' || 'N') {
    alert(username + ', you are wrong. I did launch it, but it eventually it petered out. But it was a great learning experience.');
  }
  else {
    alert(username + ', please use Yes or No. I did launch it, had fun, and learned a great deal.');
  }
