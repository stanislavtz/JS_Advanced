function solve() {
  let scores = 0;
  let correctAnswersList = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let sectionsList = document.getElementsByTagName('section');
  let counter = 0;
  
  let tempClick = document.getElementById('quizzie');
  tempClick.addEventListener('click', (e) => {
    if (e.target.className === 'answer-text') {
      let answer = e.target.innerHTML;
      if (correctAnswersList.includes(answer)) {
        scores++;
      }

      sectionsList[counter].style.display = 'none';
      counter++;
      if (counter < sectionsList.length) {
        sectionsList[counter].style.display = 'block';
      }

      if (counter === 3) {
        document.getElementById('results').style.display = 'block';
        
        if (scores === 3) {
          document.getElementById('results').innerHTML = '<h1>You are recognized as top JavaScript fan!</h1>';
        }
        else {
          document.getElementById('results').innerHTML = `<h1>You have ${scores} right answers</h1>`;
        }
      }
    }
  });
}
