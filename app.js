const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите текст',
      inputValue: '',
    }
  },
  methods: {
    changeInputHeandler(event) {
      this.inputValue = event.target.value
    },
  }
}

Vue.createApp(App).mount('#app') 