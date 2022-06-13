
(function(){
 const slides = [
     '<div class="slide"><img src"img/photo_marina.jpg" alt="big"></div>',
     '<div class="slide"><img src="img/photo_marina.jpg" alt="small"></div>',
     '<div class="slide"><img src="img/photo_marina.jpg" alt="ace"></div>'
     ];
    let currentSlide = 0;

     function renderCarousel() {
      const carouselContainer = document.querySelector(".carousel_products");
    carouselContainer.innerHTML =slides[currentSlide];
     }

     function nextSlide() {
         currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
       renderCarousel();
    
     }

     setInterval(nextSlide, 3000);
})();