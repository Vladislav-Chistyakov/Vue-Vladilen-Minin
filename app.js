const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите текст',
      inputValue: '',
      notes: [],
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    deleteNote(ind) {
      this.notes.splice(ind, 1)
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },

  },
  computed: {
    doubleCount() {
      console.log("Povtor...")
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
      console.log('resultat: ', value)
    }
  }
}

Vue.createApp(App).mount('#app') 