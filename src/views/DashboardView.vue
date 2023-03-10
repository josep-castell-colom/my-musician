<script setup lang="ts">
import { storeToRefs } from 'pinia';

import HorizontalCard from '@/components/HorizontalCard.vue';
import { useUsersStore } from '@/stores/users';
import { onBeforeMount } from 'vue';

const { checkAuthUser, getAuthUserMusicians, deleteUser } = useUsersStore();
const usersStore = useUsersStore();
const { authUser, authUserMusicians } = storeToRefs(usersStore);

async function reload() {
  await checkAuthUser();
  await getAuthUserMusicians();
}

async function authOrRedirect() {
  try {
    await checkAuthUser();
    await getAuthUserMusicians();
  } catch (err) {
    console.log(err);
    window.location.href = '/login';
  }
}

async function deleteAccountHandler() {
  if (
    confirm('¿Realmente desea eliminar su cuenta? Perderá toda su información.')
  ) {
    deleteUser(authUser.value.value.id);
  }
}

onBeforeMount(async () => {
  await authOrRedirect();
});
</script>
<template>
  <div class="mx-auto max-w-5xl">
    <div
      class="flex justify-between items-center px-28 py-6 m-6 mt-20 w-full bg-white rounded-lg"
    >
      <h2 class="text-lg font-bold">Bienvenido, {{ authUser.value.name }}!</h2>
      <p @click="deleteAccountHandler()" class="text-sm text-gray-600">
        Eliminar cuenta
      </p>
    </div>
    <div
      v-if="authUserMusicians"
      class="p-6 px-28 m-6 w-full bg-white rounded-lg"
    >
      <h3 class="my-8 text-xl">MyMusicians:</h3>
      <div class="flex flex-col justify-center items-center">
        <div
          v-for="musician in authUserMusicians"
          :key="musician['id']"
          class="m-6"
        >
          <HorizontalCard :id="musician['id']" @unsubscribe="reload()">
            <template #img
              ><img
                class="absolute top-0 max-h-none"
                :src="
                  'src/assets/images/musicians/' +
                  musician['imgName'] +
                  '-sm.jpg'
                "
            /></template>
            <template #name
              >{{ musician.name }} {{ musician.lastname }}</template
            >
            <template #description>{{ musician.description }}</template>
            <template #instrument>{{ musician.instrument }}</template>
            <template #rol>
              <span v-for="(rol, index) in musician.rol" :key="index">
                <span v-if="index != musician.rol.length - 1">{{ rol }}, </span>
                <span v-else>{{ rol }}</span>
              </span>
            </template>
            <template #age>{{ musician.age }}</template>
            <template #patrons>{{ musician.patrons.length }}</template>
          </HorizontalCard>
        </div>
      </div>
    </div>
  </div>
</template>
