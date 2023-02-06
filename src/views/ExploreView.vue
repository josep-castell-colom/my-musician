<script setup lang="ts">
import Footer from "@/components/MainFooter.vue";
import StickyNavbar from "@/components/StickyNavbar.vue";
import { useMusiciansStore } from "@/stores/musicians";
import type Musician from "@/types/Musician";
const { fetchMusicians } = useMusiciansStore();

const store = useMusiciansStore();

await fetchMusicians();

const musicians: Array<Musician> = store.musicians;

const error = store.error;
</script>

<script lang="ts">
export default {
  data() {
    return {
      filter: {
        instrument: "",
        age: 0,
        rol: "",
      },
    };
  },
  components: {
    StickyNavbar,
  },
  methods: {
    logChange(filter: object) {
      this.filter.instrument = filter.instrument;
      console.log(this.filter.instrument);
    },
  },
};
</script>

<template>
  <div v-if="error">
    <p class="text-red-700">Error al cargar los datos</p>
  </div>
  <div v-else class="flex relative flex-col mt-12 w-full">
    <div
      class="h-[40vh] w-full bg-orange-100 flex flex-col items-center justify-center"
    >
      <h3 class="mx-auto text-4xl font-bold text-gray-800">
        {{ musicians.length }} músicos confían en nosotros
      </h3>
    </div>
    <div class="h-full bg-orange-100">
      <StickyNavbar @update:filter="logChange" />
      <div class="flex flex-wrap justify-center items-center p-12">
        <card-vue
          v-for="(musician, index) in musicians"
          :key="index"
          :id="musician['id']"
          class="mb-12"
        >
          <template #img
            ><img
              :src="
                'src/assets/images/musicians/' + musician['imgName'] + '-sm.jpg'
              "
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
