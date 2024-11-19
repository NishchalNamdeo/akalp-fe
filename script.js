document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
    });
  
    closeButton.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  });
  


  function toggleFaq(id) {
    const content = document.getElementById(`content-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);
  
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      // Close the FAQ item
      content.style.maxHeight = '0px';
      arrow.textContent = '▼';
    } else {
      // Open the FAQ item
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.textContent = '▲';
    }
  }
  



  const swiper = new Swiper('.swiper-container', {
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false, // Keep autoplay active even after interaction
    },
    spaceBetween: 20, // Space between slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Pagination dots are clickable
      renderBullet: function (index, className) {
        return `<span class="${className} bg-gray-400 w-8 h-2 mx-1 rounded-full"></span>`;
      },
    },
    breakpoints: {
      640: {
        slidesPerView: 1, // 1 slide for smaller screens
        centeredSlides: true, // Center the slide on phones
      },
      768: {
        slidesPerView: 2, // 2 slides for tablets
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3, // 3 slides for desktops
        centeredSlides: false,
      },
    },
  });



  