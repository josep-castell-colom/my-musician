<script setup lang="ts">
import { ref } from 'vue';
import CardVue from './CardVue.vue';
const data = ref(null);
const error = ref(null);

fetch('http://localhost:3000/musicians')
  .then(res => res.json())
  .then(json => (data.value = json))
  .catch(err => (error.value = err));
</script>

<template>
  <CardVue v-for="musician of data">
    <template #name>{{ musician.name }}</template>
    <template #description>{{ musician.description }}</template>
  </CardVue>
</template>
