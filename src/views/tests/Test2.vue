<template>
  <div>
  <h1>Test2 - VUE axios graphQL</h1>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        {{ book.id }} {{ book.book_title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      books: []
    }
  },
  async mounted () {
    // console.log('OOXX123')
    try {
      var result = await axios({
        method: 'POST',
        url: 'http://graphiql.sg.sxbwpic.com/graphql',
        data: {
          query: `
            {
              books {
                id,
                tid,
                book_title
              }
            }
          `
        }
      })
      // console.log(result)
      this.books = result.data.data.books
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped></style>
