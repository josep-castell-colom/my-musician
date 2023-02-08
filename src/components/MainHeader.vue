<script lang="ts">
export default {
  data() {
    return {
      burguer: true,
      burguerActive: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkWidth);
  },
  mounted() {
    this.checkWidth();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkWidth);
  },
  methods: {
    userAuth(): boolean {
      return localStorage.getItem("user") ? true : false;
    },
    checkWidth() {
      this.burguer = window.innerWidth <= 1024;
    },
    toggleBurguerActive() {
      this.burguerActive = !this.burguerActive;
    },
  },
};
</script>

<template>
  <header
    class="flex fixed z-50 justify-between items-center w-full h-12 text-gray-100 shadow-2xl backdrop-blur-md bg-gray-800/80"
    :class="{ solid: burguerActive }"
  >
    <router-link to="/">
      <div
        class="flex items-center ml-2 transition-transform duration-300 hover:scale-110"
        @click="burguerActive = false"
      >
        <svg
          fill="#ffffff"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="48px"
          height="48px"
          viewBox="-51.2 -51.2 614.40 614.40"
          enable-background="new 0 0 512 512"
          xml:space="preserve"
          stroke="#000000"
          transform="rotate(0)"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <path
              transform="translate(-51.2, -51.2), scale(19.2)"
              d="M16,25.24958934634924C19.17325020081548,25.11638752134364,22.60462485852684,28.8096022768145,25.101711129276964,26.84699693707053C27.57867069418355,24.900210346090937,24.860787402724487,20.754420322031223,25.612108636327136,17.694874094085325C26.468369019765706,14.207992439314328,30.773540452524347,11.514140454728537,29.70899786326777,8.085106393322352C28.64792981990642,4.667264308961421,24.470189547990994,2.821290903540015,20.90348803214055,2.52777735512786C17.725907600556205,2.266285636884941,15.666833497091183,5.781828245818297,12.60697278066666,6.677734331286739C9.135345750382495,7.6942027496736625,4.2082418869409945,5.0270671033561225,2.1672044777140655,8.013631781563156C0.16742785206315625,10.93982128082138,4.179170988627192,14.487003670589553,4.898287231753756,17.95753149311747C5.579817588420987,21.246666020836262,3.4261870571548494,25.79491193342273,6.233711977410289,27.63900883723108C9.122014954262264,29.536164064045085,12.54739404797883,25.394517538181145,16,25.24958934634924"
              fill="#ff7800"
              strokewidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path
                d="M199.5,318.466c-16-4.635-7.93-7.499-18.514-7.499c-25.814,0-41.969,16.406-41.969,36.634 c0,20.242,12.41,36.649,38.227,36.649c25.831,0,38.256-16.407,38.256-36.649V237.667l112-54.951v117.417 c-16-4.634-6.475-7.483-17.057-7.483c-25.801,0-41.25,16.407-41.25,36.634c0,20.243,11.33,36.649,37.146,36.649 c25.831,0,37.16-16.406,37.16-36.649V127.75l-144,73.284V318.466z"
              ></path>
              <path
                d="M256-0.5C114.349-0.5-0.5,114.333-0.5,256S114.349,512.5,256,512.5c141.683,0,256.5-114.833,256.5-256.5 S397.683-0.5,256-0.5z M256,472.422C136.485,472.422,39.578,375.53,39.578,256c0-119.53,96.907-216.422,216.422-216.422 c119.546,0,216.422,96.892,216.422,216.422C472.422,375.53,375.546,472.422,256,472.422z"
              ></path>
            </g>
          </g>
        </svg>
        <h1 class="ml-1 text-2xl italic underline font-abril-fatface">
          MyMusician
        </h1>
      </div>
    </router-link>
    <div
      :class="{
        burguerOn: burguer,
        burguerOff: !burguer,
        burguerShown: burguerActive,
        burguerHidden: !burguerActive,
      }"
      class="bg-gray-800 lg:bg-transparent"
    >
      <nav class="flex items-center">
        <router-link
          :to="{ name: 'musicians.index' }"
          @click="toggleBurguerActive"
          class="inline-block mx-4 transition-transform duration-300 hover:underline hover:scale-110"
          >Explora</router-link
        >
        <div class="flex relative items-center p-1 mr-4 bg-white rounded-full">
          <input
            type="text"
            name="search"
            id="search"
            class="pl-1 text-sm text-gray-900 rounded-full"
            placeholder="¿Qué estás buscando?"
          />
          <div
            class="absolute right-3 transition-transform duration-300 cursor-pointer hover:scale-150"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              height="12px"
              width="12px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#292D32"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 22L20 20"
                  stroke="#292D32"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </nav>
      <div id="nav-separator" class="w-px h-1/2 bg-white"></div>
      <div id="nav-user" class="flex items-center mx-4">
        <router-link
          :to="{ name: 'login' }"
          @click="toggleBurguerActive"
          v-if="!userAuth()"
          class="inline-block text-xs transition-transform duration-300 hover:underline hover:scale-110"
          >Log in</router-link
        >
        <router-link
          :to="{ name: 'register' }"
          @click="toggleBurguerActive"
          v-if="!userAuth()"
          class="inline-block ml-2 text-xs transition-transform duration-300 hover:underline hover:scale-110"
          >Register</router-link
        >
      </div>
    </div>
    <div
      class="flex relative flex-col justify-between items-center mr-4 w-7 h-6 transition-transform duration-300 scale-90 hover:scale-100 lg:hidden"
      :class="{ burguerShown: burguerActive }"
      @click="toggleBurguerActive"
    >
      <span
        class="block w-full h-1 bg-white rounded-md transition-transform duration-300"
        id="burguer-span-1"
      ></span>
      <span
        class="block w-full h-1 bg-white rounded-md transition-transform duration-300"
        id="burguer-span-2"
      ></span>
      <span
        class="block w-full h-1 bg-white rounded-md transition-transform duration-300"
        id="burguer-span-3"
      ></span>
    </div>
  </header>
</template>

<style scoped>
.burguerOff {
  height: 100%;
  display: flex;
  align-items: center;
}
.burguerOn.burguerShown {
  position: absolute;
  top: 3rem;
  height: calc(100vh - 3rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.burguerOn.burguerShown nav {
  flex-direction: column;
  height: 30vh;
  justify-content: space-around;
  font-size: 1.5rem;
}
.burguerOn.burguerShown nav > div {
  margin-right: 0;
}
.burguerOn.burguerShown #nav-separator {
  width: 50%;
  height: 1px;
  margin: 10vh 0;
}
.burguerOn.burguerShown #nav-user {
  flex-direction: column;
  justify-content: space-around;
  height: calc(20vh);
}
.burguerOn.burguerShown #nav-user * {
  font-size: 1.5rem;
  margin: 0;
}
.burguerShown #burguer-span-1 {
  transform: rotate(45deg) translate(5px, 10px);
}
.burguerShown #burguer-span-2 {
  transform: scale(0);
}
.burguerShown #burguer-span-3 {
  transform: rotate(-45deg) translate(5px, -10px);
}
.burguerOn.burguerHidden {
  display: none;
}
.solid {
  background-color: rgb(31, 41, 55);
}
</style>
