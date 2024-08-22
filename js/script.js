// Part of Selectors
const ArrayOfArticles=Array.from(document.querySelectorAll("#services article"));
console.log(ArrayOfArticles);

const linkOfImages="./image.json";
// Part of sliders
const swiper = new Swiper('.swiper-0', {
    loop: true,
  navigation: {
    nextEl: '.swiper-button-next-0',
    prevEl: '.swiper-button-prev-0',
  },
  });

  const swiper1 = new Swiper('.swiper-1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
    },
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
    slidesPerView: 1,
    spaceBetween:true,
    breakpoints: {
      640: {
          slidesPerView: 2,
          
      },
      768: {
          slidesPerView: 3,
          spaceBetween:10
          
      },
      1024: {
          slidesPerView: 4,
          spaceBetween:28
          
      },
  },
  });

  swiper.on("slideChangeTransitionStart", function() {
    const slides = document.querySelectorAll(".swiper-hero-section .swiper-slide");
    slides.forEach(slide => {
      slide.querySelector(".info b").classList.remove("fade");
      slide.querySelector(".info h2").classList.remove("fade");
      slide.querySelector(".info p").classList.remove("fade");
      slide.querySelector(".info a").classList.remove("fade");
  
      slide.querySelector(".info b").style.opacity = "0";
      slide.querySelector(".info h2").style.opacity = "0";
      slide.querySelector(".info p").style.opacity = "0";
      slide.querySelector(".info a").style.opacity = "0";
    });
  });
  
  swiper.on("slideChangeTransitionEnd", function() {
    const currentSlide = document.querySelector(".swiper-slide-active");
    
    const Belement = currentSlide.querySelector(".info b");
    const h2Element = currentSlide.querySelector(".info h2");
    const pElement = currentSlide.querySelector(".info p");
    const link= currentSlide.querySelector(".info a");
  
    setTimeout(() => {
      Belement.classList.add("fade");
      Belement.style.opacity = "1";
    }, 50);
  
    setTimeout(() => {
      h2Element.classList.add("fade");
      h2Element.style.opacity = "1";
    }, 150);
  
    setTimeout(() => {
      pElement.classList.add("fade");
      pElement.style.opacity = "1";
    }, 250);
    setTimeout(() => {
      link.classList.add("fade");
      link.style.opacity = "1";
    }, 350);
  });
// Functions
(async function getImages(){
  let response= await fetch(linkOfImages);
  const data= await response.json();
  localStorage.setItem("images",JSON.stringify(data))
})()
async function addGalerie(index){
  if(!"images" in localStorage){
    await getImages();
  }
  let Images=JSON.parse(localStorage.getItem("images"));
  const arrayOfImages=Images[index].images;

  const lightboxContainer=document.createElement("div");
  lightboxContainer.style.display="none";

  arrayOfImages.forEach(imageName=>{
    let link=document.createElement("a");
    link.setAttribute("href",`./images/${imageName}`)
    link.setAttribute("data-lightbox","imageGroup")
    lightboxContainer.append(link);
  })
  document.body.append(lightboxContainer);
  lightboxContainer.querySelector("a").click()

  document.body.removeChild(lightboxContainer)



  
  

  
  

}
// part of advenlistner
ArrayOfArticles.forEach((article,index)=>{
  article.addEventListener("click",()=>addGalerie(index))
});
lightbox.option({
  'resizeDuration': 200,
      'wrapAround': true,
  'alwaysShowNavOnTouchDevices':true,
})


  