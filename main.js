const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 6000,
  },
});

const contentSwiper = new Swiper(".swiper-2", {
  slidesPerView: "auto",
  spaceBetween: 10,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    dragSize: 200
  },
  breakpoints: {
    
    480: {
      slidesPerGroup: 2,
      spaceBetween: 10
    },

    768: {
      slidesPerGroup: 3,
      spaceBetween: 10
    },
    
    1024: {
      slidesPerGroup: 4,
      spaceBetween: 10
    },

    1290: {
      slidesPerGroup: 6,
      spaceBetween: 10
    }
  }
});

//modal 
const modal = $('.modal');
const modalContainer = $('.modal-container')
const modalShowBtns = $$('.sidebar-btn');
const modalCloseBtn = $('.modal-closep-icon');

const seeMoreBtns = $$('.menu-item.see-more');

const modalClose = () => {
  $('.modal-overlay').style.opacity = "0";
  $('.modal-overlay').style.display = "none";
  $('.modal-closep-icon').style.display = "none";
  $('.modal-container').style.transform = "translateX(-100%)";
  $('.top-header_search-field').classList.remove('onfocus');
}

const modalShow = () => {
  $('.modal-overlay').style.display = "block";
  $('.modal-overlay').style.opacity = "1";
  $('.modal-overlay').style.top = '0';
  $('.modal-closep-icon').style.display = "block";
  $('.modal-container').style.transform = "translateX(0)";
  $('.top-header_search-field').classList.remove('onfocus');
}
for(let modalShowBtn of modalShowBtns){
  modalShowBtn.addEventListener('click', modalShow);
}
  modalCloseBtn.addEventListener('click', modalClose);

  modal.addEventListener('click', modalClose);

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})

//see more btn - done
//get Height - done
const getMoreListHeight = (element) => {
  const childElements = ".menu-item";
  elementHeight = element.querySelectorAll(childElements).length * 41.25 + 15;
  return elementHeight;
}

const setHeigt = (element) => {
  if(element.classList.contains('show')){
    element.style.setProperty('height', getMoreListHeight(element) + 'px');
  }
  else{
    element.style.setProperty('height', '0');
  }
}

const seeMore = (seeMoreBtn, seeMoreContent) => {
  if(document.querySelector('.menu-item.see-more.clicked')){
    seeMoreBtn.querySelector('.see-option').innerHTML = "See All";
  }
  else{
    seeMoreBtn.querySelector('.see-option').innerHTML = "See Less";
  }
  seeMoreBtn.classList.toggle('clicked');
  seeMoreContent.classList.toggle('show');
  setHeigt(seeMoreContent);
}

seeMoreBtns.forEach((seeMoreBtn, index) => {
  index = index + 1;
  seeMoreBtn.addEventListener('click', ()=>seeMore(seeMoreBtn, document.querySelector('.menu-item-list-more-' + index)));
});

$('.search-key-field').addEventListener('focus', () => {
  $('.top-header_search-field').classList.add('onfocus')
  if($('.top-header_search-field.onfocus')){
    $('.modal-overlay').style.display = "block";
    $('.modal-overlay').style.opacity = "1";
    $('.modal-overlay').style.top = $('#wide-screen-header').offsetHeight + 'px';
  }  
})
