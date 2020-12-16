import { defineComponent } from 'vue/dist/vue.esm-bundler'

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  name: 'deferred',

  data() {
    return {
      book: {
        title: 'Vue 3 Guide',
        author: 'Vue Team',
        year: 2020
      } as Book
    }
  },

  template: `
    <h3>{{ book.title }}</h3>
  `
})