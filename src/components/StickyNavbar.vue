<script lang="ts">
export default {
  props: {
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
        name: "",
        instrument: "all",
        ageMin: 0,
        ageMax: 100,
        rol: "",
      },
    };
  },
  methods: {
    updateFilter() {
      console.log(this.filter);
      this.$emit("update:filter", this.filter);
    },
  },
};
</script>
<template>
  <div
    class="flex sticky top-12 z-30 flex-col p-3 w-full backdrop-blur-lg bg-orange-500/80"
  >
    <div class="flex justify-center">
      <fieldset>
        <label for="name">Nombre:</label>
        <input
          @input="updateFilter"
          v-model="filter.name"
          type="text"
          name="name"
          class="filter-input"
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
          <option value="all" selected>Todos</option>
          <option
            v-for="(instrument, index) of instruments"
            :key="index"
            :value="`${instrument}`"
          >
            {{ instrument }}
          </option>
        </select>
      </fieldset>
      <fieldset>
        <label for="age">Edad:</label>
        <input
          @input="updateFilter"
          v-model="filter.ageMin"
          type="number"
          name="age"
          class="w-12 filter-input"
        />
        <input
          @input="updateFilter"
          v-model="filter.ageMax"
          type="number"
          name="age"
          class="w-12 filter-input"
        />
      </fieldset>
      <fieldset>
        <label for="rol">Rol:</label>
        <!-- <input
          @input="updateFilter"
          v-model="filter.rol"
          type="text"
          name="rol"
          class="filter-input"
        /> -->
        <select name="rol" id="rol" class="filter-input">
          <option value="all" selected>Todos</option>
          <option v-for="(rol, index) of rols" :key="index" value="`${rol}`">
            {{ rol }}
          </option>
        </select>
      </fieldset>
    </div>
  </div>
</template>

<style scoped>
.filter-input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 10px;
}
select {
  padding: 0.2rem;
}
</style>
