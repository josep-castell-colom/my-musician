<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
import { ref } from "vue";
const { removeMusician, checkAuthUser } = useUsersStore();
const usersStore = useUsersStore();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["unsubscribe"]);

await checkAuthUser();

const authUser = ref();

try {
  authUser.value = usersStore.authUser.value;
} catch (err) {
  console.log("NO AUTH USER");
}

function updateMyMusicians(authUser: any, musicianId: number) {
  removeMusician(authUser, musicianId);
  emit("unsubscribe");
}
</script>
<template>
  <div
    class="group flex h-40 min-w-[50rem] relative mx-4 rounded-sm border-1 border-gray-500 border hover:scale-105 transition-transform duration-300 overflow-hidden bg-white shadow-inner hover:shadow-xl"
  >
    <div class="overflow-hidden relative w-80 h-full">
      <slot name="img"></slot>
    </div>
    <div
      class="flex flex-col flex-grow flex-shrink justify-center items-start px-8 py-6"
    >
      <h3 class="font-bold"><slot name="name"></slot></h3>
      <router-link :to="{ name: 'musicians.show', params: { id: props.id } }">
        <p class="mt-3 text-gray-600 hover:underline">Más info</p>
      </router-link>
    </div>
    <div
      class="flex relative flex-col justify-center items-start px-10 py-6 h-full text-center bg-orange-100 border-l shadow-inner border-l-gray-400 group-hover:text-left"
    >
      <p class="text-gray-600 group-hover:hidden">Opciones</p>
      <div class="hidden group-hover:block">
        <a
          href="#"
          class="hover:underline underline-offset-1 decoration-gray-600"
        >
          <p class="text-gray-500">Cambiar tarifa</p>
        </a>
        <a
          href="#"
          class="hover:underline underline-offset-1 decoration-gray-600"
        >
          <p class="text-gray-500">Enviar mensaje</p>
        </a>
        <p
          @click="updateMyMusicians(authUser, props.id)"
          class="text-red-500 cursor-pointer hover:underline underline-offset-1 decoration-red-500"
        >
          Cancelar suscripción
        </p>
      </div>
    </div>
  </div>
</template>
