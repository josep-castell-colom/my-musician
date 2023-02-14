<script setup lang="ts">
import CardsCarousel from '@/components/CardsCarousel.vue';
import Footer from '@/components/MainFooter.vue';
</script>
<script lang="ts">
export default {
  data() {
    return {
      xlScreen: false,
      screenSize: '',
    };
  },
  created() {
    window.addEventListener('resize', this.checkWidth);
  },
  mounted() {
    this.checkWidth();
  },
  unmounted() {
    window.removeEventListener('resize', this.checkWidth);
  },
  methods: {
    checkWidth() {
      this.xlScreen = window.innerWidth >= 1280;
      this.screenSize = this.getScreenSize();
    },
    getScreenSize() {
      const width = window.innerWidth;
      if (width <= 640) {
        return 'xs';
      }
      if (width <= 768) {
        return 'sm';
      }
      if (width <= 1024) {
        return 'md';
      }
      if (width <= 1280) {
        return 'lg';
      }
      if (width <= 1536) {
        return 'xl';
      }
      return '2xl';
    },
  },
};
</script>

<template>
  <img
    src="src/assets/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
    alt="Primer plano de un músico tocando una guitarra acústica."
    class="fixed top-0 mx-auto w-full h-screen"
  />
  <div class="flex flex-col items-center w-full">
    <div
      class="flex overflow-hidden relative mx-auto w-full h-screen text-center"
    >
      <div
        class="absolute top-1/2 px-8 py-12 pt-24 w-full bg-gradient-to-b backdrop-blur-sm -translate-y-1/2 from-black/0 via-black/40 to-black/0 md:pt-0"
      >
        <h2
          class="text-6xl font-bold text-white drop-shadow-xl md:text-7xl lg:text-8xl font-abril-fatface"
        >
          Adopta un músico
        </h2>
        <hr class="mx-auto my-8 w-1/2" />
        <p
          class="leading-7 text-gray-200 drop-shadow-md lg:text-xl 2xl:text-2xl"
        >
          A parte de l@s famos@s músic@s ‘trending topic’, l@s demás pasan
          <span class="text-orange-200">hambre</span> y
          <span class="text-orange-200">frío</span> en la calle.<br />
          Nosotros te damos la posibilidad de adoptar una de estas criaturas
          para que su vida sea un poco más fácil.<br />
        </p>
        <p
          class="mt-4 leading-7 text-gray-200 drop-shadow-md lg:text-xl 2xl:text-2xl"
        >
          Puedes elegir la que más te guste y mejor se adapte a tus
          posibilidades económicas.
        </p>
        <p class="mt-7 leading-7 text-orange-200 drop-shadow-md lg:text-4xl">
          ¡Él lo haría por tí!
        </p>
        <img
          class="mx-auto my-8 w-96"
          src="src/assets/DecorativeDivider101.svg"
          aria-hidden="true"
        />
        <h3
          class="text-2xl italic text-gray-200 drop-shadow-lg font-abril-fatface"
        >
          MyMusician
        </h3>
      </div>
    </div>
    <div
      class="w-full py-40 -mb-[10vw] lg:pb-12 relative z-20 bg-orange-100 flex flex-col justify-center items-center"
    >
      <h2 class="text-xl font-bold text-center text-gray-800 lg:text-2xl">
        Elige a alguien sin apadrinar:
      </h2>
      <div class="flex justify-center items-center">
        <Suspense>
          <CardsCarousel :xl-screen="xlScreen" :screen-size="screenSize" />
        </Suspense>
      </div>
      <router-link :to="{ name: 'musicians.index' }">
        <button
          class="p-4 font-bold text-white bg-orange-800 rounded-full transition-transform duration-300 hover:drop-shadow-lg hover:scale-105 hover:bg-orange-600"
        >
          Sigue buscando
        </button>
      </router-link>
    </div>
    <svg
      class="relative z-10 mt-8 -mb-1 bg-orange-100 xl:-mt-30"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#993412"
        fill-opacity="1"
        d="M0,224L120,234.7C240,245,480,267,720,261.3C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
    <div
      class="flex relative z-20 flex-col justify-center items-center pt-12 w-full min-h-screen bg-orange-800"
    >
      <div class="p-6 my-8 bg-orange-100 rounded-lg">
        <img
          v-if="!xlScreen"
          src="src/assets/images/unsplash-austin-wade.jpg"
          alt="Banda de músicos jóvenes deprimidos."
          class="rounded-lg"
        />
        <img
          v-else
          src="src/assets/images/unsplash-austin-wade-md.jpg"
          alt="Banda de músicos jóvenes deprimidos."
          class="max-w-3xl rounded-lg"
        />
      </div>
      <div class="p-8 text-center">
        <h2
          class="inline-block text-5xl font-bold text-orange-100 drop-shadow-xl 2xl:text-7xl"
        >
          Parecen felices,
        </h2>
        <br />
        <h2
          class="inline-block text-5xl font-bold text-orange-400 drop-shadow-xl 2xl:text-7xl"
        >
          pero no lo son
        </h2>
        <p
          class="xl:w-[50vw] text-gray-200 drop-shadow-md leading-7 lg:text-lg 2xl:text-2xl mt-10 mx-auto"
        >
          L@s músic@s promedio tienen muchas dificultades para llegar a fin de
          mes y pagar sus alquileres.<br />
          El guitarrista principal no tiene dinero ni para comprar zapatos.<br />
        </p>
        <p
          class="mt-4 leading-7 text-gray-200 drop-shadow-md lg:text-lg 2xl:text-2xl"
        >
          Con una pequeña ayuda podrán vivir más tranquilos y sentir que han
          elegido una profesión
          <span class="p-2 font-bold bg-gray-700 rounded-lg">digna</span>.
        </p>
        <router-link to="/explore">
          <button
            class="p-4 mt-12 font-bold text-white bg-orange-600 rounded-full border-2 border-orange-800 border-solid transition-transform duration-300 hover:drop-shadow-lg hover:scale-105"
          >
            Apadrina un músico
          </button>
        </router-link>
      </div>
    </div>
    <svg class="relative z-10 -mt-20 bg-orange-100" viewBox="0 0 1440 320">
      <path
        fill="#993412"
        fill-opacity="1"
        d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
    <div
      class="flex relative z-20 justify-center items-center w-full min-h-screen bg-orange-100 2xl:min-h-0 2xl:pb-80 2xl:pt-40"
    >
      <div
        class="flex flex-col justify-center items-center px-10 lg:flex-row xl:px-20 2xl:max-w-7xl"
      >
        <div class="p-6 my-8 bg-gray-900 rounded-lg lg:w-1/2">
          <img
            v-if="!xlScreen"
            src="src/assets/images/unsplash-accordeon-horses.jpg"
            alt="Dos acordeonistas tocando en la calle con máscaras de caballo."
            class="rounded-lg"
          />
          <img
            v-else
            src="src/assets/images/unsplash-accordeon-horses-md.jpg"
            alt="Dos acordeonistas tocando en la calle con máscaras de caballo."
            class="rounded-lg"
          />
        </div>
        <div
          class="flex-grow text-left pb-16 md:px-16 lg:pr-0 lg:w-1/2 xl:max-w-[50vw]"
        >
          <div class="px-6">
            <h2
              class="inline-block text-5xl font-bold text-orange-400 drop-shadow-md sm:text-6xl md:text-7xl"
            >
              Sin tu ayuda
            </h2>
            <br />
            <h2
              class="inline-block text-4xl font-bold text-orange-800 drop-shadow-md md:text-5xl"
            >
              podrían acabar así
            </h2>
            <p class="md:max-w-[50vw] text-gray-900 leading-7 lg:text-lg mt-10">
              <span class="text-lg font-bold text-gray-900"
                >SEGÚN ESTUDIOS OFICIALES</span
              >, un <span class="text-xl font-bold text-red-500">83,7%</span> de
              la población que elige la música como vocación termina tocando en
              la calle o cambiando de profesión.
            </p>
            <p class="mt-1 leading-7 text-gray-900 lg:text-lg">
              Esto provoca que muy pocos elijan este camino, lo que se traduce
              en un
              <span class="text-orange-700">decremento de la cultura</span
              >.<br />
            </p>
            <p class="mt-4 leading-7 text-gray-900 lg:text-lg">
              Tu aportación, <span class="italic">por pequeña que sea</span>,
              ayudará no sólo a l@s músic@s,<br />
              sinó a la
              <span class="font-bold text-gray-900"
                >evolución de la cultura y el arte</span
              >.
            </p>
          </div>
          <div class="mt-12 2xl:px-6">
            <router-link to="/explore">
              <button
                class="p-4 w-full font-bold text-white bg-orange-600 rounded-full border-2 border-solid transition-transform duration-300 2xl:w-auto hover:drop-shadow-lg hover:scale-105"
              >
                Salva un músico
              </button>
            </router-link>
            <router-link to="/explore">
              <button
                class="p-4 mt-4 w-full font-bold text-white bg-orange-800 rounded-full border-2 border-solid transition-transform duration-300 2xl:ml-4 2xl:w-auto hover:drop-shadow-lg hover:scale-105 transition-color hover:bg-orange-600"
              >
                Salva la cultura
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
