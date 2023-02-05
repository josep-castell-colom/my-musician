<script setup lang="ts">
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <router-link :to="{ name: 'musicians.show', params: { id: props.id } }">
    <div
      class="group flex flex-col relative mx-4 w-80 min-h-[28rem] cursor-pointer rounded-sm border-1 border-gray-500 border hover:scale-105 transition-transform duration-300 overflow-hidden bg-white shadow-inner hover:shadow-xl"
    >
      <div class="overflow-hidden aspect-video"><slot name="img"></slot></div>
      <div class="flex-grow px-8 py-6">
        <h3 class="font-bold"><slot name="name"></slot></h3>
        <p class="mt-3 text-gray-800"><slot name="description"></slot></p>
      </div>
      <div
        class="relative bottom-0 px-10 py-6 w-full h-full text-center bg-orange-100 border-t shadow-inner border-t-gray-400 group-hover:text-left"
      >
        <p class="text-gray-600 group-hover:hidden">Más info</p>
        <div class="hidden group-hover:block">
          <p class="font-bold text-gray-500">
            Instrumento:
            <span class="text-gray-800"><slot name="instrument"></slot></span>
          </p>
          <p class="font-bold text-gray-500">
            Rol: <span class="text-gray-800"><slot name="rol"></slot></span>
          </p>
          <p class="text-gray-500">
            Edad: <span class="text-gray-800"><slot name="age"></slot></span>
          </p>
          <p class="text-gray-500">
            Padrinos:
            <span class="text-gray-800"><slot name="patrons"></slot></span>
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
