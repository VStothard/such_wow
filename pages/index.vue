<template>
  <section>
    <li v-for="post in posts" :key="post">
      POST: {{ post }}
    </li>
    <BlogPostCarousel class="mt-8"></BlogPostCarousel>
    <ImageWithText class="mt-8 max-w-lg mx-auto"/>
    <BlogTileGrid class="mt-8" />
    <InstaFeed class="mt-8"></InstaFeed>
    <ContactBar class="mt-8"></ContactBar>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  data() {
    return {
      posts: []
    }
  },
  components: {
    Logo
  },
  asyncData ({env}) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.blogPost,
        order: '-sys.createdAt'
      })
    ]).then((posts) => {
      // console.log(posts, 1000);
      // return data that should be available
      // in the template
      this.posts = posts
      // return {
      //   posts: posts.items
      // }
    }).catch(console.error)
  },
  created() {
    console.log(process.env.spaceID, process.env.accessToken);
  }

  
}
</script>

<style>

.container {
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
}

</style>
