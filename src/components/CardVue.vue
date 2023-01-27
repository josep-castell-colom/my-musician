<template>
  <div
    class="relative mx-4 w-80 h-[30rem] cursor-pointer rounded-lg border-1 border-black border hover:scale-105 transition-transform duration-300 overflow-hidden bg-orange-100 shadow-inner hover:shadow-xl"
  >
    <div class="aspect-video overflow-hidden"><slot name="img"></slot></div>
    <div class="p-10">
      <h3 class="font-bold"><slot name="name"></slot></h3>
      <p class="mt-3"><slot name="description"></slot></p>
    </div>
    <div
      class="absolute w-full py-6 px-10 bottom-0 border-t border-t-gray-500 bg-orange-200 shadow-inner"
    >
      <p class="text-sm"><slot name="instrument"></slot></p>
      <p class="text-sm"><slot name="age"></slot></p>
    </div>
  </div>
</template>
