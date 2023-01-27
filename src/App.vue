<script setup lang="ts">
import Header from './components/MainHeader.vue';
import Footer from './components/MainFooter.vue';
</script>

<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <Header />
    <img
      src="./assets/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
      alt="Primer plano de un músico tocando una guitarra acústica."
      class="w-full h-screen top-0 mx-auto fixed"
    />
    <RouterView />
    <Footer />
  </div>
</template>
