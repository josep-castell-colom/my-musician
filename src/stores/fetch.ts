import { ref } from 'vue';
import type Musician from '@/types/Musician';

export function useFetch(url: string) {
  const data = ref(new Array<Musician>());
  const error = ref(null);

  fetch(url)
    .then(res => res.json())
    .then(json => (data.value = json))
    .catch(err => (error.value = err));

  return { data, error };
}
