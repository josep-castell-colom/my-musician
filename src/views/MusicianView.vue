<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMusiciansStore } from "@/stores/musicians";
import type Musician from "@/types/Musician";
const { fetchMusician } = useMusiciansStore();

const store = useMusiciansStore();
const route = useRoute();

const id = computed(() => parseInt(route.params.id)).value;

await fetchMusician(id);

const error = store.error;
const musician: Musician = store.musician;
</script>

<template>
  <div v-if="error">
    <p class="text-red-700">Error al cargar los datos</p>
  </div>
  <div v-else>
    <h2 class="relative mt-12">{{ musician.name }}</h2>
  </div>
</template>
