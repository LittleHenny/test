document.addEventListener('DOMContentLoaded', function () {
// ====================================VARIABLES========================================
  const price_quantities = document.querySelectorAll('.price_quantity')
  const total = document.querySelector('.basket_wrapper').getElementsByTagName('h3')[0]
  const button = document.querySelector('.basket_button').getElementsByTagName('button')[0]
  let subtotal = 2027
  const price_discounts = [1024]
  const prices = [899, 2400, 899, 350]
// ====================================FUNCTIONS========================================
  function price_function(sign, num) {
    if (sign == 1) {
      let input = price_quantities[num].getElementsByTagName('input')[0]
      let quantity = Number(input.value)
      quantity ++
      input.value = quantity
      if (price_quantities[num].parentElement.querySelector('.price').classList.contains('price_text')) {
        let price_1 = price_quantities[num].parentElement.querySelector('.price_text').getElementsByTagName('p')[0]
        price_1.textContent = `$${price_discounts[num] * quantity}`
        let price_2 = price_quantities[num].parentElement.querySelector('.price_text').getElementsByTagName('p')[1]
        price_2.textContent = `$${prices[num] * quantity}`
      } else {
        let price = price_quantities[num].parentElement.querySelector('.price').getElementsByTagName('p')[0]
        price.textContent = `$${prices[num] * quantity}`
      }
    } else {
      let input = price_quantities[num].getElementsByTagName('input')[0]
      if (Number(input.value)>1) {
        let quantity = Number(input.value)
        quantity --
        input.value = quantity
        if (price_quantities[num].parentElement.querySelector('.price').classList.contains('price_text')) {
          let price_1 = price_quantities[num].parentElement.querySelector('.price_text').getElementsByTagName('p')[0]
          price_1.textContent = `$${price_discounts[num] * quantity}`
          let price_2 = price_quantities[num].parentElement.querySelector('.price_text').getElementsByTagName('p')[1]
          price_2.textContent = `$${prices[num] * quantity}`
        } else {
          let price = price_quantities[num].parentElement.querySelector('.price').getElementsByTagName('p')[0]
          price.textContent = `$${prices[num] * quantity}`
        }
      }
    }
    subtotal = 0
    for (let i = 0; i < document.querySelectorAll('.price').length; i++) {
      const element = document.querySelectorAll('.price')[i];
      subtotal += Number(element.getElementsByTagName('p')[element.getElementsByTagName('p').length - 1].textContent.substring(1))
    }
    let subtotal_array = subtotal.toString().split( /(?=(?:...)*$)/ )
    let subtotal_result = ''
    for (let i = 0; i < subtotal_array.length; i++) {
      const element = subtotal_array[i];
      subtotal_result += element
      subtotal_result += '.'
    }
    subtotal_result += '00'
    total.textContent = `Subtotal: $${subtotal_result}`
  }
// ====================================EVENTS========================================
  button.addEventListener('click', function () {
    location.href = 'checkout.html'
  })
  for (let i = 0; i < price_quantities.length; i++) {
    const element = price_quantities[i];
    element.querySelector('.price_quantity_left').addEventListener('click', function () {
      price_function(0, i)
    })
    element.querySelector('.price_quantity_right').addEventListener('click', function () {
      price_function(1, i)
    })
    element.getElementsByTagName('input')[0].addEventListener('input', function () {
      let input = price_quantities[i].getElementsByTagName('input')[0]
      let quantity = input.value
      let price_1 = element.parentElement.querySelector('.price_text').getElementsByTagName('p')[0]
      price_1.textContent = `$${price_discounts[i] * quantity}`
      let price_2 = element.parentElement.querySelector('.price_text').getElementsByTagName('p')[1]
      price_2.textContent = `$${prices[i] * quantity}`
      subtotal = 0
      for (let i = 0; i < document.querySelectorAll('.price').length; i++) {
        const element = document.querySelectorAll('.price')[i];
        subtotal += Number(element.getElementsByTagName('p')[element.getElementsByTagName('p').length - 1].textContent.substring(1))
      }
      let subtotal_array = subtotal.toString().split( /(?=(?:...)*$)/ )
      let subtotal_result = ''
      for (let i = 0; i < subtotal_array.length; i++) {
        const element = subtotal_array[i];
        subtotal_result += element
        subtotal_result += '.'
      }
      subtotal_result += '00'
      total.textContent = `Subtotal: $${subtotal_result}`
    })
  }
})