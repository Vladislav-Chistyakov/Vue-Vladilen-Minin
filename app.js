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
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    removeNote(index) {
      console.log("ev", index);
      this.notes.splice(index, 1);
    },
  }
}

Vue.createApp(App).mount("#app")