/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/create.component.js":
/*!********************************************!*\
  !*** ./src/components/create.component.js ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateComponent\", function() { return CreateComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n/* harmony import */ var _core_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/form */ \"./src/core/form.js\");\n/* harmony import */ var _core_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/validators */ \"./src/core/validators.js\");\n/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ \"./src/services/api.service.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass CreateComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(id) {\r\n    super(id)\r\n  }\r\n  init() {\r\n    this.$el.addEventListener('submit', submitHandler.bind(this))\r\n    this.form = new _core_form__WEBPACK_IMPORTED_MODULE_1__[\"Form\"](this.$el, {\r\n      title: [_core_validators__WEBPACK_IMPORTED_MODULE_2__[\"Validators\"].required],\r\n      fulltext: [_core_validators__WEBPACK_IMPORTED_MODULE_2__[\"Validators\"].required, _core_validators__WEBPACK_IMPORTED_MODULE_2__[\"Validators\"].minLength(10)],\r\n      type: [],\r\n    })\r\n  }\r\n}\r\n\r\n\r\nasync function submitHandler(event) {\r\n  event.preventDefault()\r\n\r\n  if (this.form.isValid()) {\r\n    const formData = {\r\n      date: new Date().toLocaleDateString(),\r\n      // type: this.$el.type.value,\r\n      // title: this.$el.name.value,\r\n      ...this.form.value()\r\n    }\r\n\r\n    await _services_api_service__WEBPACK_IMPORTED_MODULE_3__[\"apiService\"].createPost(formData)\r\n\r\n    // после формирования формы  вызываем очистку формы\r\n    this.form.clear()\r\n\r\n    // console.log(this.minTextLength);\r\n    console.log('Submit', formData, formData.type, formData.title, formData.fulltext);\r\n    alert('Запись в базе данных успешно создана!')\r\n\r\n  }\r\n\r\n}\r\n\r\n\r\n// https://js-wfm-ine.firebaseio.com/\n\n//# sourceURL=webpack:///./src/components/create.component.js?");

/***/ }),

/***/ "./src/components/favorite.component.js":
/*!**********************************************!*\
  !*** ./src/components/favorite.component.js ***!
  \**********************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavoriteComponent\", function() { return FavoriteComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ \"./src/services/api.service.js\");\n/* harmony import */ var _templates_post_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/post.template */ \"./src/templates/post.template.js\");\n\r\n\r\n\r\n\r\n\r\nclass FavoriteComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(id, options) {\r\n    super(id)\r\n\r\n    this.loader = options.loader // другой вариант подключения компонетнты из другого компонента\r\n\r\n  }\r\n  init() {\r\n    this.$el.addEventListener('click', linkClickHandler.bind(this))\r\n  }\r\n\r\n  onShow() {\r\n    // показываем список избранных элементов\r\n    // получаем список избранных\r\n    const favorites = JSON.parse(localStorage.getItem('favorites'))\r\n    const html = renderList(favorites)\r\n    this.$el.insertAdjacentHTML('afterbegin', html)\r\n  }\r\n\r\n  onHide() {\r\n    this.$el.innerHTML = ''\r\n  }\r\n\r\n}\r\n\r\nfunction renderList(list = []) {\r\n  if (list === null || list.length === 0) {\r\n    return `<p class=\"center\" >Вы пока ничего не добавили</p>`\r\n  } else {\r\n    return `\r\n  <ul >\r\n    ${list.map(i => `<li><a href=\"#\" class=\"js-link\" data-id=${i.id}>${i.date}  &nbsp;&nbsp;&nbsp; ${i.title} </a></li>`).join(' ')}\r\n  </ul>\r\n  `\r\n  }\r\n}\r\n\r\nasync function linkClickHandler(event) {\r\n  event.preventDefault()\r\n\r\n  if (event.target.classList.contains('js-link')) {\r\n    // const postId = event.target.textContent;   // было\r\n    const postId = event.target.dataset.id;\r\n\r\n    this.$el.innerHTML = '' // очищаем страницу перед загрузкой постов\r\n    console.log('event.target.textContent postID = ', postId);\r\n\r\n    this.loader.show()\r\n    const post = await _services_api_service__WEBPACK_IMPORTED_MODULE_1__[\"apiService\"].fetchPostById(postId)\r\n    console.log('post from link', post);\r\n    this.loader.hide()\r\n\r\n    this.$el.insertAdjacentHTML('afterbegin', Object(_templates_post_template__WEBPACK_IMPORTED_MODULE_2__[\"renderPost\"])(post, { withButton: false }))\r\n\r\n\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/favorite.component.js?");

/***/ }),

/***/ "./src/components/header.component.js":
/*!********************************************!*\
  !*** ./src/components/header.component.js ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderComponent\", function() { return HeaderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\r\n\r\nclass HeaderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(id) {\r\n    super(id)\r\n  }\r\n\r\n  init() {\r\n    if (localStorage.getItem('visited')) {\r\n      this.hide()\r\n    }\r\n    console.log('init header => ', this.$el);\r\n    const btn = document.querySelector('.js-header-start')\r\n    console.log('header - btn =>', btn);\r\n    btn.addEventListener('click', buttonHandler.bind(this))\r\n  }\r\n}\r\n\r\nfunction buttonHandler() {\r\n  localStorage.setItem('visited', JSON.stringify(true))\r\n  console.log('click btn header', this.$el);\r\n  this.hide()\r\n}\n\n//# sourceURL=webpack:///./src/components/header.component.js?");

/***/ }),

/***/ "./src/components/loader.component.js":
/*!********************************************!*\
  !*** ./src/components/loader.component.js ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoaderComponent\", function() { return LoaderComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\r\nclass LoaderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(id) {\r\n    super(id)\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/components/loader.component.js?");

/***/ }),

/***/ "./src/components/navigation.component.js":
/*!************************************************!*\
  !*** ./src/components/navigation.component.js ***!
  \************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavigationComponent\", function() { return NavigationComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\r\n\r\nclass NavigationComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(id) {\r\n    super(id)\r\n    this.tabs = []\r\n  }\r\n\r\n  init() {\r\n    console.log('из navigation.init  this.$el  => ', this.$el);\r\n    this.$el.addEventListener('click', tabClickHandler.bind(this))\r\n  }\r\n\r\n  registerTabs(tabs) {\r\n    this.tabs = tabs\r\n  }\r\n}\r\n\r\nfunction tabClickHandler(event) {\r\n  event.preventDefault()\r\n  if (event.target.classList.contains('tab')) {\r\n    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {\r\n      tab.classList.remove('active')\r\n    })\r\n    event.target.classList.add('active')\r\n    console.log('tabClickHandler event.target => ', event.target);\r\n  }\r\n\r\n  console.log('navigation -> this.tabs', this.tabs);\r\n\r\n  const activeTab = this.tabs.find(t=>t.name === event.target.dataset.name)\r\n\r\n  console.log('navigation : activeTab => ', activeTab);\r\n  //  скроем все компонетнты\r\n  this.tabs.forEach(t => t.component.hide())\r\n  \r\n  activeTab.component.show()\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/components/navigation.component.js?");

/***/ }),

/***/ "./src/components/posts.component.js":
/*!*******************************************!*\
  !*** ./src/components/posts.component.js ***!
  \*******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostsComponent\", function() { return PostsComponent; });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ \"./src/services/api.service.js\");\n/* harmony import */ var _services_transform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/transform.service */ \"./src/services/transform.service.js\");\n/* harmony import */ var _templates_post_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/post.template */ \"./src/templates/post.template.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass PostsComponent extends _core_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n  constructor(id, { loader }) {\r\n    super(id)\r\n    this.loader = loader\r\n  }\r\n\r\n  init() {\r\n    this.$el.addEventListener('click', buttonHandler.bind(this))\r\n  }\r\n\r\n  async onShow() {\r\n    // при загрузке компонента Post вызываем loader\r\n    this.loader.show()\r\n    // const data = await apiService.fetchPosts()\r\n    const fbData = await _services_api_service__WEBPACK_IMPORTED_MODULE_1__[\"apiService\"].fetchPosts()\r\n    // TransformService.fbObjectToArray(fbData)\r\n    const posts = _services_transform_service__WEBPACK_IMPORTED_MODULE_2__[\"TransformService\"].fbObjectToArray(fbData)\r\n\r\n\r\n    // console.log('post onShow, Data', data);\r\n    console.log('post onShow, fbData', fbData);\r\n    console.log('posts', posts);\r\n\r\n    const html = posts.map(post => Object(_templates_post_template__WEBPACK_IMPORTED_MODULE_3__[\"renderPost\"])(post, { withButton: true }))\r\n    // console.log(html);\r\n    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))\r\n    this.loader.hide()\r\n\r\n  }\r\n\r\n  // для очистки списка постов при уходе на другую вкладку будем очищать html\r\n  onHide() {\r\n    this.$el.innerHTML = ''\r\n  }\r\n}\r\n\r\n\r\n\r\nfunction buttonHandler(event) {\r\n\r\n  const $el = event.target\r\n  const id = $el.dataset.id\r\n  const title = $el.dataset.title\r\n  const date = $el.dataset.date\r\n\r\n  // console.log('buttonHandler', event);\r\n\r\n  if (id) {\r\n    // console.log('id = ', id);\r\n    let favorites = JSON.parse(localStorage.getItem('favorites')) || []\r\n    const candidate = favorites.find(p => p.id === id)\r\n\r\n\r\n    console.log(favorites);\r\n    // if (favorites.includes(id)) {\r\n    if (candidate) {\r\n      //удалить вхождение\r\n      // favorites = favorites.filter(fId => fId !== id)\r\n      favorites = favorites.filter(p => p.id !== id)\r\n\r\n      $el.textContent = 'Сохранить'\r\n      $el.classList.add('button-primary')\r\n      $el.classList.remove('button-danger')\r\n    } else {\r\n      // добавить вхождение\r\n\r\n      // favorites.push(id, title)\r\n      favorites.push({ id, title, date })\r\n\r\n      $el.textContent = 'Удалить'\r\n      $el.classList.remove('button-primary')\r\n      $el.classList.add('button-danger')\r\n    }\r\n    localStorage.setItem('favorites', JSON.stringify(favorites))\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/posts.component.js?");

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nclass Component {\r\n  constructor(id) {\r\n    this.$el = document.getElementById(id)\r\n    this.init() //после создания эл-та вызываем инициализацию\r\n  }\r\n  init() { }\r\n\r\n  onShow() { }\r\n\r\n  onHide() { }\r\n\r\n  hide() {\r\n    this.$el.classList.add('hide')\r\n    this.onHide()\r\n  }\r\n\r\n  show() {\r\n    this.$el.classList.remove('hide')\r\n    this.onShow()\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/core/component.js?");

/***/ }),

/***/ "./src/core/form.js":
/*!**************************!*\
  !*** ./src/core/form.js ***!
  \**************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n\r\nclass Form {\r\n  constructor(form, controls) {\r\n    this.form = form\r\n    this.controls = controls\r\n  }\r\n\r\n  value() {\r\n    const value = {}\r\n    Object.keys(this.controls).forEach(control => {\r\n      value[control] = this.form[control].value\r\n    })\r\n    return value\r\n  }\r\n  //очистка формы\r\n  clear() {\r\n    Object.keys(this.controls).forEach(control => {\r\n      this.form[control].value = '' // во все контролы прописываем значение пустой строи\r\n    })\r\n  }\r\n  // метод правильности формы\r\n  isValid() {\r\n    let isFormValid = true\r\n\r\n    Object.keys(this.controls).forEach(control => {\r\n      const validators = this.controls[control]\r\n\r\n\r\n      let isValid = true\r\n      validators.forEach(validator => {\r\n        isValid = validator(this.form[control].value) && isValid\r\n\r\n      })\r\n      // if(!isValid){\r\n      //   setError(this.form[control])\r\n      //   } else {\r\n      //     clearError(this.form[control])\r\n      //   }\r\n\r\n      isValid ? clearError(this.form[control])\r\n        : setError(this.form[control])\r\n\r\n\r\n      isFormValid = isFormValid && isValid\r\n    })\r\n\r\n    return isFormValid\r\n  }\r\n}\r\n\r\nfunction setError($control) {\r\n  clearError($control) // очищаем сообщение об ошибках если она была ранее\r\n  console.log($control.name);\r\n  let error = `<p class=\"validation-error\">Введите не менее ${10} символов</p>`\r\n  if ($control.name === 'title') {\r\n    error = `<p class=\"validation-error\">Это поле не должно быть пустым</p>`\r\n  }\r\n  //  else {\r\n  //   error = '<p class=\"validation-error\">Введите не менее 10 символов</p>'\r\n  // }\r\n\r\n  $control.classList.add('invalid')\r\n  $control.insertAdjacentHTML('afterend', error)\r\n}\r\n\r\nfunction clearError($control) {\r\n  $control.classList.remove('invalid')\r\n  if ($control.nextSibling) {\r\n    $control.closest('.form-control')\r\n      .removeChild($control.nextSibling)\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/core/form.js?");

/***/ }),

/***/ "./src/core/validators.js":
/*!********************************!*\
  !*** ./src/core/validators.js ***!
  \********************************/
/*! exports provided: Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Validators\", function() { return Validators; });\nclass Validators {\r\n  static required(value = '') {\r\n    return value && value.trim()\r\n  }\r\n\r\n  //? чтобы достать значения из полей и связать их с нашим установленной длиной поля применияем замыкания - возвращаем значение value которое не \r\n  static minLength(length) {\r\n    \r\n    return value => {\r\n      return value.length >= length\r\n    }\r\n  }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/core/validators.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.component */ \"./src/components/header.component.js\");\n/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation.component */ \"./src/components/navigation.component.js\");\n/* harmony import */ var _components_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create.component */ \"./src/components/create.component.js\");\n/* harmony import */ var _components_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts.component */ \"./src/components/posts.component.js\");\n/* harmony import */ var _components_favorite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/favorite.component */ \"./src/components/favorite.component.js\");\n/* harmony import */ var _components_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loader.component */ \"./src/components/loader.component.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const header = new HeaderComponent('header')\r\n// console.log('header: => ', header)\r\nnew _components_header_component__WEBPACK_IMPORTED_MODULE_1__[\"HeaderComponent\"]('header')\r\n\r\nconst navigation = new _components_navigation_component__WEBPACK_IMPORTED_MODULE_2__[\"NavigationComponent\"]('navigation')\r\nconsole.log('navigation => ', navigation);\r\n\r\nconst loader = new _components_loader_component__WEBPACK_IMPORTED_MODULE_6__[\"LoaderComponent\"]('loader')\r\n\r\n\r\nconst create = new _components_create_component__WEBPACK_IMPORTED_MODULE_3__[\"CreateComponent\"]('create')\r\nconst posts = new _components_posts_component__WEBPACK_IMPORTED_MODULE_4__[\"PostsComponent\"]('posts', { loader })\r\nconst favorite = new _components_favorite_component__WEBPACK_IMPORTED_MODULE_5__[\"FavoriteComponent\"]('favorite', { loader })\r\n\r\nnavigation.registerTabs([\r\n  { name: 'create', component: create },\r\n  { name: 'posts', component: posts },\r\n  { name: 'favorite', component: favorite }\r\n\r\n])\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/api.service.js":
/*!*************************************!*\
  !*** ./src/services/api.service.js ***!
  \*************************************/
/*! exports provided: apiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiService\", function() { return apiService; });\n// https://js-wfm-ine.firebaseio.com/\r\n\r\nclass ApiService {\r\n  constructor(baseUrl) {\r\n    this.url = baseUrl\r\n  }\r\n\r\n  async createPost(post) {\r\n    try {\r\n      const request = new Request(this.url + 'posts.json', {\r\n        method: 'post',\r\n        body: JSON.stringify(post)\r\n      })\r\n      return useRequest(request)\r\n    } catch (error) {\r\n      console.error(error);\r\n    }\r\n  }\r\n\r\n  async fetchPosts() {\r\n    try {\r\n      const request = new Request(`${this.url}posts.json`, {\r\n        method: 'get'\r\n      })\r\n      return useRequest(request)\r\n    } catch (error) {\r\n      console.error('ошибка при получении данных из базы', error);\r\n    }\r\n  }\r\n\r\n  async fetchPostById(id){\r\n    try {\r\n      const request = new Request(`${this.url}posts/${id}.json`, {\r\n        method: 'get'\r\n      })\r\n      return useRequest(request)\r\n    } catch (error) {\r\n      console.error('ошибка при получении данных из базы', error);\r\n    }\r\n  }\r\n}\r\n\r\nasync function useRequest(request) {\r\n  const responce = await fetch(request)\r\n  return await responce.json()\r\n}\r\n\r\n\r\nconst apiService = new ApiService\r\n  ('https://js-wfm-ine.firebaseio.com/')\n\n//# sourceURL=webpack:///./src/services/api.service.js?");

/***/ }),

/***/ "./src/services/transform.service.js":
/*!*******************************************!*\
  !*** ./src/services/transform.service.js ***!
  \*******************************************/
/*! exports provided: TransformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TransformService\", function() { return TransformService; });\nclass TransformService{\r\n  static fbObjectToArray(fbData){\r\n    /*========================\r\n    Object.keys(fbData).forEach(key =>{\r\n      // console.log(key);\r\n      const item =fbData[key]\r\n      // console.log(item);\r\n      item.id = key\r\n      console.log(item);\r\n     =============================*/\r\n     return Object.keys(fbData).map(key =>{\r\n      // console.log(key);\r\n      const item =fbData[key]\r\n      // console.log(item);\r\n      item.id = key\r\n      // console.log(item);\r\n      return item\r\n    })\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/services/transform.service.js?");

/***/ }),

/***/ "./src/templates/post.template.js":
/*!****************************************!*\
  !*** ./src/templates/post.template.js ***!
  \****************************************/
/*! exports provided: renderPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPost\", function() { return renderPost; });\nfunction renderPost(post, options = {}) {\r\n  const tag = post.type === 'news'\r\n    ? '<li class=\"tag tag-blue tag-rounded\">Новость</li>'\r\n    : '<li class=\"tag  tag-rounded\">Заметка</li>'\r\n\r\n  const favorites = JSON.parse(localStorage.getItem('favorites')) || []\r\n  const candidate = favorites.find(p => p.id === post.id)\r\n\r\n  const button = candidate\r\n    ? `<button class=\"button-round button-small button-danger \" data-id=\"${post.id}\" data-title=\"${post.title}\" data-date=\"${post.date}\">Удалить</button>`\r\n    : `<button class=\"button-round button-small button-primary \" data-id=\"${post.id}\"data-title=\"${post.title}\" data-date=\"${post.date}\" >Сохранить</button>`\r\n  return `\r\n    <div class=\"panel\">\r\n      <div class=\"panel-head\">\r\n        <p class=\"panel-title\">${post.title}</p>\r\n        <ul class=\"tags\">\r\n          ${tag}\r\n        </ul>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p class=\"multi-line\">${post.fulltext}</p>\r\n      </div>\r\n      <div class=\"panel-footer w-panel-footer\">\r\n        <small>${post.date}</small>\r\n        ${options.withButton ? button : ''}\r\n      </div>\r\n    </div>\r\n  `\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/templates/post.template.js?");

/***/ })

/******/ });