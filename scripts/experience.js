function toggleSkills(nth) {
    const quote = document.getElementsByClassName('quote').item(nth);
    const skillsContent = document.getElementsByClassName('skillsContent').item(nth);
    const clickMe = quote.querySelector('.clickMe');
    // clickMe.classList.toggle('hidden');
    quote.classList.toggle('hidden');
    skillsContent.classList.toggle('hidden');
  }
  