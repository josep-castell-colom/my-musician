<template>
  <div class="h-screen flex flex-col items-center justify-center relative">
    <div
      class="text-orange-900 dark:text-orange-200 backdrop-blur-lg bg-black/20 p-24 rounded-2xl shadow-lg absolute"
    >
      <h3 class="font-bold underline">Registrar</h3>
      <form action="" class="flex flex-col">
        <label for="username" class="mt-4 mb-2">Nombre de usuario: </label>
        <input
          type="text"
          name="username"
          id="username"
          class="text-orange-900 pl-1"
        />
        <label for="email" class="mt-4 mb-2">Correo electrónico: </label>
        <input type="text" name="email" id="email" class="text-orange-900 pl-1" />
        <label for="password" class="mt-4 mb-2"> Contraseña: </label>
        <input
          type="password"
          name="password"
          id="password"
          class="text-orange-900 pl-1"
        />
        <label for="password-repeat" class="mt-4 mb-2"
          >Repita la contraseña:
        </label>
        <input
          type="password"
          name="password-repeat"
          id="password-repeat"
          class="text-orange-900 pl-1"
        />
        <div class="my-4">
          <input type="checkbox" name="privacity" id="privacity" class="mr-2" />
          <label for="privacity"
            >Acepto los <a href="#" class="text-gray-800 hover:text-gray-700">términos de uso</a> y
            <a href="#" class="text-gray-800 hover:text-gray-700">privacidad</a>.</label
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
