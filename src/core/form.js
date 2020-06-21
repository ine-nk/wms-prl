
export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  value() {
    const value = {}
    Object.keys(this.controls).forEach(control => {
      value[control] = this.form[control].value
    })
    return value
  }
  //очистка формы
  clear() {
    Object.keys(this.controls).forEach(control => {
      this.form[control].value = '' // во все контролы прописываем значение пустой строи
    })
  }
  // метод правильности формы
  isValid() {
    let isFormValid = true

    Object.keys(this.controls).forEach(control => {
      const validators = this.controls[control]


      let isValid = true
      validators.forEach(validator => {
        isValid = validator(this.form[control].value) && isValid

      })
      // if(!isValid){
      //   setError(this.form[control])
      //   } else {
      //     clearError(this.form[control])
      //   }

      isValid ? clearError(this.form[control])
        : setError(this.form[control])


      isFormValid = isFormValid && isValid
    })

    return isFormValid
  }
}

function setError($control) {
  clearError($control) // очищаем сообщение об ошибках если она была ранее
  console.log($control.name);
  let error = `<p class="validation-error">Введите не менее ${10} символов</p>`
  if ($control.name === 'title') {
    error = `<p class="validation-error">Это поле не должно быть пустым</p>`
  }
  //  else {
  //   error = '<p class="validation-error">Введите не менее 10 символов</p>'
  // }

  $control.classList.add('invalid')
  $control.insertAdjacentHTML('afterend', error)
}

function clearError($control) {
  $control.classList.remove('invalid')
  if ($control.nextSibling) {
    $control.closest('.form-control')
      .removeChild($control.nextSibling)
  }

}
