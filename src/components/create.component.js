import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/validators'
import { apiService } from '../services/api.service'



export class CreateComponent extends Component {
  constructor(id) {
    super(id)
  }
  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))
    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
      type: [],
    })
  }
}


async function submitHandler(event) {
  event.preventDefault()

  if (this.form.isValid()) {
    const formData = {
      date: new Date().toLocaleDateString(),
      // type: this.$el.type.value,
      // title: this.$el.name.value,
      ...this.form.value()
    }

    await apiService.createPost(formData)

    // после формирования формы  вызываем очистку формы
    this.form.clear()

    // console.log(this.minTextLength);
    console.log('Submit', formData, formData.type, formData.title, formData.fulltext);
    alert('Запись в базе данных успешно создана!')

  }

}


// https://js-wfm-ine.firebaseio.com/