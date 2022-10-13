const App = {
  data() {
    return {
      counter: 30,
      title: "Счётчик: "
    }    
  }
}


Vue.createApp(App).mount("#app")