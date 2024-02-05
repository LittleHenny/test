document.addEventListener('DOMContentLoaded', function () {
  // ==================================VARIABLES========================================
  const MiniMaxx = document.getElementById('MiniMaxxV2DeleteTuner')
  const HPTuner = document.getElementById('HPTuner')
  const LynkAgent = document.getElementById('EZLynkAutoAgent3')
  const RaceMe = document.getElementById('RaceMeUltra')
  const inputOneDisc = document.getElementById('input_one_discount')
  const inputTwoDisc = document.getElementById('input_two_discount')
  const card1 = document.getElementById('slider_card_1')
  const card2 = document.getElementById('slider_card_2')
  const card3 = document.getElementById('slider_card_3')
  const card4 = document.getElementById('slider_card_4')
  const card5 = document.getElementById('slider_card_5')
  const cards = [card1, card2, card3, card4, card5]
  const dot1 = document.getElementById('slider_dot_1')
  const dot2 = document.getElementById('slider_dot_2')
  const dot3 = document.getElementById('slider_dot_3')
  const dot4 = document.getElementById('slider_dot_4')
  const dot5 = document.getElementById('slider_dot_5')
  const dots = [dot1, dot2, dot3, dot4, dot5]
  const slider_dots = document.getElementById('slider_dots')
  const buttons_buy = document.querySelectorAll('.shop_best_card_button')
  let slider = 0
  let slider_max = 5
// ====================================FUNCTIONS========================================
  function favorite(item) {
    item.classList.toggle('favorite')
  }
  function placeholder(item) {
    let p = item.querySelector('p')
    if (item.querySelector('input').value.length == 0) {
      if (p.classList.contains('placeholder--close')) {
        p.classList.remove('placeholder--close')
      }
    } else {
      p.classList.add('placeholder--close')
    }
  }
  function slider_switch() {
    document.getElementById('slider_dots_protection').style.display = 'block'
    setTimeout(() => {
      document.getElementById('slider_dots_protection').style.display = 'none'
    }, 1000);
    if (slider != slider_max-1) {
      cards[slider].style.left = '-49.333%'
      cards[slider].style.opacity = '0%'
      cards[slider+1].style.left = '0%'
      dots[slider].classList.remove('slider_dot--active')
      dots[slider+1].classList.add('slider_dot--active')
      setTimeout(() => {
        if (slider != 0) {
          cards[slider-1].style.left = '101.333%'
        } else {
          cards[4].style.left = '101.333%'
        }
      }, 1000);
      setTimeout(() => {
        if (slider != 3) {
          cards[slider+2].style.left = '50.666%';
          cards[slider+2].style.opacity = '100%'
        } else {
          cards[0].style.left = '50.666%';
          cards[0].style.opacity = '100%'
        }
        slider += 1
        if (slider == slider_max) {
          slider -= slider_max
        }
      }, 1);
    } else {
      cards[slider].style.left = '-49.333%'
      cards[slider].style.opacity = '0%'
      cards[0].style.left = '0%'
      dots[slider].classList.remove('slider_dot--active')
      dots[0].classList.add('slider_dot--active')
      setTimeout(() => {
        if (slider != 0) {
          cards[slider-1].style.left = '101.333%'
        } else {
          cards[slider_max-1].style.left = '101.333%'
        }
      }, 1000);
      setTimeout(() => {
        cards[1].style.left = '50.666%';
        cards[1].style.opacity = '100%'
        slider += 1
        if (slider == slider_max) {
          slider -= slider_max
        }
      }, 1);
    }
  }
//=====================================EVENTS========================================
  for (let i = 0; i < buttons_buy.length; i++) {
    buttons_buy[i].addEventListener('click', function () {
      location.href = 'html/card.html'
    })
  }
  MiniMaxx.addEventListener('click', function () {
    favorite(MiniMaxx)
  })
  HPTuner.addEventListener('click', function () {
    favorite(HPTuner)
  })
  LynkAgent.addEventListener('click', function () {
    favorite(LynkAgent)
  })
  RaceMe.addEventListener('click', function () {
    favorite(RaceMe)
  })
  inputOneDisc.querySelector('input').addEventListener('input', function () {
    placeholder(inputOneDisc)
  })
  inputTwoDisc.querySelector('input').addEventListener('input', function () {
    placeholder(inputTwoDisc)
  })
  slider_dots.onclick = slider_switch
})