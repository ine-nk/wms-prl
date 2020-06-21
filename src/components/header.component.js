import { Component } from "../core/component";

export class HeaderComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    if (localStorage.getItem('visited')) {
      this.hide()
    }
    console.log('init header => ', this.$el);
    const btn = document.querySelector('.js-header-start')
    console.log('header - btn =>', btn);
    btn.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler() {
  localStorage.setItem('visited', JSON.stringify(true))
  console.log('click btn header', this.$el);
  this.hide()
}