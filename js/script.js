/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'I like things to happen and if they don\'t happen, I like to make them happen',
    source: 'Winston Churchill',
    citation: 'Goodreads',
    year: 1941,
  },
  {
    quote: 'All our dreams can come true, if we have the courage to pursue them.',
    source: 'Walt Disney',
    citation: 'Goodreads',
    year: 1975,
  },
  {
    quote: "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
    source: "Steve Jobs",
    citation: "Steve Jobs in His Own Words",
    year: 2001,
  },
  {
    quote: "Quality is much better than quantity. One home run is much better than two doubles.",
    source: "Steve Jobs",
    citation: "Bloomberg BusinessWeek",
    year: 2006,
  },
  {
    quote: 'It\'s hard to beat a person who never gives up.',
    source: 'Babe Ruth',
    citation: 'Goodreads',
    year: 1940,
  },
  {
    quote: 'Mama always said life was like a box of chocolates. You never know what you\'re gonna get.',
    source: 'Forrest Gump',
    citation: 'Forrest Gump',
    year: 1994,
  },
  {
    quote: 'Life is what happens to you while you\'re busy making other plans.',
    source: 'John Lennon',
    citation: 'Beautiful Boy',
    year: 1980,
  },
  {
    quote: 'To infinity and beyond!',
    source: 'Buzz Lightyear',
    citation: 'Toy Story',
    year: 1995,
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  return quotes[getRandomInt(quotes.length)];
};

/***
 * `printQuote` function
***/
function printQuote() {
  // Get random quote.
  let quote = getRandomQuote();

  // Set quote, source, citation, and year to quote data.
  document.querySelector("#quote-box").innerHTML = 
  `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}<span class="citation">${quote.citation}</span><span class="year">${quote.year}</span></p>
  `
  // Change background color.
  randomBackgroundColor();
};

// Changes bacgkround color to a random RGB value.
function randomBackgroundColor() {
  document.querySelector("body").style.backgroundColor = 
  `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
}

// Generates a random number with max exclusive.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Automatically calls printQuote every 5000 milliseconds.
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);