document.getElementById('chapter1-btn').addEventListener('click', function() {
    document.getElementById('chapter-section').style.display = 'none';
    document.getElementById('video-section').style.display = 'block';
  });
  
  const optionButtons = document.querySelectorAll('.option-btn');
  const feedbackDiv = document.getElementById('feedback');
  const lawEducationDiv = document.getElementById('law-education');
  const nextChapterBtn = document.getElementById('next-chapter-btn');
  
  optionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const answer = this.getAttribute('data-answer');
      if (answer === 'correct') {
        feedbackDiv.innerHTML = 'Correct! Barendra Kumar Ghose was acquitted.';
        feedbackDiv.classList.add('correct');
      } else {
        feedbackDiv.innerHTML = 'Wrong! Try again or read about the relevant laws below.';
        feedbackDiv.classList.add('wrong');
      }
      feedbackDiv.style.display = 'block';
      lawEducationDiv.style.display = 'block';
      nextChapterBtn.style.display = 'block';
    });
  });
  
  nextChapterBtn.addEventListener('click', function() {
    alert('Next chapter will be added soon!');
  });