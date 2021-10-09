<script>
export default {
  name: "red-navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">
        <router-link to='/'> NFTView </router-link>
      </span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white" @click="toggleNavbar()">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow flex-center">
        <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" to='/Whatisnft'> What is a NFT ? </router-link>
        <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" to='/Gallery'> Gallery </router-link>
        <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" to='/Calendar'> Calendar </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
</style>
