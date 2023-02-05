import { defineStore } from "pinia";
import { ref } from "vue";

import type Musician from "../types/Musician";

export const useMusiciansStore = defineStore("musicians", () => {
  const api = "http://localhost:3000/";
  const musicians = ref();
  const musician = ref();
  const loading = ref(false);
  const error = ref();

  async function fetchMusicians() {
    musicians.value = [];
    loading.value = true;

    try {
      musicians.value = await fetch(`${api}musicians`).then((res) =>
        res.json()
      );
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  async function fetchMusician(id: number) {
    loading.value = true;

    try {
      musician.value = await fetch(`${api}musicians/${id}`).then((res) =>
        res.json()
      );
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  async function getMusicians() {
    await fetch(api)
      .then((res) => res.json())
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }

  function getMusiciansWithNoPatrons() {
    return musicians.value.filter(
      (musician: Musician) => musician.patrons.length === 0
    );
  }

  return {
    musicians,
    musician,
    loading,
    error,
    fetchMusicians,
    fetchMusician,
    getMusicians,
    getMusiciansWithNoPatrons,
  };
});
