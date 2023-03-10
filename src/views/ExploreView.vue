<script setup lang="ts">
import Footer from '@/components/MainFooter.vue';
import StickyNavbar from '@/components/StickyNavbar.vue';
import { useMusiciansStore } from '@/stores/musicians';
import type Musician from '@/types/Musician';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const { fetchMusicians } = useMusiciansStore();
const route = useRoute();
const store = useMusiciansStore();

// const props = defineProps({
//   instrument: {
//     type: String,
//     required: false,
//   },
//   age: {
//     type: Array<number>,
//     required: false,
//   },
// });

const searchFilter = ref({
  name: '',
  instrument: route.query.instrument || 'all',
  age: [18, 100],
  rol: route.query.rol || 'all',
});

function updateFilter() {
  searchFilter.value = {
    name: '',
    instrument: route.query.instrument || 'all',
    age: [18, 100],
    rol: route.query.rol || 'all',
  };
}

function filterMusicians(filter: any) {
  let tempMusicians = musicians;
  let nameFilter = filter.name;
  let instrumentFilter = filter.instrument;
  let rolFilter = filter.rol;
  let ageFilter = filter.age;
  if (nameFilter != '') {
    tempMusicians = tempMusicians.filter(musician => {
      return (
        musician.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
        musician.lastname.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });
  }
  if (instrumentFilter != 'all') {
    tempMusicians = tempMusicians.filter(musician => {
      return musician.instrument
        .toLowerCase()
        .includes(instrumentFilter.toLowerCase());
    });
  }
  if (rolFilter != 'all') {
    tempMusicians = tempMusicians.filter(musician => {
      return musician.rol.includes(rolFilter);
    });
  }
  tempMusicians = tempMusicians.filter(musician => {
    return musician.age > ageFilter[0] && musician.age < ageFilter[1];
  });
  filteredMusicians.value = tempMusicians;
  return tempMusicians;
}

await fetchMusicians();

let musicians: Array<Musician> = store.musicians;
const instruments = [...new Set(musicians.map(m => m.instrument))];
const rolsArrays: Array<string> = [];

musicians.forEach(m => {
  m.rol.forEach(rol => {
    if (rol != '') {
      rolsArrays.push(rol);
    }
  });
});

const rols = [...new Set(rolsArrays)];
const filteredMusicians = ref(musicians);
const error = store.error;

onMounted(() => {
  updateFilter();
  filteredMusicians.value = filterMusicians(searchFilter.value);
});

watch(
  () => route.query,
  () => {
    updateFilter();
    filteredMusicians.value = filterMusicians(searchFilter.value);
  }
);
</script>

<template>
  <div v-if="error">
    <p class="text-red-700">Error al cargar los datos</p>
  </div>
  <div v-else class="flex relative flex-col mt-12 w-full">
    <div
      class="h-[40vh] w-full bg-orange-100 flex flex-col text-center items-center justify-center"
    >
      <h3 class="mx-auto text-4xl font-bold text-gray-800">
        {{ store.musicians.length }} m??sicos conf??an en nosotros
      </h3>
    </div>
    <div class="h-full bg-white">
      <StickyNavbar
        @update:filter="filterMusicians"
        :instrument="searchFilter.instrument"
        :rol="searchFilter.rol"
        :instruments="instruments"
        :rols="rols"
      />
      <div class="flex flex-wrap justify-center items-center p-16">
        <card-vue
          v-for="(musician, index) in filteredMusicians"
          :key="index"
          :id="musician['id']"
          class="mb-12"
        >
          <template #img
            ><img
              :src="`src/assets/images/musicians/${musician['imgName']}-sm.jpg`"
          /></template>
          <template #name>{{ musician.name }} {{ musician.lastname }}</template>
          <template #description>{{ musician.description }}</template>
          <template #instrument>{{ musician.instrument }}</template>
          <template #rol>
            <span v-for="(rol, index) in musician.rol" :key="index">
              <span v-if="index != musician.rol.length - 1">{{ rol }}, </span>
              <span v-else>{{ rol }}</span>
            </span>
          </template>
          <template #age>{{ musician.age }}</template>
          <template #patrons>{{ musician.patrons.length }}</template>
        </card-vue>
      </div>
    </div>
  </div>
  <Footer />
</template>
