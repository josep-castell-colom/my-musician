<template>
  <div class="h-[calc(100vh-3rem)] flex flex-col items-center justify-center">
    <div
      class="text-orange-900 dark:text-orange-200 bg-orange-100 dark:bg-orange-900 p-24 rounded-2xl shadow-lg shadow-orange-900"
    >
      <h3 class="font-bold underline">Register</h3>
      <form action="" class="flex flex-col">
        <label for="username" class="mt-4 mb-2">Nombre de usuario: </label>
        <input
          type="text"
          name="username"
          id="username"
          class="text-orange-900"
        />
        <label for="email" class="mt-4 mb-2">Correo electrónico: </label>
        <input type="text" name="email" id="email" class="text-orange-900" />
        <label for="password" class="mt-4 mb-2"> Contraseña: </label>
        <input
          type="text"
          name="password"
          id="password"
          class="text-orange-900"
        />
        <label for="password-repeat" class="mt-4 mb-2"
          >Repita la contraseña:
        </label>
        <input
          type="text"
          name="password-repeat"
          id="password-repeat"
          class="text-orange-900"
        />
        <div class="my-4">
          <input type="checkbox" name="privacity" id="privacity" class="mr-2" />
          <label for="privacity"
            >Acepto los <a href="#">términos de uso</a> y
            <a href="#">privacidad</a>.</label
          >
        </div>
        <a href="/login" class="text-sm mt-4 mb-2"
          >¿Ya dispones de una cuenta? Inicia sesión.</a
        >
        <input
          type="submit"
          value="Regístrate"
          class="bg-gray-100 hover:bg-orange-200 hover:cursor-pointer hover:shadow-md shadow-gray-500 text-black mt-4 p-3 rounded-full"
        />
      </form>
    </div>
  </div>
</template>
