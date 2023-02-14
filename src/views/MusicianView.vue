<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import Footer from '@/components/MainFooter.vue';

import { useMusiciansStore } from '@/stores/musicians';
import type Musician from '@/types/Musician';
import { useUsersStore } from '@/stores/users';
const { fetchMusician } = useMusiciansStore();
const { addMusician, checkAuthUser, hasMusician } = useUsersStore();

const musiciansStore = useMusiciansStore();
const usersStore = useUsersStore();

const route = useRoute();
const id = computed(() => parseInt(route.params.id)).value;

await fetchMusician(id);
await checkAuthUser();

const musiciansStoreError = musiciansStore.error;
const musician: Musician = musiciansStore.musician;
const authUser = ref();

try {
  authUser.value = usersStore.authUser.value;
} catch (err) {
  console.log('NO AUTH USER');
}

function getFullName() {
  return `${musician.name} ${musician.lastname}`;
}

function getMdImgUrl() {
  return `../src/assets/images/musicians/${musician.imgName}-md.jpg`;
}

function getSmImgUrl() {
  return `../src/assets/images/musicians/${musician.imgName}-sm.jpg`;
}
console.log(authUser.value);
</script>

<template>
  <div v-if="musiciansStoreError">
    <p class="text-red-700">Error al cargar los datos</p>
  </div>
  <div v-else class="relative">
    <div
      class="relative flex justify-center items-center h-screen overflow-hidden bg-no-repeat bg-cover bg-center"
      :style="{ 'background-image': `url(${getSmImgUrl()})` }"
    >
      <div
        class="h-screen w-screen flex justify-center items-center overflow-hidden relative backdrop-blur-sm"
      >
        <img
          :src="getMdImgUrl()"
          alt=""
          class="absolute left-1/2 -translate-x-1/2 h-screen max-w-none"
        />
      </div>
      <div
        class="absolute text-right pr-24 w-full bg-gradient-to-l from-black/80"
      >
        <h2 class="text-7xl text-white drop-shadow-md font-bold">
          {{ getFullName() }}
        </h2>
        <h3 class="text-5xl text-white drop-shadow-md font-bold">
          {{ musician.instrument }}
        </h3>
      </div>
    </div>
    <div class="relative bg-gray-300 pb-24">
      <div
        class="sticky top-12 z-30 w-full h-20 flex justify-around items-center bg-orange-100 md:text-lg xl:px-80 drop-shadow-lg"
      >
        <p>
          Nombre: <span class="font-bold">{{ getFullName() }}</span>
        </p>
        <p>
          Instrumento: <span class="font-bold">{{ musician.instrument }}</span>
        </p>
        <p>
          Edad: <span class="font-bold">{{ musician.age }}</span>
        </p>
        <p>
          Mecenas: <span class="font-bold">{{ musician.patrons.length }}</span>
        </p>
      </div>
      <div class="flex w-3/4 bg-orange-100 mx-auto mt-24 p-12 rounded-lg">
        <div class="w-2/3 border-r border-gray-500 p-12">
          <h2 class="text-5xl font-bold drop-shadow-md mb-10">
            {{ getFullName() }}
          </h2>
          <p class="lg:text-xl leading-3 text-gray-800">
            {{ musician.description }}
          </p>
          <p class="lg:text-lg leading-3 mt-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            neque eum porro odit tenetur laborum provident omnis odio ex! Totam
            vero excepturi temporibus, vitae odio perspiciatis corrupti
            voluptatum nulla quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus neque eum porro odit tenetur laborum
            provident omnis odio ex! Totam vero excepturi temporibus, vitae odio
            perspiciatis corrupti voluptatum nulla quibusdam.
          </p>
          <p class="lg:text-lg leading-3 mt-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            suscipit rem earum placeat, officia delectus nostrum sequi quam
            iusto dolor dolorum tenetur libero quia harum sint deleniti officiis
            at. Cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Delectus neque eum porro odit tenetur laborum provident omnis
            odio ex! Totam vero excepturi temporibus, vitae odio perspiciatis
            corrupti voluptatum nulla quibusdam.
          </p>
        </div>
        <div
          class="w-1/3 text-center p-12 flex flex-col justify-center items-center"
        >
          <div v-if="authUser && !hasMusician(authUser, musician.id)">
            <h3 class="font-bold text-2xl">Apadrina a este músico</h3>
            <p class="mt-3 lg:text-lg">
              Actualmente tiene {{ musician.patrons.length }} mecenas
            </p>
            <ul class="mt-8 flex flex-col justify-around items-center">
              <li @click="addMusician(authUser, musician.id)" class="mt-3">
                1€ al mes
              </li>
              <li @click="addMusician(authUser, musician.id)" class="mt-3">
                5€ al mes
              </li>
              <li @click="addMusician(authUser, musician.id)" class="mt-3">
                15€ al mes
              </li>
              <li @click="addMusician(authUser, musician.id)" class="mt-3">
                50€ al mes
              </li>
              <li @click="addMusician(authUser, musician.id)" class="mt-3">
                100€ al mes
              </li>
              <li @click="addMusician(authUser, musician.id)" class="mt-3">
                Haz una donación puntual
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
