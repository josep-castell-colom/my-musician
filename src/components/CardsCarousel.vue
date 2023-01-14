<script lang="ts">
export default {
  data () {
    return {
      data: '',
      error: '',
      positionStart: true,

    }
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/musicians')
      .then(res => res.json())
      .then(json => (this.data = json))
      .catch(err => (this.error = err));
    },
    changePosition() {
      this.positionStart = !this.positionStart;
    }
  },
  created() {
    this.fetchData()
  }
}

</script>

<template>
  <div v-if="!error" class="w-full relative">
    <div v-if="!positionStart" @click="changePosition" class="border border-solid border-black hover:border-2 hover:border-b-0 hover:border-r-0 border-b-0 border-r-0 w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 -rotate-45"></div>
    <div class="flex w-[60rem] h-[34rem] mx-auto relative overflow-hidden">
      <div class="w-[120rem] h-full flex items-center absolute top-0 transition-transform duration-1000" :class="{ left: positionStart, right: !positionStart}">
        <card-vue v-for="musician in data" :key="musician.id">
          <template #img><img :src="'src/assets/images/' + musician.imgName + '-sm.jpg'"/></template>
          <template #name>{{ musician.name }}</template>
          <template #description>{{ musician.description }}</template>
          <template #instrument>Instrumento: {{ musician.instrument }}</template>
          <template #age>Edad: {{ musician.age }}</template>
        </card-vue>
      </div>
    </div>
    <div v-if="positionStart" @click="changePosition" class="border border-solid border-black hover:border-2 hover:border-b-0 hover:border-l-0 border-b-0 border-l-0 w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 rotate-45"></div>
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
