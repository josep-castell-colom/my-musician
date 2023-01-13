<script setup lang="ts">
import CardVue from '../components/CardVue.vue';
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div class="h-screen w-full relative mx-auto text-center overflow-hidden flex">
      <div class="absolute top-1/2 w-full -translate-y-1/2 backdrop-blur-sm bg-black/10 py-12">
        <h3 class="text-7xl text-white drop-shadow-xl font-bold">MyMusician</h3>
        <h3 class="text-2xl drop-shadow-lg text-gray-200 mt-4">Adopta un músico</h3>
        <hr class="w-1/2 mx-auto mt-4">
        <p class="text-gray-200 drop-shadow-md mt-8 leading-7">A parte de los famosos músicos ‘trending topic’, los demás pasan hambre y frío en la calle.<br/>
          Nosotros te damos la posibilidad de adoptar una de estas criaturas para que su vida sea un poco más fácil.<br/>
          </p>
          <p class="text-gray-200 drop-shadow-md mt-2 leading-7">
          Puedes elegir el que más te guste y mejor se adapte a tus posibilidades económicas.<br/>
          <br/>
          ¡Él lo haría por tí!
        </p>
      </div>
    </div>
    <div class="w-full h-screen relative z-10 bg-orange-100 flex justify-center items-center">
      <div class="container flex justify-center items-center">
        <CardVue>
          <template #name>Antonio</template>
          <template #description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam.</template>
        </CardVue>
        <CardVue>
          <template #name>Carlota</template>
          <template #description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam.</template>
        </CardVue>
        <CardVue>
          <template #name>Daniel</template>
          <template #description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam.</template>
        </CardVue>
      </div>
    </div>
  </div>
</template>
