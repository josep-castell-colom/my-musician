<template>
  <div class="p-12 mx-4 max-w-sm rounded-lg border-1 border-black border hover:scale-110 transition-transform duration-300">
    <img src="" alt="">
    <h3 class="font-bold"><slot name="name"></slot></h3>
    <p class="mt-3"><slot name="description"></slot></p>
  </div>
</template>