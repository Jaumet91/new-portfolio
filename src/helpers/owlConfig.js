const navArrows = [
  `
    <span><svg class="icon icon-arrow-prev">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>
    </svg></span>`,
  `<span><svg class="icon icon-arrow-next">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>
    </svg></span>`
];

export const owlSliderDetails = {
  items: 3,
  nav: true,
  navElement: 'button',
  navText: navArrows,
  dots: false,
  loop: true,
  smartSpeed: 700,
  responsive: {
    320: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    }
  }
};

export const owlSliderReview = {
  items: 1,
  nav: true,
  navElement: 'button',
  navText: navArrows,
  dots: false,
  loop: true,
  smartSpeed: 700,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    320: {
      nav: false,
      dots: true
    },
    768: {
      nav: true,
      dots: false
    }
  }
};
