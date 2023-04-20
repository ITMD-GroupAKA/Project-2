window.onload = function() {
  const slideshow = document.getElementById('slideshow');
  const slides = slideshow.querySelectorAll(.'slide');
  let index = 0;
  
  slides[index].classList.add('active');
  setInterval(() => {
	slides[index].classList.add('active');
	index = (index + 1) % slides.length;
	slides[index].classList.add('active');
  }, 2000);
};