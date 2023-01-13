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
    class="dark:bg-gray-800 w-full h-12 flex items-center text-gray-100 justify-between shadow-2xl fixed z-50"
  >
    <h1 class="font-abril-fatface text-2xl ml-4 underline"><a href="/">MyMusician</a></h1>
    <div>
      <a v-if="!userAuth()" class="text-xs" href="/login">Log in</a>
      <a v-if="!userAuth()" href="/register" class="ml-2 mr-4 text-xs">Register</a>
    </div>
  </header>
</template>
