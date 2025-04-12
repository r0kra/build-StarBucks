const burger = document.querySelector('#btn-burger');
const mobileContainer = document.querySelector('#mobile-container');
const proccessVideo = document.querySelector('#video');
const playBnt = document.querySelector('#play');
const stopBnt = document.querySelector('#stop');
const pauseBnt = document.querySelector('#pause');
const madeBnt = document.querySelector('#how-made');
const roasterBnt = document.querySelector('#roaster');
const tasteBnt = document.querySelector('#taste');

playBnt.addEventListener('click', () => {
  playVideo();
  console.log('play');
})

pauseBnt.addEventListener('click', () => {
  pauseVideo();
  console.log('pause');
})

stopBnt.addEventListener('click', () => {
  stopVideo();
  console.log('stop');
})

madeBnt.addEventListener('click', () => {
  currentHowIsMade();
})

roasterBnt.addEventListener('click', () => {
  currentRoaster();
})

tasteBnt.addEventListener('click', () => {
  currentTaste();
})

function playVideo(){
  proccessVideo.play();
}

function stopVideo(){
  proccessVideo.pause();
  proccessVideo.currentTime = 0;
}

function pauseVideo(){
  proccessVideo.pause();
}

function currentHowIsMade(){
  proccessVideo.currentTime = 65;
}

function currentRoaster(){
  proccessVideo.currentTime = 128;
}

function currentTaste(){
  proccessVideo.currentTime = 170;
}


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileContainer.classList.toggle('show');
});

// modal

const modalTrigers = document.querySelectorAll('[data-triger-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]');
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");


function showModal(){
  body.classList.add('overflow-hidden');
  overlay.classList.add('show');
}

modalTrigers.forEach(item => {
  item.addEventListener('click', function(event){
    event.preventDefault();

    const dataTriger = item.getAttribute('data-triger-modal');
    const modal = document.querySelector('#' + dataTriger);

    showModal();

    if (modal.classList.contains('video-procecess')) {
      modal.classList.add('show')
      playVideo()
    } else {
        modal.classList.add('show')
    }
  })
});

function closeModal(){
  const openModal = document.querySelector('.modal.show');
  body.classList.remove('overflow-hidden');
  overlay.classList.remove('show');
  openModal.classList.remove("show");
  stopVideo();
}

modalClose.forEach(item => {
  item.addEventListener('click', closeModal)
});

// Swiper
const swiperProduct = new Swiper('.swiper-product', {
slidesPerView: 1,
loop: true,
spaceBetween: 24,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

breakpoints: {

    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    
    1026: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    1233: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
     
    1560: {
      slidesPerView: 4,
      spaceBetween: 48,
    }
}
});

// var init = false;
// var swiperEvents;
// function swiperCard() {
//   if (window.innerWidth <= 768) {
//     if (!init) {
//       init = true;
//       swiperEvents = new Swiper(".swiper-events", {
//         direction: "horizontal",
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 32,
//         // pagination: {
//         //   el: ".swiper-pagination",
//         //   clickable: true,
//         // },
//       });
//     }
//   } else if (init) {
//     swiperEvents.destroy();
//     init = false;
//   }
// }
// swiperCard();
// window.addEventListener("resize", swiperCard);

//mobile only swiper

let eventSwiper;
let swiperEventsMediaQuery = window.matchMedia("(max-width: 1025px)");

function checkedBreakpoint(swiperEventsMediaQuery){
if(swiperEventsMediaQuery.matches){
  if(!eventSwiper){
    eventSwiper = new Swiper(".swiper-events", {
      loop: true,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-event-button-next",
        prevEl: ".swiper-event-button-prev",
      },
    });
  }
  else{
    if(eventSwiper){
      eventSwiper.destroy(true,true);
      eventSwiper=null;
    }
  }
}
}

checkedBreakpoint(swiperEventsMediaQuery);

swiperEventsMediaQuery.addEventListener("change",checkedBreakpoint);


// let eventsSwiper = new Swiper(".swiper-events", {
//   loop: true,
//   spaceBetween: 24,
//   navigation: {
//     nextEl: ".swiper-event-button-next",
//     prevEl: "swiper-event-button-prev",
//   },
// });

// let swiperEventsMediaQuery = window.matchMedia("(max-width: 1025px)");
// function checkedBrakpoint(swiperEventsMediaQuery){
//   if(swiperEventsMediaQuery.matches){
//     return;
//   }
//   else{
//     eventsSwiper.destroy();
//   }
// }

// checkedBrakpoint(swiperEventsMediaQuery);
// window.addEventListener("change", checkedBrakpoint(swiperEventsMediaQuery));