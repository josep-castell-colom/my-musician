<script setup lang="ts">
import Header from "./components/MainHeader.vue";
</script>

<template>
  <div class="overflow-x-hidden w-screen h-screen">
    <Header />
    <img
      src="./assets/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
      alt="Primer plano de un músico tocando una guitarra acústica."
      class="fixed top-0 mx-auto w-full h-screen"
    />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
