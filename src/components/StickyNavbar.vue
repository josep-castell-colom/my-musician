<script lang="ts">
import Slider from '@vueform/slider';

export default {
  components: {
    Slider,
  },
  props: {
    instrument: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
    },
    instruments: {
      type: Array<string>,
      required: true,
    },
    rols: {
      type: Array<string>,
      required: true,
    },
  },
  data() {
    return {
      filter: {
        name: '',
        instrument: this.instrument,
        age: [18, 100],
        rol: 'all',
      },
    };
  },
  methods: {
    updateFilter() {
      this.$emit('update:filter', this.filter);
    },
  },
  mounted() {
    console.log(this.filter);
  },
};
</script>
<template>
  <div
    class="flex sticky top-12 z-30 flex-col p-3 w-full backdrop-blur-lg bg-orange-500/80"
  >
    <div
      class="flex md:justify-center mx-auto w-[21rem] md:w-3/4 lg:w-auto flex-wrap"
    >
      <fieldset>
        <label for="name">Nombre:</label>
        <input
          @input="updateFilter"
          v-model="filter.name"
          type="text"
          name="name"
          class="filter-input bg-orange-100"
        />
      </fieldset>
      <fieldset>
        <label for="instrument">Instrumento:</label>
        <select
          @change="updateFilter"
          v-model="filter.instrument"
          name="instrument"
          id="instrument"
          class="filter-input"
        >
          <option value="all">Todos</option>
          <option
            v-for="(instrument, index) of instruments"
            :key="index"
            :value="`${instrument}`"
          >
            {{ instrument }}
          </option>
        </select>
      </fieldset>
      <fieldset class="flex items-center">
        <label for="age">Edad:</label>
        <div class="mx-3 w-44">
          <Slider
            @update="updateFilter"
            v-model="filter.age"
            class="slider-orange"
          />
        </div>
      </fieldset>
      <fieldset>
        <label for="rol">Rol:</label>
        <select
          @change="updateFilter"
          v-model="filter.rol"
          name="rol"
          id="rol"
          class="filter-input"
        >
          <option value="all">Todos</option>
          <option v-for="(rol, index) of rols" :key="index" :value="`${rol}`">
            {{ rol }}
          </option>
        </select>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
.filter-input {
  margin: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 10px;
}
select {
  padding: 0.2rem;
}
.slider-orange {
  --slider-connect-bg: rgb(154 52 18);
  --slider-height: 6px;
  --slider-handle-bg: #fff;
  --slider-handle-border: 0;
  --slider-handle-width: 25px;
  --slider-handle-height: 25px;
  --slider-handle-radius: 5px;
  --slider-handle-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
  --slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.42);
  --slider-handle-ring-width: 3px;
  --slider-handle-ring-color: #10b98130;
  --slider-tooltip-font-size: 0.7rem;
  --slider-tooltip-line-height: 0.8rem;
  --slider-tooltip-font-weight: 600;
  --slider-tooltip-min-width: 20px;
  --slider-tooltip-bg: none;
  --slider-tooltip-color: #333;
  --slider-tooltip-radius: 9999px;
  --slider-tooltip-py: 1px;
  --slider-tooltip-px: 2px;
  --slider-tooltip-arrow-size: 0px;
  --slider-tooltip-distance: -21px;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
