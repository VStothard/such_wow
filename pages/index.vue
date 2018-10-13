<template>
  <section>
    <BlogPostCarousel></BlogPostCarousel>
    <ImageWithText />
    <BlogTileGrid />
    <InstaFeed></InstaFeed>
    <ContactBar></ContactBar>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
