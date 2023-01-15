<script setup lang="ts">
import CardsCarousel from '@/components/CardsCarousel.vue';
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div
      class="h-screen w-full relative mx-auto text-center overflow-hidden flex"
    >
      <div
        class="absolute top-1/2 w-full -translate-y-1/2 backdrop-blur-sm bg-gradient-to-b from-black/0 via-black/30 to-black/0 py-12"
      >
        <h3 class="text-7xl text-white drop-shadow-xl font-bold">
          Adopta un músico
        </h3>
        <hr class="w-1/2 mx-auto mt-4" />
        <p class="text-gray-200 drop-shadow-md mt-8 leading-7">
          A parte de los famosos músicos ‘trending topic’, los demás pasan
          hambre y frío en la calle.<br />
          Nosotros te damos la posibilidad de adoptar una de estas criaturas
          para que su vida sea un poco más fácil.<br />
        </p>
        <p class="text-gray-200 drop-shadow-md mt-4 leading-7">
          Puedes elegir el que más te guste y mejor se adapte a tus
          posibilidades económicas.
        </p>
        <p class="text-gray-200 drop-shadow-md mt-7 leading-7">
          ¡Él lo haría por tí!
        </p>
        <div class="w-px h-5 mt-4 mx-auto bg-white"></div>
        <h3
          class="font-abril-fatface italic text-2xl drop-shadow-lg text-gray-200 mt-4"
        >
          MyMusician
        </h3>
      </div>
    </div>
    <div
      class="w-full h-screen relative z-10 bg-orange-100 flex flex-col justify-center items-center"
    >
      <div class="container w-screen flex justify-center items-center">
        <CardsCarousel />
      </div>
      <button
        class="mt-4 p-4 border-2 border-solid rounded-full text-white hover:drop-shadow-lg hover:scale-105 transition-transform duration-300 font-bold border-orange-800 bg-orange-600"
      >
        <route-link to="/explore">Encuentra más músicos</route-link>
      </button>
    </div>
  </div>
</template>
