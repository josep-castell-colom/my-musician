<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
import { ref } from 'vue';
const { fetchUsers, login } = useUsersStore();
await fetchUsers();
const email = ref('');
const password = ref('');
</script>
<template>
  <img
    src="src/assets/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
    alt="Primer plano de un músico tocando una guitarra acústica."
    class="fixed top-0 mx-auto w-full h-screen"
  />
  <div class="flex relative flex-col justify-center items-center h-screen">
    <div
      class="flex absolute flex-col justify-center p-12 w-screen h-screen text-orange-900 rounded-2xl shadow-lg backdrop-blur-lg sm:block align-center sm:p-24 sm:h-auto sm:w-auto dark:text-orange-200 bg-black/20"
    >
      <h3 class="font-bold underline">Log in</h3>
      <form action="" class="flex flex-col">
        <label for="username" class="mt-4 mb-2">Correo electrónico: </label>
        <input
          v-model="email"
          type="text"
          name="username"
          id="username"
          class="pl-1 text-orange-900"
        />
        <label for="password" class="mt-4 mb-2"> Contraseña: </label>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          class="pl-1 text-orange-900"
        />
        <router-link :to="{ name: 'register' }" class="mt-4 mb-2 text-sm"
          >¿No tienes cuenta? Regístrate</router-link
        >
        <input
          @click.prevent="login(email, password)"
          type="submit"
          value="Iniciar sesión"
          class="p-3 mt-4 text-black bg-gray-100 rounded-full hover:bg-orange-200 hover:cursor-pointer hover:shadow-md shadow-gray-500"
        />
      </form>
    </div>
  </div>
</template>
