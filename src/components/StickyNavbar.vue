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
  methods: {
    updateFilter() {
      this.$emit("update:filter", this.filter);
    },
  },
};
</script>
<template>
  <div class="sticky top-12 z-30 w-full bg-orange-500/80">
    <input @input="updateFilter" v-model="filter.instrument" type="text" />
    <p>Instrument: {{ filter.instrument }}</p>
  </div>
</template>
