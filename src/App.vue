<template>
  <admin-navbar v-if="links" />
  <app-header v-else />
  <div v-if="links" class="row content-row">
    <div class="col-md-3">
      <side-menu />
    </div>
    <div class="col-md-9">
      <router-view />
    </div>
  </div>
  <router-view v-else />
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";
import AdminNavbar from "@/components/admin/Navbar.vue";
import SideMenu from "@/components/admin/SideMenu.vue";

export default {
  name: "app",
  inject: ["Cookies"],
  data() {
    return {
      // routeName: this.links(),
    };
  },
  components: {
    AppHeader,
    AdminNavbar,
    SideMenu,
  },
  computed: {
    links: function () {
      return this.$route.fullPath.includes("admin");
    },
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
  .content-row {
    margin-top: 20px;
    margin-right: 0px;
    margin-left: 0px;
  }
}
</style>
