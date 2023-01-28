<script lang="ts">
export default {
  data() {
    return {
      positionStart: true,
    };
  },
  methods: {
    changePosition() {
      this.positionStart = !this.positionStart;
    },
  },
};
</script>

<script lang="ts" setup>
import { useMusiciansStore } from '@/stores/musicians';
import type Musician from '@/types/Musician';
const { fetchMusicians } = useMusiciansStore();

const store = useMusiciansStore();

await fetchMusicians();

const error = null; // borrar

const filteredMusicians = store.musicians
  .filter((musician: Musician) => musician.patrons.length === 0)
  .slice(0, 6);

// export default {
//   data() {
//     return {
//       musicians: [],
//       error: '',
//       positionStart: true,
//     };
//   },
//   methods: {
//     fetchData() {
//       fetch('http://localhost:3000/musicians')
//         .then(res => res.json())
//         .then(json => (this.musicians = json))
//         .catch(err => (this.error = err));
//     },
//     changePosition() {
//       this.positionStart = !this.positionStart;
//     },
//   },
//   computed: {
//     filterMusicians() {
//       const filteredMusicians = this.musicians.filter(
//         m => m.patrons.length === 0
//       );
//       return filteredMusicians.slice(0, 6);
//     },
//   },
//   created() {
//     this.fetchData();
//   },
// };
</script>

<template>
  <div v-if="!error" class="w-full relative">
    <div
      v-if="!positionStart"
      @click="changePosition"
      class="hidden lg:block border border-solid border-black hover:border-2 hover:border-b-0 hover:border-r-0 border-b-0 border-r-0 w-10 h-10 absolute left-0 xl:left-20 2xl:left-52 top-1/2 -translate-y-1/2 -rotate-45"
    ></div>
    <div
      class="flex w-[20rem] md:w-[40rem] lg:w-[60rem] h-[34rem] mx-auto relative overflow-x-scroll lg:overflow-hidden"
    >
      <div
        class="w-[120rem] h-full flex items-center absolute top-0 transition-transform duration-1000"
        :class="{ left: positionStart, right: !positionStart }"
      >
        <card-vue v-for="musician in filteredMusicians" :key="musician['id']">
          <template #img
            ><img
              :src="
                'src/assets/images/musicians/' + musician['imgName'] + '-sm.jpg'
              "
          /></template>
          <template #name>{{ musician.name }}</template>
          <template #description>{{ musician.description }}</template>
          <template #instrument
            >Instrumento: {{ musician.instrument }}</template
          >
          <template #age>Edad: {{ musician.age }}</template>
        </card-vue>
      </div>
    </div>
    <div
      v-if="positionStart"
      @click="changePosition()"
      class="hidden lg:block border border-solid border-black hover:border-2 hover:border-b-0 hover:border-l-0 border-b-0 border-l-0 w-10 h-10 absolute right-0 xl:right-20 2xl:right-52 top-1/2 -translate-y-1/2 rotate-45"
    ></div>
  </div>
  <div v-if="error">
    <p class="text-red-700">Error al cargar los datos</p>
  </div>
</template>

<style scoped>
.left {
  transform: translateX(0);
}
.right {
  transform: translateX(-50%);
}
</style>