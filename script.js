// ---------------------------welcome section-----------------------------
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

next.addEventListener('click', showNextSlide);
prev.addEventListener('click', showPrevSlide);
let autoPlay = setInterval(showNextSlide, 3000);

slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
slider.addEventListener('mouseleave', () => autoPlay = setInterval(showNextSlide, 2000));
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            document.querySelector('nav').classList.add('sticky');
        } else {
            document.querySelector('nav').classList.remove('sticky');
        }
    });

    const icon = document.getElementById('icon');
    const menu = document.querySelector('nav ul');

    icon.addEventListener("click", function () {
        menu.classList.toggle('show');
        icon.classList.toggle('toggle');

        if (icon.classList.contains('toggle')) {
            icon.innerHTML = '<i class="fa-solid fa-times" style="color: #8a8a8a"></i>';
        } else {
            icon.innerHTML = '<i class="fa-solid fa-bars" style="color: #8a8a8a"></i>';
        }
    });

    document.querySelectorAll('nav ul li a').forEach(function (element) {
        element.addEventListener("click", function () {
            document.querySelectorAll('nav ul li a').forEach(function (el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
            menu.classList.remove('show');
            icon.classList.remove('toggle');
            icon.innerHTML = '<i class="fa-solid fa-bars" style="color: #8a8a8a"></i>';
        });
    });
});


// // Params
// let mainSliderSelector = '.main-slider',
//     navSliderSelector = '.nav-slider',
//     interleaveOffset = 0.5;

// // Main Slider
// let mainSliderOptions = {
//       loop: true,
//       speed:1000,
//       autoplay:{
//         delay:3000
//       },
//       loopAdditionalSlides: 10,
//       grabCursor: true,
//       watchSlidesProgress: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       on: {
//         init: function(){
//           this.autoplay.stop();
//         },
//         imagesReady: function(){
//           this.el.classList.remove('loading');
//           this.autoplay.start();
//         },
//         slideChangeTransitionEnd: function(){
//           let swiper = this,
//               captions = swiper.el.querySelectorAll('.caption');
//           for (let i = 0; i < captions.length; ++i) {
//             captions[i].classList.remove('show');
//           }
//           swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
//         },
//         progress: function(){
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             let slideProgress = swiper.slides[i].progress,
//                 innerOffset = swiper.width * interleaveOffset,
//                 innerTranslate = slideProgress * innerOffset;
           
//             swiper.slides[i].querySelector(".slide-bgimg").style.transform =
//               "translateX(" + innerTranslate + "px)";
//           }
//         },
//         touchStart: function() {
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             swiper.slides[i].style.transition = "";
//           }
//         },
//         setTransition: function(speed) {
//           let swiper = this;
//           for (let i = 0; i < swiper.slides.length; i++) {
//             swiper.slides[i].style.transition = speed + "ms";
//             swiper.slides[i].querySelector(".slide-bgimg").style.transition =
//               speed + "ms";
//           }
//         }
//       }
//     };
// let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// // Navigation Slider
// let navSliderOptions = {
//       loop: true,
//       loopAdditionalSlides: 10,
//       speed:1000,
//       spaceBetween: 5,
//       slidesPerView: 5,
//       centeredSlides : true,
//       touchRatio: 0.2,
//       slideToClickedSlide: true,
//       direction: 'vertical',
//       on: {
//         imagesReady: function(){
//           this.el.classList.remove('loading');
//         },
//         click: function(){
//           mainSlider.autoplay.stop();
//         }
//       }
//     };
// let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// // Matching sliders
// mainSlider.controller.control = navSlider;
// navSlider.controller.control = mainSlider;


     


      document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 10,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        });
      });
      
    document.addEventListener('DOMContentLoaded', function() {
        // Select all anchor links
        const links = document.querySelectorAll('a[href^="#"]');

        // Add click event listener to each link
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior

                // Get the target element
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Smooth scroll to the target element
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    });








    // ----------------------------------------VIDEO SECTION CODE----------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
      const videoWrappers = document.querySelectorAll('.video-wrapper');
    
      const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };
    
      const checkAndPlayVideos = () => {
        videoWrappers.forEach(wrapper => {
          const iframe = wrapper.querySelector('iframe');
          if (isInViewport(wrapper) && !wrapper.classList.contains('active')) {
            wrapper.classList.add('active');
          }
        });
      };
    
      window.addEventListener('scroll', checkAndPlayVideos);
      checkAndPlayVideos(); // Check on page load
    
      // Handle hover to show custom options
      videoWrappers.forEach(wrapper => {
        const overlay = wrapper.querySelector('.video-overlay');
        wrapper.addEventListener('mouseenter', () => {
          overlay.style.opacity = '0'; // Hide overlay on hover
        });
    
        wrapper.addEventListener('mouseleave', () => {
          overlay.style.opacity = '1'; // Show overlay when not hovering
        });
      });
    });
    

  //Open whatsapp and Email
  document.querySelector('.email-btn').addEventListener('click', function() {
    window.location.href = 'mailto:example@example.com';
});

document.querySelector('.whatsapp-btn').addEventListener('click', function() {
    window.location.href = 'https://wa.me/+923554477788';
});






document.getElementById('bookingForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const reservationDetails = {
      name: formData.get('name'),
      email: formData.get('email'),
      checkin: formData.get('checkin'),
      checkout: formData.get('checkout'),
      guests: formData.get('guests'),
  };

  try {
      const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reservationDetails),
      });

      if (response.ok) {
          alert('Reservation details sent successfully!');
      } else {
          alert('Failed to send reservation details.');
      }
  } catch (error) {
      console.error(error);
      alert('Error sending reservation details.');
  }
});





