function clearAll() {
  const memeContainer = document.querySelector(".meme-content");
  const jokeContainer = document.querySelector(".joke-content");
  const quoteContainer = document.querySelector(".quote-content");
  const riddleContainer = document.querySelector(".riddle-content");

  memeContainer.innerHTML = "";
  jokeContainer.innerHTML = "";
  quoteContainer.innerHTML = "";
  riddleContainer.innerHTML = "";
}

function showMeme() {
  // Value is a string representing image URL
  const randomMemeUrl = getRandomData("memes");
  const container = document.querySelector(".meme-content");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", randomMemeUrl);

  clearAll();

  container.appendChild(newImg);
}

function showJoke() {
  // Value is a string representing the joke
  const randomJokeText = getRandomData("jokes");

  const newP = document.createElement("p");
  newP.textContent = randomJokeText;

  clearAll();

  document.querySelector(".joke-content").appendChild(newP);
}

function showQuote() {
  // Value should be in format: {quote: '', author: '' }
  const randomQuote = getRandomData("quotes");

  const quote = document.createElement("p");
  const author = document.createElement("p");
  quote.textContent = randomQuote.quote;
  author.textContent = "- " + randomQuote.author;

  clearAll();

  const container = document.querySelector(".quote-content");
  container.appendChild(quote);
  container.appendChild(author);
}

function showRiddle() {
  // Value should be in format: { question: '', answer: '' }
  const randomRiddle = getRandomData("riddles");

  const riddleContainer = document.querySelector(".riddle-content");

  const newRiddleText = document.createElement("p");
  const newRiddleAnswer = document.createElement("p");

  newRiddleText.textContent = randomRiddle.question;
  newRiddleAnswer.textContent = "- " + randomRiddle.answer;
  newRiddleAnswer.setAttribute("id", "riddle-answer");

  clearAll();

  newRiddleAnswer.hidden = true;

  riddleContainer.appendChild(newRiddleText);
  riddleContainer.appendChild(newRiddleAnswer);
}

function revealAnswers() {
  const riddleContainer = document.querySelector(".riddle-content");
  const riddle = riddleContainer.querySelector("p");
  const answer = document.querySelector("#riddle-answer");

  if (riddle && answer.hidden) {
    answer.hidden = false;
  } else if (riddle) {
    alert('The answer is already revealed"');
  } else {
    alert("There is no riddle to reveal the answer to!");
  }
}

function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

