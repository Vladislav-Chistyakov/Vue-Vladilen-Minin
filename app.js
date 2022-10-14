const App = {
  data() {
    return {
      title: "Список заметок",
      placeholder: "Плейсхолдер",
      inputValue: "",
      notes: [],
    }    
  }, 
  methods: {
    clickBtn() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNote(index) {
      console.log("ev", index);
      this.notes.splice(index, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = '';
      }
    },
  }
}

Vue.createApp(App).mount("#app")