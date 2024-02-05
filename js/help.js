document.addEventListener('DOMContentLoaded', function () {
// ===============================VARIABLES=============================================
  const supports = document.querySelectorAll('.help_support_element')
// ===============================FUNCTIONS=============================================
  function support_open(button) {
    button.classList.toggle('element--open')
    button.parentElement.querySelector('.help_support_element_questions').classList.toggle('questions--close')
  }
  function discription_open(button) {
    button.classList.toggle('question_btn--open')
    button.parentElement.querySelector('.question_discription').classList.toggle('discription--close')
  }
// ===============================EVENTS=============================================
  for (let i = 0; i < supports.length; i++) {
    let element = supports[i].querySelector('.help_support_element_btn');
    element.addEventListener('click', function () {
      support_open(element)
    })
  }
  for (let i = 0; i < supports.length; i++) {
    let elements = supports[i].querySelectorAll('.question_btn');
    for (let j = 0; j < elements.length; j++) {
      const element = elements[j];
      element.addEventListener('click', function() {
        discription_open(element)
      })
    }
  }
})