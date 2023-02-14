<script setup lang="ts">
import { useUsersStore } from '@/stores/users';
import { ref } from 'vue';
const { postUser } = useUsersStore();

const user = ref({
  name: '',
  lastname: '',
  email: '',
  password: '',
});

const passwordRepeat = ref('');
const checkbox = ref(false);

const nameOK = ref(true);
const lastnameOK = ref(true);
const emailOK = ref(true);
const passwordOK = ref(true);
const passwordRepeatOK = ref(true);
const checkboxOK = ref(true);

function validateForm() {
  let valid = true;
  nameOK.value = true;
  lastnameOK.value = true;
  emailOK.value = true;
  passwordOK.value = true;
  passwordRepeatOK.value = true;
  checkboxOK.value = true;
  if (!user.value.name) {
    valid = false;
    nameOK.value = false;
  }
  if (!user.value.lastname) {
    valid = false;
    lastnameOK.value = false;
  }
  if (!user.value.email) {
    valid = false;
    emailOK.value = false;
  }
  if (!user.value.password) {
    valid = false;
    passwordOK.value = false;
  }
  if (!passwordRepeat.value || passwordRepeat.value !== user.value.password) {
    valid = false;
    passwordRepeatOK.value = false;
  }
  if (!checkbox.value) {
    valid = false;
    checkboxOK.value = false;
  }
  if (!valid) {
    return false;
  } else {
    postUser(user.value);
  }
}
</script>
<template>
  <img
    src="src/assets/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
    alt="Primer plano de un músico tocando una guitarra acústica."
    class="fixed top-0 mx-auto w-full h-screen"
  />
  <div class="flex relative flex-col justify-center items-center h-screen">
    <div
      class="flex absolute flex-col justify-center p-12 w-screen h-screen text-orange-900 rounded-2xl shadow-lg backdrop-blur-lg sm:block align-center sm:p-24 sm:h-auto sm:w-auto dark:text-orange-200 bg-black/20"
    >
      <h3 class="font-bold underline">Registrar</h3>
      <form action="" class="flex flex-col">
        <label for="username" class="mt-4 mb-2">Nombre: </label>
        <input
          v-model="user.name"
          type="text"
          name="username"
          id="username"
          placeholder="Nombre"
          class="pl-1 text-orange-900"
        />
        <small v-if="!nameOK" class="text-red-600 drop-shadow-sm"
          >El campo <em>nombre</em> es obligatorio</small
        >
        <label for="username" class="mt-4 mb-2">Primer apellido: </label>
        <input
          v-model="user.lastname"
          type="text"
          name="username"
          id="username"
          placeholder="Apellido"
          class="pl-1 text-orange-900"
        />
        <small v-if="!lastnameOK" class="text-red-600 drop-shadow-sm"
          >El campo <em>apellido</em> es obligatorio</small
        >
        <label for="email" class="mt-4 mb-2">Correo electrónico: </label>
        <input
          v-model="user.email"
          type="text"
          name="email"
          id="email"
          placeholder="correo@electronico.algo"
          class="pl-1 text-orange-900"
        />
        <small v-if="!emailOK" class="text-red-600 drop-shadow-sm"
          >El campo <em>correo electrónico</em> es obligatorio</small
        >
        <label for="password" class="mt-4 mb-2"> Contraseña: </label>
        <input
          v-model="user.password"
          type="password"
          name="password"
          id="password"
          placeholder="patata123"
          class="pl-1 text-orange-900"
        />
        <small v-if="!passwordOK" class="text-red-600 drop-shadow-sm"
          >El campo <em>contraseña</em> es obligatorio</small
        >
        <label for="password-repeat" class="mt-4 mb-2"
          >Repite la contraseña:
        </label>
        <input
          v-model="passwordRepeat"
          type="password"
          name="password-repeat"
          id="password-repeat"
          placeholder="patata123"
          class="pl-1 text-orange-900"
        />
        <small v-if="!passwordRepeatOK" class="text-red-600 drop-shadow-sm"
          >La contraseña debe coincidir</small
        >
        <div class="my-4">
          <input
            v-model="checkbox"
            type="checkbox"
            name="privacity"
            id="privacity"
            class="mr-2"
          />
          <label for="privacity"
            >Acepto los
            <a
              href="#"
              class="text-gray-100 hover:text-gray-400 hover:underline"
              >términos de uso</a
            >
            y
            <a
              href="#"
              class="text-gray-100 hover:text-gray-400 hover:underline"
              >privacidad</a
            >.</label
          >
          <br />
          <small v-if="!checkboxOK" class="text-red-600 drop-shadow-sm"
            >Es necesario aceptar los <em>términos de uso</em> y la
            <em>privacidad</em></small
          >
        </div>
        <router-link :to="{ name: 'login' }" class="mt-4 mb-2 text-sm"
          >¿Ya dispones de una cuenta? Inicia sesión.</router-link
        >
        <input
          @click.prevent="validateForm()"
          type="submit"
          value="Regístrate"
          class="p-3 mt-4 text-black bg-gray-100 rounded-full hover:bg-orange-200 hover:cursor-pointer hover:shadow-md shadow-gray-500"
        />
      </form>
    </div>
  </div>
</template>
