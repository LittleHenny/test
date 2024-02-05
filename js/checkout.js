document.addEventListener('DOMContentLoaded', function () {
// ====================================VARIABLE========================================
  const checkbox = document.querySelector('.form_checkbox')
  const buttons = document.querySelector('.form_buttons_payment_method').getElementsByTagName('button')
  const inputs = document.querySelectorAll('.form_input')
  const main_button = document.querySelector('.form_button')
  const discount = document.querySelector('.form_discount')
// ====================================FUNCTIONS========================================

// ====================================EVENTS========================================
  checkbox.addEventListener('click', function () {
    checkbox.querySelector('.checkbox').classList.toggle('checkbox--active')
    if (checkbox.getElementsByTagName('input')[0].checked) {
      checkbox.getElementsByTagName('input')[0].checked = false
    } else {
      checkbox.getElementsByTagName('input')[0].checked = true
    }
  })
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click', function () {
      if (element.classList.contains('border--close')) {
        element.classList.toggle('border--close')
        if (i==0) {
          buttons[1].classList.toggle('border--close')
        } else {
          buttons[0].classList.toggle('border--close')
        }
      }
    })
  }
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    element.getElementsByTagName('input')[0].addEventListener('input', function () {
      if (!element.getElementsByTagName('input')[0].value == '') {
        element.getElementsByTagName('label')[0].style.opacity = 0
      } else {
        element.getElementsByTagName('label')[0].style.opacity = 1
      }
    })
  }
  main_button.addEventListener('click', function () {
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      element.getElementsByTagName('label')[0].style.opacity = 1
    }
  })
  discount.getElementsByTagName('input')[0].addEventListener('input', function() {
    if (!discount.getElementsByTagName('input')[0].value == '') {
      discount.getElementsByTagName('label')[0].style.opacity = 0
    } else {
      discount.getElementsByTagName('label')[0].style.opacity = 1
    }
  })
  discount.getElementsByTagName('button')[0].addEventListener('click', function () {
    discount.getElementsByTagName('label')[0].style.opacity = 1
  })
})