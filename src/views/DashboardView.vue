<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import HorizontalCard from '@/components/HorizontalCard.vue';
import { useUsersStore } from '@/stores/users';
import { useMusiciansStore } from '@/stores/musicians';
import type Musician from '@/types/Musician';
const { checkAuthUser } = useUsersStore();
const { fetchMusician } = useMusiciansStore();
await checkAuthUser();
const usersStore = useUsersStore();
const authUser = usersStore.authUser.value;
const musiciansStore = useMusiciansStore();
const myMusicians = ref(new Array<Musician>());

async function getMyMusicians() {
  const authUserMusicians = authUser.myMusicians;
  if (authUserMusicians) {
    if (authUserMusicians.length > 0) {
      myMusicians.value = new Array<Musician>();
      authUserMusicians.forEach(async (m: number) => {
        await fetchMusician(m);
        myMusicians.value.push(musiciansStore.musician);
      });
    }
  }
}

onMounted(() => {
  getMyMusicians();
});

watch(usersStore.authUser, () => {
  getMyMusicians();
});
</script>
<template>
  <div class="max-w-5xl mx-auto">
    <div
      class="flex w-full justify-between items-center bg-white m-6 mt-20 py-6 px-28 rounded-lg"
    >
      <h2 class="text-lg font-bold">Bienvenido, {{ authUser.name }}!</h2>
      <p class="text-sm text-gray-600">Editar perfil</p>
    </div>
    <div v-if="myMusicians" class="bg-white w-full m-6 p-6 px-28 rounded-lg">
      <h3 class="text-xl my-8">MyMusicians</h3>
      <div class="flex flex-col items-center justify-center">
        <div v-for="musician in myMusicians" class="m-6">
          <HorizontalCard :key="musician['id']" :id="musician['id']">
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
