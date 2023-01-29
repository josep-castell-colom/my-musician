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
  <div v-if="!error" class="relative w-full">
    <div
      v-if="!positionStart"
      @click="changePosition"
      class="hidden absolute left-0 top-1/2 w-10 h-10 border border-r-0 border-b-0 border-black border-solid -rotate-45 -translate-y-1/2 lg:block hover:border-2 hover:border-b-0 hover:border-r-0 2xl:left-20"
    ></div>
    <div
      class="flex w-[20rem] md:w-[40rem] lg:w-[60rem] h-[40rem] overflow-x-scroll lg:overflow-x-hidden mx-auto relative"
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
          <template #name>{{ musician.name }} {{ musician.lastname }}</template>
          <template #description>{{ musician.description }}</template>
          <template #instrument>{{ musician.instrument }}</template>
          <template #rol>{{ musician.rol }}</template>
          <template #age>{{ musician.age }}</template>
          <template #patrons>{{ musician.patrons.length }}</template>
        </card-vue>
      </div>
    </div>
    <div
      v-if="positionStart"
      @click="changePosition()"
      class="hidden absolute right-0 top-1/2 w-10 h-10 border border-b-0 border-l-0 border-black border-solid rotate-45 -translate-y-1/2 lg:block hover:border-2 hover:border-b-0 hover:border-l-0 2xl:right-20"
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
