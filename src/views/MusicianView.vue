<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMusiciansStore } from "@/stores/musicians";
import type Musician from "@/types/Musician";
const { fetchMusician } = useMusiciansStore();

const store = useMusiciansStore();

const route = useRoute();
const id = computed(() => parseInt(route.params.id[0])).value;
await fetchMusician(id);
const musician: Musician = store.musician;
</script>
<template>
  <h2 class="relative mt-12">{{ musician.name }}</h2>
</template>
