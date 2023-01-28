<template>
  <div class="relative bg-black w-full text-white">
    <div
      class="relative pl-8 sm:pr-8 lg:px-0 w-full md:w-3/4 xl:w-1/2 h-full mx-auto"
    >
      <div class="pt-12 flex justify-between">
        <div class="pt-12 flex flex-col mr-12">
          <h3 class="lg:text-lg text-gray-400">Descubre músic@s</h3>
          <div class="flex flex-col w-1/2 sm:flex-row sm:w-auto">
            <div class="flex flex-col mr-24">
              <router-link to="" class="footer-link">Cantantes</router-link>
              <router-link to="" class="footer-link">Guitarristas</router-link>
              <router-link to="" class="footer-link">Bajistas</router-link>
              <router-link to="" class="footer-link">Pianistas</router-link>
              <router-link to="" class="footer-link"
                >Percusionistas</router-link
              >
              <router-link to="" class="footer-link">Bateristas</router-link>
              <router-link to="" class="footer-link">Saxofonistas</router-link>
            </div>
            <div class="flex flex-col">
              <router-link to="" class="footer-link">Cantautores</router-link>
              <router-link to="" class="footer-link"
                >Músic@s de sesión</router-link
              >
              <router-link to="" class="footer-link">Acompañantes</router-link>
              <router-link to="" class="footer-link"
                >Líderes de banda</router-link
              >
              <router-link to="" class="footer-link">Sin apadrinar</router-link>
              <router-link to="" class="footer-link"
                >Poco apadrinados</router-link
              >
              <router-link to="" class="footer-link">Más populares</router-link>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-1/2 sm:flex-row sm:w-auto">
          <div class="pt-12 flex flex-col mr-12">
            <h3 class="lg:text-lg text-gray-400">
              Sobre
              <span class="font-abril-fatface italic underline text-gray-300"
                >MyMusician</span
              >
            </h3>
            <router-link to="" class="footer-link">¿Quienes somos?</router-link>
            <router-link to="" class="footer-link"
              >Nuestra trayectoria</router-link
            >
            <router-link to="" class="footer-link"
              >Preocupación hacia l@s músic@s</router-link
            >
          </div>
          <div class="pt-12 flex flex-col">
            <h3 class="lg:text-lg text-gray-400">Síguenos</h3>
            <router-link to="" class="footer-link">Facebook</router-link>
            <router-link to="" class="footer-link">Twitter</router-link>
            <router-link to="" class="footer-link">Instagram</router-link>
            <router-link to="" class="footer-link">YouTube</router-link>
          </div>
        </div>
      </div>
      <div class="pt-12 flex flex-col">
        <h3 class="lg:text-lg text-gray-400">¿Necesitas ayuda?</h3>
        <router-link to="" class="footer-link">F.A.Q.</router-link>
        <router-link to="" class="footer-link"
          >Guía para nuev@s músic@s</router-link
        >
      </div>
      <hr class="my-12" />
      <footer
        class="relative bottom-0 w-full flex justify-between items-center text-center text-sm pb-8"
      >
        <div class="w-1/3 text-left">jcastellcolom@cifpfbmoll.eu</div>
        <div class="w-1/3">Josep Maria Castell Colom - 2022</div>
        <div class="flex w-1/3 justify-end">
          <router-link to="" class="text-gray-500 font-bold hover:text-gray-300"
            >Política de privacidad</router-link
          >
          <router-link
            to=""
            class="text-gray-500 font-bold hover:text-gray-300 ml-4"
            >Cookies</router-link
          >
        </div>
      </footer>
    </div>
  </div>
</template>
<style scoped>
.footer-link {
  padding-top: 0.5rem;
}
.footer-link:hover {
  text-decoration: underline;
}
</style>
