import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { renderPost } from '../templates/post.template'


export class FavoriteComponent extends Component {
  constructor(id, options) {
    super(id)

    this.loader = options.loader // другой вариант подключения компонетнты из другого компонента

  }
  init() {
    this.$el.addEventListener('click', linkClickHandler.bind(this))
  }

  onShow() {
    // показываем список избранных элементов
    // получаем список избранных
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    const html = renderList(favorites)
    this.$el.insertAdjacentHTML('afterbegin', html)
  }

  onHide() {
    this.$el.innerHTML = ''
  }

}

function renderList(list = []) {
  if (list === null || list.length === 0) {
    return `<p class="center" >Вы пока ничего не добавили</p>`
  } else {
    return `
  <ul>
    ${list.map(i => `<li><a href="#" class="js-link">${i}</a></li>`).join(' ')}
  </ul>
  `
  }
}

async function linkClickHandler(event) {
  event.preventDefault()

  if (event.target.classList.contains('js-link')) {
    const postId = event.target.textContent;
    this.$el.innerHTML = '' // очищаем страницу перед загрузкой постов
    console.log('event.target.textContent postID = ', postId);

    this.loader.show()
    const post = await apiService.fetchPostById(postId)
    console.log('post from link', post);
    this.loader.hide()

    this.$el.insertAdjacentHTML('afterbegin', renderPost(post, { withButton: false }))


  }

}

