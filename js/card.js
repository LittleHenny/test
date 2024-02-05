document.addEventListener('DOMContentLoaded', function () {
// ====================================VARIABLES========================================
  const price_quantity = document.querySelector('.price_quantity')
  const price_discount = 1024
  const price = 899
  const imgs = document.querySelectorAll('.card_additional_img')
  const description_chapters = document.querySelectorAll('.description_chapter')
  const favorites = document.querySelectorAll('.card_flag_favorite')
  const button = document.querySelector('.card_btn').getElementsByTagName('button')[0]
// ====================================FUNCTIONS========================================
  function favorite(item) {
    item.classList.toggle('favorite')
  }
  function price_function(sign) {
    if (sign == 1) {
      let input = price_quantity.getElementsByTagName('input')[0]
      let quantity = Number(input.value)
      quantity ++
      input.value = quantity
      let price_1 = price_quantity.parentElement.querySelector('.price_text').getElementsByTagName('p')[0]
      price_1.textContent = `$${price_discount * quantity}`
      let price_2 = price_quantity.parentElement.querySelector('.price_text').getElementsByTagName('p')[1]
      price_2.textContent = `$${price * quantity}`
    } else {
      let input = price_quantity.getElementsByTagName('input')[0]
      if (Number(input.value)>1) {
        let quantity = Number(input.value)
        quantity --
        input.value = quantity
        let price_1 = price_quantity.parentElement.querySelector('.price_text').getElementsByTagName('p')[0]
        price_1.textContent = `$${price_discount * quantity}`
        let price_2 = price_quantity.parentElement.querySelector('.price_text').getElementsByTagName('p')[1]
        price_2.textContent = `$${price * quantity}`
      }
    }
  }
// ====================================EVENTS========================================
  button.addEventListener('click', function () {
    location.href = 'basket.html'
  })
  for (let i = 0; i < favorites.length; i++) {
    favorites[i].addEventListener('click', function () {
      favorite(favorites[i])
    })
  }
  for (let i = 0; i < description_chapters.length; i++) {
    const description_chapter = description_chapters[i];
    description_chapter.addEventListener('click', function () {
      description_chapters[0].classList.toggle('chapter--active')
      description_chapters[1].classList.toggle('chapter--active')
      document.querySelector('.description_text_one').classList.toggle('description_text--close')
      document.querySelector('.description_text_two').classList.toggle('description_text--close')
    })
  }
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    img.addEventListener('click', function () {
      let src = img.getElementsByTagName('img')[0].src
      document.querySelector('.card_main_img').getElementsByTagName('img')[0].src = src
    })
  }
  price_quantity.querySelector('.price_quantity_left').addEventListener('click', function () {
    price_function(0)
  })
  price_quantity.querySelector('.price_quantity_right').addEventListener('click', function () {
    price_function(1)
  })
  price_quantity.getElementsByTagName('input')[0].addEventListener('input', function () {
    let input = price_quantity.getElementsByTagName('input')[0]
    let quantity = input.value
    let price_1 = price_quantity.parentElement.querySelector('.price_text').getElementsByTagName('p')[0]
    price_1.textContent = `$${price_discount * quantity}`
    let price_2 = price_quantity.parentElement.querySelector('.price_text').getElementsByTagName('p')[1]
    price_2.textContent = `$${price * quantity}`
  })
})
