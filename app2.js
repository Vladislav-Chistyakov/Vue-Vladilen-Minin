Vue.createApp({
  data() {
    return {
      myHTML: '<h1>Vue 3 App</h1>',
      title: 'Я есть Грут',
      person: {
        firstName: 'Vladislav',
        lastName: 'Chistyakov',
        age: 22,
      },
      items: [1, 2, 3, 4, 5, 6],
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  },
  methods: {
    addItem() {
      console.log(this.$refs.myInput.value)
    },
  }
}).mount('#app')