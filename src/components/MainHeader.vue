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
    <h1
      class="font-abril-fatface text-2xl ml-4 italic hover:scale-110 transition-transform duration-300 underline"
    >
      <router-link to="/">MyMusician</router-link>
    </h1>
    <div>
      <router-link
        to="/login"
        v-if="!userAuth()"
        class="text-xs hover:underline"
        >Log in</router-link
      >
      <router-link
        v-if="!userAuth()"
        class="ml-2 mr-4 text-xs hover:underline"
        to="/register"
        >Register</router-link
      >
    </div>
  </header>
</template>
