<script setup lang="ts">
import Footer from '@/components/MainFooter.vue';
import { useMusiciansStore } from '@/stores/musicians';
import type Musician from '@/types/Musician';
const { fetchMusicians } = useMusiciansStore();

const store = useMusiciansStore();

await fetchMusicians();

const musicians = store.musicians.map((musician: Musician) => musician);

const error = null; // borrar
</script>

<template>
  <div class="w-full h-full mt-12 relative flex flex-col">
    <div
      class="h-[40vh] w-full bg-orange-100 flex flex-col items-center justify-center"
    >
      <h3 class="mx-auto text-4xl font-bold text-gray-800">
        {{ musicians.length }} músicos confían en nosotros
      </h3>
    </div>
  </div>
  <Footer />
</template>
