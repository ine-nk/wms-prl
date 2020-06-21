import { Component } from '../core/component'
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transform.service'
import { renderPost } from '../templates/post.template'


export class PostsComponent extends Component {
  constructor(id, { loader }) {
    super(id)
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }

  async onShow() {
    // при загрузке компонента Post вызываем loader
    this.loader.show()
    // const data = await apiService.fetchPosts()
    const fbData = await apiService.fetchPosts()
    // TransformService.fbObjectToArray(fbData)
    const posts = TransformService.fbObjectToArray(fbData)


    // console.log('post onShow, Data', data);
    console.log('post onShow, fbData', fbData);
    console.log('posts', posts);

    const html = posts.map(post => renderPost(post, {withButton:true}))
    // console.log(html);
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    this.loader.hide()

  }

  // для очистки списка постов при уходе на другую вкладку будем очищать html
  onHide() {
    this.$el.innerHTML = ''
  }
}



function buttonHandler(event) {

  const $el = event.target
  const id = $el.dataset.id
  const title = $el.dataset.title

  // console.log('buttonHandler', event);

  if (id) {
    // console.log('id = ', id);
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    console.log(favorites);
    if (favorites.includes(id)) {
      //удалить вхождение
      favorites = favorites.filter(fId => fId !== id)
      $el.textContent = 'Сохранить'
      $el.classList.add('button-primary')
      $el.classList.remove('button-danger')
    } else {
      // добавить вхождение

      // favorites.push(id, title)
      favorites.push(id)

      $el.textContent = 'Удалить'
      $el.classList.remove('button-primary')
      $el.classList.add('button-danger')
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}

