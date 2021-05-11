<template>
  <app-header />
  <router-view />
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f4f4;
  height: 100vh;
  .router-link-exact-active {
    color: black;
  }
  a {
    color: #ced4da;
  }
}

// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
