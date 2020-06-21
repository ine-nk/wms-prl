import { Component } from "../core/component";

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)
    this.tabs = []
  }

  init() {
    console.log('из navigation.init  this.$el  => ', this.$el);
    this.$el.addEventListener('click', tabClickHandler.bind(this))
  }

  registerTabs(tabs) {
    this.tabs = tabs
  }
}

function tabClickHandler(event) {
  event.preventDefault()
  if (event.target.classList.contains('tab')) {
    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
      tab.classList.remove('active')
    })
    event.target.classList.add('active')
    console.log('tabClickHandler event.target => ', event.target);
  }

  console.log('navigation -> this.tabs', this.tabs);

  const activeTab = this.tabs.find(t=>t.name === event.target.dataset.name)

  console.log('navigation : activeTab => ', activeTab);
  //  скроем все компонетнты
  this.tabs.forEach(t => t.component.hide())
  
  activeTab.component.show()


}