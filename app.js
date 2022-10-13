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
    inputChange(event) {
      this.inputValue = event.target.value;
    },
    clickBtn() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    }
  }
}

Vue.createApp(App).mount("#app")