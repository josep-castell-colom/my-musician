<script lang="ts">
export default {
  methods: {
    userAuth(): boolean {
      return localStorage.getItem('user') ? true : false;
    },
  },
};
</script>

<template>
  <header
    class="bg-orange-900 h-12 flex items-center text-gray-100 justify-between shadow-2xl"
  >
    <h1 class="text-2xl ml-4 underline"><a href="/">MyMusician</a></h1>
    <div>
      <a v-if="!userAuth()" href="/login">Log in</a>
      <a v-if="!userAuth()" href="/register" class="mx-4">Register</a>
    </div>
  </header>
</template>
