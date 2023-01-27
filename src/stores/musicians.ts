import { defineStore } from "pinia";
import { ref } from "vue";

import type Musician from "../types/Musician";

// export const useMusiciansStore = defineStore('musicians', {
//   state: () => ({
//     musicians: new Array<Musician>,
//     loading: false,
//     error: ref(),
//   }),
//   actions: {
//     async fetchMusicians() {
//       const api = 'http://localhost:3000/musicians';
//       this.musicians = [];
//       this.loading = true;

//       try {
//        this.musicians = await fetch(api)
//         .then((res) => res.json()) 
//       } catch (error) {
//         this.error.value = error;
//       } finally {
//         this.loading = false;
//       }
//     },
//   },
//   getters: {
//     getMusicians(state) {
//       return state.musicians;
//     },
//     getMusiciansWithNoPatrons(state){
//       return state.musicians.filter((musician: Musician) => musician.patrons.length === 0);
//     }
//   }
// });

export const useMusiciansStore = defineStore('musicians', () => {
  const api = 'http://localhost:3000/musicians'
  const musicians = ref();
  const loading = ref(false);
  const error = ref();

  async function fetchMusicians() {
      const api = 'http://localhost:3000/musicians';
      musicians.value = [];
      loading.value = true;

      try {
       musicians.value = await fetch(api)
        .then((res) => res.json()) 
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    }
  
  async function getMusicians() {
    await fetch(api)
      .then((res) => res.json())
      .then(({ data }) => (console.log(data)))
      .catch((err) => (console.log(err)));
  }

  function getMusiciansWithNoPatrons(){
      return musicians.value.filter((musician: Musician) => musician.patrons.length === 0);
    }

  return { musicians, loading, error, fetchMusicians, getMusicians, getMusiciansWithNoPatrons };
})