document.addEventListener('DOMContentLoaded', function () {
  const filters = document.querySelectorAll('.filter')
  const filter_seleter_1 = filters[0].querySelectorAll('.filter_select')
  const filter_seleter_2 = filters[1].querySelectorAll('.filter_select')
  const filter_seleter_3 = filters[2].querySelectorAll('.filter_select')
  const cards = document.querySelectorAll('.card_flag_favorite')
  const card_buttons = document.querySelectorAll('.card_number_btn')
  const card_slider_arrow = document.querySelectorAll('.card_arrow_btn')
  const protection_cards = document.querySelector('.cards_slider_protection')
  const buttons_buy = document.querySelectorAll('.card_button')
  const favorites = document.querySelectorAll('.card_flag_favorite')
  let page = 2
  let last_page = 1
  let card_slider = 1
  let card_slider_active = 1
  let filter_1 = 0
  let filter = []
  
// ====================================FUNCTIONS========================================

  function favorite(item) {
    item.classList.toggle('favorite')
  }
  function page_switch_forward() {
    for (let i = 0; i < 12; i++) {
      let card = cards[i].parentElement
      let card_page_last = card.querySelector(`.page${last_page}`)
      let card_page_next = card.querySelector(`.page${page}`)
      let if_last =  card_page_last.classList.contains('favorite_card')
      let if_next =  card_page_next.classList.contains('favorite_card')
      card_page_last.style.opacity = '0%'
      card_page_next.style.display = 'flex'
      setTimeout(() => {
        card_page_last.style.display = 'none'
        card_page_next.style.opacity = '100%'
        if (if_next != if_last) {
          cards[i].classList.toggle('favorite')
        }
      }, 500);
    }
  }
  function page_switch_back() {
    for (let i = 0; i < 12; i++) {
      let card = cards[i].parentElement
      let card_page_next = card.querySelector(`.page${last_page}`)
      let card_page_last = card.querySelector(`.page${page}`)
      let if_last =  card_page_last.classList.contains('favorite_card')
      let if_next =  card_page_next.classList.contains('favorite_card')
      card_page_next.style.opacity = '0%'
      card_page_last.style.display = 'flex'
      setTimeout(() => {
        card_page_next.style.display = 'none'
        card_page_last.style.opacity = '100%'
        if (if_next != if_last) {
          cards[i].classList.toggle('favorite')
        }
      }, 500);
    }
  }
  function cards_slider_forward(number) {
    if (number != 6) {
      if (number >= 0 && number <= 7) {
        card_buttons[number].parentElement.classList.toggle('card_number--active')
        card_buttons[last_page-1].parentElement.classList.toggle('card_number--active')
        page = number + 1
        page_switch_forward()
        setTimeout(() => {
          protection_cards.style.display = 'none'
          last_page = number+1
        }, 500);
      }
    }
  }
  function cards_slider_back(number) {
    if (number != 7) {
      if (number >= 0 && number <= 7) {
        card_buttons[card_slider_active-2].parentElement.classList.toggle('card_number--active')
        card_buttons[card_slider_active-1].parentElement.classList.toggle('card_number--active')
        page = number - 1
        page_switch_back()
        setTimeout(() => {
          protection_cards.style.display = 'none'
          last_page = number - 1
        }, 500);
      }
    }
  }
  function cards_slider_switch(a) {
    for (let i = 0; i < card_buttons.length; i++) {
      const element = card_buttons[i];
      if (i<card_buttons.length-2) {
        element.getElementsByTagName('p')[0].textContent = `${a+i}`
      }
    }
  }
  function filter_checkbox(element) {
    if (element.querySelector('.filter_select_checkbox').classList.contains('filter_select_checkbox--active')) {
      filter_1--
      let index = filter.indexOf(element.querySelector('.text').textContent)
      console.log(index);
      filter.splice(index, 1)
    } else {
      filter_1++
      filter.push(element.querySelector('.text').textContent)
    }
    element.querySelector('.filter_select_checkbox').classList.toggle('filter_select_checkbox--active')
    console.log(filter)
    element.parentElement.parentElement.getElementsByTagName('p')[0].textContent = filter_1
  }


// ====================================EVENTS========================================


  for (let i = 0; i < favorites.length; i++) {
    favorites[i].addEventListener('click', function () {
      favorite(favorites[i])
    })
  }
  for (let i = 0; i < buttons_buy.length; i++) {
    buttons_buy[i].addEventListener('click', function () {
      location.href = '../html/card.html'
    })
  }
  for (let i = 0; i < card_buttons.length; i++) {
    const element = card_buttons[i];
    element.addEventListener('click', function () {
      protection_cards.style.display = 'block'
      let Page = element.getElementsByTagName('p')[0].textContent
      if (Number(Page)!=card_slider) {
        if (Page != '...') {
          page = Number(Page)
          page_switch_forward()
          if (page == 12) {
            card_buttons[7].parentElement.classList.toggle('card_number--active')
          card_buttons[last_page-Number(card_buttons[0].textContent)].parentElement.classList.toggle('card_number--active')
          } else {
            if (last_page == 12) {
              card_buttons[page-Number(card_buttons[0].textContent)].parentElement.classList.toggle('card_number--active')
            card_buttons[7].parentElement.classList.toggle('card_number--active')
            } else {
              card_buttons[page-Number(card_buttons[0].textContent)].parentElement.classList.toggle('card_number--active')
              card_buttons[last_page-Number(card_buttons[0].textContent)].parentElement.classList.toggle('card_number--active')
            }
          }
          setTimeout(() => {
            protection_cards.style.display = 'none'
            last_page = Number(Page)
          }, 500);
          card_slider = Number(Page)
          card_slider_active = i+1
        } else {
          card_slider += 1
          cards_slider_switch(Number(card_buttons[0].textContent)+1)
          page = card_slider
          page_switch_forward()
          setTimeout(() => {
            protection_cards.style.display = 'none'
            last_page = card_slider
          }, 500);
          if (Number(card_buttons[0].textContent) >= 5) {
            card_buttons[6].getElementsByTagName('p')[0].textContent = '11'
          }
        }
      } else {
        protection_cards.style.display = 'none'
      }
    })
  }
  card_slider_arrow[0].addEventListener('click', function(){
    if (card_slider_active>1) {
      cards_slider_back(card_slider_active)
      card_slider -= 1
      last_page = card_slider
      card_slider_active -= 1
    } else {
      if (card_slider_active == 1) {
        if (card_slider>1) {
          cards_slider_switch(card_slider-1)
          card_slider -= 1
          last_page = card_slider
        }
      }
    }
  })
  card_slider_arrow[1].addEventListener('click', function(){
    protection_cards.style.display = 'block'
    if (card_slider_active < 8) {
      if (card_slider_active<6) {
        cards_slider_forward(card_slider_active)
        card_slider += 1
        card_slider_active += 1
      } else {
        page = card_slider + 1
          page_switch_forward()
          setTimeout(() => {
            protection_cards.style.display = 'none'
            last_page = card_slider+1
            card_slider += 1
            if (card_slider >= 10) {
              if (card_slider != 10) {
                card_buttons[card_slider_active].parentElement.classList.toggle('card_number--active')
                card_buttons[card_slider_active-1].parentElement.classList.toggle('card_number--active')
                card_slider_active += 1
              } else {
                if (card_slider == 10) {
                  card_buttons[6].innerHTML = '<p>11</p>'
                  cards_slider_switch(card_slider-5)
                } else {
                  cards_slider_switch(card_slider-5)
                  card_slider_active += 1
                }
              }
            } else {
              cards_slider_switch(card_slider-5)
            }
          }, 500);
      }
    }
  })
  cards[0].addEventListener('click', function () {
    favorite(cards[0])
  })
  cards[1].addEventListener('click', function () {
    favorite(cards[1])
  })
  cards[2].addEventListener('click', function () {
    favorite(cards[2])
  })
  cards[3].addEventListener('click', function () {
    favorite(cards[3])
  })
  cards[4].addEventListener('click', function () {
    favorite(cards[4])
  })
  cards[5].addEventListener('click', function () {
    favorite(cards[5])
  })
  cards[6].addEventListener('click', function () {
    favorite(cards[6])
  })
  cards[7].addEventListener('click', function () {
    favorite(cards[7])
  })
  cards[8].addEventListener('click', function () {
    favorite(cards[8])
  })
  cards[9].addEventListener('click', function () {
    favorite(cards[9])
  })
  cards[10].addEventListener('click', function () {
    favorite(cards[10])
  })
  cards[11].addEventListener('click', function () {
    favorite(cards[11])
  })
})