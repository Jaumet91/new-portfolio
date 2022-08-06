const navArrows = [
  `
    <span><svg class="icon icon-arrow-prev">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" fill="#9F9FA9"/>
    </svg></span>`,
  `<span><svg class="icon icon-arrow-next">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 13.7071C-0.097631 13.3166 -0.097631 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071Z" fill="#9F9FA9"/>
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

export const owlSliderPortfolio = {
  nav: false,
  navElement: 'button',
  loop: true,
  smartSpeed: 700,
  responsive: {
    320: {
      dots: true,
      items: 1
    }
  }
};
