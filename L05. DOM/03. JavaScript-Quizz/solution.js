function solve() {
  let scores = 0;
  let counter = 0;
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let result = document.querySelector('#results .results-inner h1');
  let sections = Array.from(document.getElementsByTagName('section'));

  for (const section of sections) {
    let answers = Array.from(section.getElementsByTagName('p'));
    answers.forEach(answer => answer.addEventListener('click', calculateScores));

    function calculateScores() {
      counter++;

      if (correctAnswers.includes(this.textContent)) {
        scores++;
      }

      section.style.display = 'none';
      section.nextElementSibling.style.display = 'block';

      if (counter === correctAnswers.length) {
        result.parentElement.parentElement.style.display = 'block';
        result.textContent = scores === correctAnswers.length ? `You are recognized as top JavaScript fan!` : `You have ${scores} right answers`;
      }
    }
  }
}