<script setup lang="ts">
import { onMounted, ref, watchEffect, watch } from "vue";
import { storeToRefs } from "pinia";

import HorizontalCard from "@/components/HorizontalCard.vue";
import { useUsersStore } from "@/stores/users";
// import { useMusiciansStore } from "@/stores/musicians";
// import type Musician from "@/types/Musician";

const { checkAuthUser, getAuthUserMusicians } = useUsersStore();
// const { fetchMusician } = useMusiciansStore();
const usersStore = useUsersStore();
const { authUser, authUserMusicians } = storeToRefs(usersStore);

await checkAuthUser();
await getAuthUserMusicians();

// const authUser = ref(usersStore.authUser);
// const authUserMusicians = usersStore.authUser.value.myMusicians;
// const musiciansStore = useMusiciansStore();
// const myMusicians = ref(new Array<Musician>());

// async function getMyMusicians(musicians: Array<number>) {
//   if (musicians) {
//     if (musicians.length > 0) {
//       myMusicians.value = new Array<Musician>();
//       musicians.forEach(async (m: number) => {
//         await fetchMusician(m);
//         myMusicians.value.push(musiciansStore.musician);
//       });
//     }
//   }
// }

async function reload() {
  await checkAuthUser();
  await getAuthUserMusicians();
}

onMounted(async () => {
  // await getMyMusicians();
});

watch(authUser, async () => {
  // await getMyMusicians(authUser.value.value.myMusicians);
  console.log(authUser.value);
});
</script>
<template>
  <div class="mx-auto max-w-5xl">
    <div
      class="flex justify-between items-center px-28 py-6 m-6 mt-20 w-full bg-white rounded-lg"
    >
      <h2 class="text-lg font-bold">Bienvenido, {{ authUser.value.name }}!</h2>
      <p class="text-sm text-gray-600">Editar perfil</p>
    </div>
    <div
      v-if="authUserMusicians"
      class="p-6 px-28 m-6 w-full bg-white rounded-lg"
    >
      <h3 class="my-8 text-xl">MyMusicians</h3>
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
