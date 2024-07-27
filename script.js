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

