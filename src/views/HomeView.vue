<script setup lang="ts">
import CardsCarousel from '@/components/CardsCarousel.vue';
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <div
      class="h-screen w-full relative mx-auto text-center overflow-hidden flex"
    >
      <div
        class="absolute top-1/2 w-full -translate-y-1/2 backdrop-blur-sm bg-gradient-to-b from-black/0 via-black/40 to-black/0 py-12"
      >
        <h1
          class="text-8xl text-white drop-shadow-xl font-bold font-abril-fatface"
        >
          Adopta un músico
        </h1>
        <hr class="w-1/2 mx-auto my-8" />
        <p class="text-gray-200 drop-shadow-md leading-7 lg:text-lg">
          A parte de l@s famos@s músic@s ‘trending topic’, l@s demás pasan
          <span class="text-orange-200">hambre</span> y
          <span class="text-orange-200">frío</span> en la calle.<br />
          Nosotros te damos la posibilidad de adoptar una de estas criaturas
          para que su vida sea un poco más fácil.<br />
        </p>
        <p class="text-gray-200 drop-shadow-md mt-4 leading-7 lg:text-lg">
          Puedes elegir la que más te guste y mejor se adapte a tus
          posibilidades económicas.
        </p>
        <p class="text-orange-200 drop-shadow-md mt-7 leading-7 lg:text-lg">
          ¡Él lo haría por tí!
        </p>
        <!-- <div class="w-px h-5 mt-4 mx-auto bg-white"></div> -->
        <img
          class="mx-auto w-96 my-8"
          src="src/assets/DecorativeDivider101.svg"
          aria-hidden="true"
        />
        <h3
          class="font-abril-fatface italic text-2xl drop-shadow-lg text-gray-200"
        >
          MyMusician
        </h3>
      </div>
    </div>
    <div
      class="w-full min-h-screen -mb-40 relative z-20 bg-orange-100 flex flex-col justify-center items-center"
    >
      <h2 class="font-bold mb-16 mt-14 text-center">
        L@s siguientes músic@s están sin apadrinar... :(
      </h2>
      <div class="container w-screen flex justify-center items-center">
        <CardsCarousel />
      </div>
      <router-link to="/explore">
        <button
          class="mt-20 p-4 rounded-full text-white hover:drop-shadow-lg hover:scale-105 transition-transform duration-300 font-bold bg-orange-800"
        >
          Sigue buscando
        </button>
      </router-link>
    </div>
    <svg
      class="relative z-10 bg-orange-100 -mt-30 -mb-1"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#993412"
        fill-opacity="1"
        d="M0,224L120,234.7C240,245,480,267,720,261.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
    <div
      class="w-full min-h-screen relative z-20 bg-orange-800 flex flex-col justify-center items-center"
    >
      <div class="bg-orange-100 p-6 my-8 rounded-lg">
        <img
          src="src/assets/images/unsplash-austin-wade.jpg"
          alt="Banda de músicos jóvenes deprimidos."
          class="rounded-lg"
        />
      </div>
      <div class="text-center p-8">
        <h2
          class="inline-block text-5xl font-bold text-orange-100 drop-shadow-xl"
        >
          Parecen felices,
        </h2>
        <br />
        <h2
          class="inline-block text-5xl font-bold text-orange-400 drop-shadow-xl"
        >
          pero no lo son.
        </h2>
        <p
          class="w-[50vw] text-gray-200 drop-shadow-md leading-7 lg:text-lg mt-10"
        >
          L@s músic@s promedio tienen muchas dificultades para llegar a fin de
          mes y pagar sus alquileres.<br />
          El guitarrista principal no tiene dinero ni para comprar zapatos.<br />
        </p>
        <p class="text-gray-200 drop-shadow-md mt-4 leading-7 lg:text-lg">
          Con una pequeña ayuda podrán vivir más tranquilos y sentir que han
          elegido una profesión <span class="bg-gray-700">digna</span>.
        </p>
        <router-link to="/explore">
          <button
            class="mt-12 p-4 border-2 border-solid rounded-full text-white hover:drop-shadow-lg hover:scale-105 transition-transform duration-300 font-bold border-orange-800 bg-orange-600"
          >
            Apadrina un músico
          </button>
        </router-link>
      </div>
    </div>
    <svg class="relative z-10 bg-orange-100 -mt-20" viewBox="0 0 1440 320">
      <path
        fill="#993412"
        fill-opacity="1"
        d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
    <div
      class="w-full min-h-screen relative z-20 bg-orange-100 flex justify-center items-center"
    >
      <div class="bg-gray-900 p-6 my-8 rounded-lg">
        <img
          src="src/assets/images/unsplash-accordeon-horses.jpg"
          alt="Dos acordeonistas tocando en la calle con máscaras de caballo."
          class="rounded-lg"
        />
      </div>
      <div class="text-left pl-16 max-w-[50vw]">
        <h2
          class="inline-block text-5xl font-bold text-orange-400 drop-shadow-md"
        >
          Sin tu ayuda
        </h2>
        <br />
        <h2
          class="inline-block text-5xl font-bold text-orange-800 drop-shadow-md"
        >
          podrían acabar así.
        </h2>
        <p class="w-[50vw] text-gray-900 leading-7 lg:text-lg mt-10">
          L@s músic@s promedio tienen muchas dificultades para llegar a fin de
          mes y pagar sus alquileres.<br />
          El guitarrista principal no tiene dinero ni para comprar zapatos.<br />
        </p>
        <p class="text-gray-900 mt-4 leading-7 lg:text-lg">
          Con una pequeña ayuda podrán vivir más tranquilos y sentir que han
          elegido una profesión digna.
        </p>
        <router-link to="/explore">
          <button
            class="mt-12 p-4 border-2 border-solid rounded-full text-white hover:drop-shadow-lg hover:scale-105 transition-transform duration-300 font-bold border-orange-800 bg-orange-600"
          >
            Salva un músico
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
