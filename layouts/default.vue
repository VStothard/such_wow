<template>
  <div class="border-t-8 border-black">
    <div class="page-wrapper">
      <Nav></Nav>
      <nuxt/>
      <InstaFeed></InstaFeed>
      <ContactBar></ContactBar>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
.page-wrapper {
  @apply max-w-2xl mx-auto;
}
</style>
