<template>
  <div class="relative w-full text-white bg-black">
    <div
      class="relative pl-8 mx-auto w-full h-full sm:pr-8 lg:px-0 md:w-3/4 xl:w-1/2"
    >
      <div class="min-[2100px]:px-40">
        <div class="flex justify-between pt-12">
          <div class="flex flex-col pt-12 md:mr-12">
            <h3 class="text-gray-400 lg:text-lg">Descubre músic@s</h3>
            <div class="flex flex-col w-1/2 sm:flex-row sm:w-auto">
              <div class="flex flex-col mr-24">
                <router-link :to="{name: 'musicians.index', query: {instrument: 'voz'}}" class="footer-link">Cantantes</router-link>
                <router-link :to="{name: 'musicians.index', query: {instrument: 'guitarra'}}" class="footer-link">Guitarristas</router-link>
                <router-link :to="{name: 'musicians.index', query: {instrument: 'bajo'}}" class="footer-link">Bajistas</router-link>
                <router-link :to="{name: 'musicians.index', query: {instrument: 'piano'}}" class="footer-link">Pianistas</router-link>
                <router-link :to="{name: 'musicians.index', query: {instrument: 'percusión'}}" class="footer-link"
                  >Percusionistas</router-link
                >
                <router-link :to="{name: 'musicians.index', query: {instrument: 'batería'}}" class="footer-link">Bateristas</router-link>
                <router-link :to="{name: 'musicians.index', query: {instrument: 'saxo'}}" class="footer-link">Saxofonistas</router-link>
              </div>
              <div class="flex flex-col">
                <router-link :to="{name: 'musicians.index', query: {rol: 'cantautor'}}" class="footer-link">Cantautores</router-link>
                <router-link :to="{name: 'musicians.index', query: {rol: 'sesion'}}" class="footer-link"
                  >Músic@s de sesión</router-link
                >
                <router-link :to="{name: 'musicians.index', query: {rol: 'acomp'}}" class="footer-link">Acompañantes</router-link>
                <router-link :to="{name: 'musicians.index', query: {rol: 'lider'}}" class="footer-link"
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
            <div class="flex flex-col pt-12 mr-12">
              <h3 class="text-gray-400 lg:text-lg">
                Sobre
                <span class="italic text-gray-300 underline font-abril-fatface"
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
            <div class="flex flex-col pt-12">
              <h3 class="text-gray-400 lg:text-lg">Síguenos</h3>
              <router-link to="" class="footer-link">Facebook</router-link>
              <router-link to="" class="footer-link">Twitter</router-link>
              <router-link to="" class="footer-link">Instagram</router-link>
              <router-link to="" class="footer-link">YouTube</router-link>
            </div>
          </div>
        </div>
        <div class="flex flex-col pt-12">
          <h3 class="text-gray-400 lg:text-lg">¿Necesitas ayuda?</h3>
          <router-link to="" class="footer-link">F.A.Q.</router-link>
          <router-link to="" class="footer-link"
            >Guía para nuev@s músic@s</router-link
          >
        </div>
      </div>
      <hr class="my-12 w-9/12 md:w-full" />
      <footer
        class="flex relative bottom-0 flex-col justify-between items-start pb-8 w-full text-sm text-left text-gray-500 md:flex-row sm:items-center sm:text-center"
      >
        <div class="mb-1 text-left md:w-1/3 md:mb-0">jcastellcolom@cifpfbmoll.eu</div>
        <div class="mb-1 md:w-1/3 md:mb-0">&#169 2022 Josep Maria Castell Colom</div>
        <div class="flex flex-col justify-end sm:flex-row md:w-1/3">
          <router-link to="" class="font-bold text-gray-500 hover:text-gray-300"
            >Política de privacidad</router-link
          >
          <router-link
            to=""
            class="font-bold text-gray-500 hover:text-gray-300 sm:ml-4"
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
