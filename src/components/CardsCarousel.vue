<script lang="ts">
export default {
  props: {
    xlScreen: {
      type: Boolean,
      required: true,
      default: true,
    },
    screenSize: {
      type: String,
      required: true,
      default: '3xl',
    },
  },
  data() {
    return {
      position: 1,
      topPosition: false,
    };
  },
  created() {
    window.addEventListener('resize', this.adjustPosition);
  },
  mounted() {
    this.adjustPosition();
  },
  unmounted() {
    window.removeEventListener('resize', this.adjustPosition);
  },
  methods: {
    setPosition(position: number) {
      this.position = position;
    },
    positionUp() {
      if(this.position === 6) { return }
      if(this.xlScreen && this.position >= 4) { return }
      if(this.screenSize === 'md' && this.position >= 5) { return }
      if(this.xlScreen) { this.position = 4; return }
      if(this.screenSize === 'md' && this.position < 5) { this.position += 2; return }
      if((this.screenSize === 'sm' || this.screenSize === 'xs') && this.position < 6) { this.position += 1; return }
    },
    positionDown() {
      console.log(this.position);
      if(this.position === 1) { return }
      if(this.xlScreen) { this.position = 1; return }
      if(this.screenSize === 'md') { this.position -= 2; return }
      if(this.screenSize === 'sm' || this.screenSize === 'xs') { this.position -= 1; return }
    },
    checkTopPosition(){
      if(this.xlScreen && this.position === 4) { this.topPosition = true; return }
      if(this.screenSize === 'md' && this.position === 5) { this.topPosition = true; return }
      if(this.position === 6) { this.topPosition = true; return }
      this.topPosition = false;
    },
    handlerDown() {
      this.positionDown();
      this.checkTopPosition();
    },
    handlerUp() {
      console.log(this.position);
      this.positionUp();
      this.checkTopPosition();
    },
    handlerSet(position: number) {
      this.setPosition(position);
      this.checkTopPosition();
    },
    adjustPosition() {
      this.checkTopPosition();
      if((this.xlScreen || this.screenSize === 'lg') && this.position > 4) { this.position = 4; return }
      if((this.xlScreen || this.screenSize === 'lg') && (this.position > 1 && this.position < 4)) { this.position = 1; return }
      if(this.screenSize === 'md' && this.position === 2 ) { this.position = 1; return }
      if(this.screenSize === 'md' && this.position === 4 ) { this.position = 3; return }
      if(this.screenSize === 'md' && this.position === 6 ) { this.position = 5; return }
    }
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
</script>

<template>
  <div v-if="!error" class="relative w-full">
    <div
      v-if="position != 1"
      @click="handlerDown"
      class="absolute left-10 bottom-11 z-30 w-10 h-10 border border-r-0 border-b-0 border-black border-solid -rotate-45 sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 hover:border-2 hover:border-b-0 hover:border-r-0"
    ></div>
    <div
      class="flex min-w-full w-[20rem] md:w-[40rem] lg:w-[60rem] h-[40rem] overflow-x-hidden mx-auto relative"
    >
      <div
        class="w-[120rem] h-full flex items-center absolute top-0 transition-transform duration-1000"
        :class="{
          one: position === 1,
          two: position === 2,
          three: position === 3,
          four: position === 4,
          five: position === 5,
          six: position === 6,
        }"
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
    <div class="flex relative bottom-5 mx-auto mb-8 w-fit">
      <div class="m-1 w-3 h-3 rounded-full border border-black border-solid hover:bg-orange-600/80 hover:scale-110" :class="{ active: position === 1}" @click="handlerSet(1)"></div>
      <div v-if="screenSize === 'sm' || screenSize === 'xs'" class="m-1 w-3 h-3 rounded-full border border-black border-solid hover:bg-orange-600/80 hover:scale-110" :class="{ active: position === 2}" @click="handlerSet(2)"></div>
      <div v-if="!xlScreen && screenSize != 'lg'" class="m-1 w-3 h-3 rounded-full border border-black border-solid hover:bg-orange-600/80 hover:scale-110" :class="{ active: position === 3}" @click="handlerSet(3)"></div>
      <div v-if="screenSize != 'md'" class="m-1 w-3 h-3 rounded-full border border-black border-solid hover:bg-orange-600/80 hover:scale-110" :class="{ active: position === 4}" @click="handlerSet(4)"></div>
      <div v-if="!xlScreen && screenSize != 'lg'" class="m-1 w-3 h-3 rounded-full border border-black border-solid hover:bg-orange-600/80 hover:scale-110" :class="{ active: position === 5}" @click="handlerSet(5)"></div>
      <div v-if="screenSize === 'sm' || screenSize === 'xs'" class="m-1 w-3 h-3 rounded-full border border-black border-solid hover:bg-orange-600/80 hover:scale-110" :class="{ active: position === 6}" @click="handlerSet(6)"></div>
    </div>
    <div
      v-if="!topPosition"
      @click="handlerUp"
      class="absolute right-9 bottom-11 z-30 w-10 h-10 border border-b-0 border-l-0 border-black border-solid rotate-45 sm:-right-10 sm:top-1/2 sm:-translate-y-1/2 hover:border-2 hover:border-b-0 hover:border-l-0"
    ></div>
  </div>
  <div v-if="error">
    <p class="text-red-700">Error al cargar los datos</p>
  </div>
</template>

<style scoped>
.one {
  transform: translateX(0);
}
.two {
  transform: translateX(-16.666%);
}
.three {
  transform: translateX(-33.333%);
}
.four {
  transform: translateX(-50%);
}
.five {
  transform: translateX(-66.666%);
}
.six {
  transform: translateX(-83.333%);
}
.active {
  background-color: #333;
}
</style>
