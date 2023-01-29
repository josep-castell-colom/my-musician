<template>
  <div
    class="group flex flex-col relative mx-4 w-80 min-h-[28rem] cursor-pointer rounded-sm border-1 border-gray-500 border hover:scale-105 transition-transform duration-300 overflow-hidden bg-white shadow-inner hover:shadow-xl"
  >
    <div class="aspect-video overflow-hidden"><slot name="img"></slot></div>
    <div class="py-6 px-8 flex-grow">
      <h3 class="font-bold"><slot name="name"></slot></h3>
      <p class="mt-3 text-gray-800"><slot name="description"></slot></p>
    </div>
    <div
      class="relative w-full h-full py-6 px-10 bottom-0 border-t border-t-gray-400 bg-orange-100 shadow-inner text-center group-hover:text-left"
    >
      <p class="text-gray-600 group-hover:hidden">Más info</p>
      <div class="hidden group-hover:block">
        <p class="text-gray-500 font-bold">
          Instrumento:
          <span class="text-gray-800"><slot name="instrument"></slot></span>
        </p>
        <p class="text-gray-500 font-bold">
          Rol: <span class="text-gray-800"><slot name="rol"></slot></span>
        </p>
        <p class="text-gray-500">
          Edad: <span class="text-gray-800"><slot name="age"></slot></span>
        </p>
        <p class="text-gray-500">
          Padrinos:
          <span class="text-gray-800"><slot name="patrons"></slot></span>
        </p>
      </div>
    </div>
  </div>
</template>
