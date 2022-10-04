const App = {
  data() {
    return {
      placeholder: 'Введите текст',
      appTitle: 'Список заметок',
      inputValue: '',
      notes: [],
    }
  },
  methods: {
    inputChangeHandler() {
      this.inputValue = event.target.value;
    },
    clickBtn() {
      this.notes.push(this.inputValue)
      this.inputValue = ""
    }
  }
}

Vue.createApp(App).mount('#app')
