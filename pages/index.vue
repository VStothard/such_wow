<template>
  <section>
    <BlogPostCarousel class="mt-8"></BlogPostCarousel>
    <ImageWithText class="mt-8 max-w-lg mx-auto"/>
    <BlogTileGrid class="mt-8" />
    <InstaFeed class="mt-8"></InstaFeed>
    <ContactBar class="mt-8"></ContactBar>
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
