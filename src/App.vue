<script setup lang="ts">
import Header from './components/MainHeader.vue';
</script>

<template>
  <div class="overflow-x-hidden w-screen h-screen">
    <Header />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
