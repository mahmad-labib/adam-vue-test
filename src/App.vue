<template>
  <admin-navbar v-if="links" />
  <app-header v-else />
  <div v-if="links" class="row content-row">
    <div class="col-md-3">
      <side-menu />
    </div>
    <div class="col-md-9">
      <router-view v-slot="{ Component }">
        <!-- <transition name="route"> -->
        <component :is="Component" />
        <!-- </transition> -->
      </router-view>
    </div>
  </div>

  <router-view v-else v-slot="{ Component }">
    <!-- <transition name="router-anim" @after-enter="afterEnter"> -->
    <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>

<script>
import store from "./store";
import AppHeader from "@/components/global/AppHeader.vue";
import AdminNavbar from "@/components/admin/Navbar.vue";
import SideMenu from "@/components/admin/SideMenu.vue";
import axios from "axios";

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
  methods: {
    valid() {
      return store.dispatch("valid");
    },
  },
  computed: {
    links: function () {
      return this.$route.fullPath.includes("admin");
    },
  },
  mounted() {
    // this.valid();
  },
  created: function () {
    axios.interceptors.response.use(
      function (response) {
        if (response.data.msg == "invalid-token") {
          return store.dispatch("logout");
        }
        return response;
      },
      function (err) {
        return Promise.reject(err);
      }
    );
  },
};
</script>

<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
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
  overflow-y: scroll;
}
/* route transitions */
.router-anim-enter-active {
  scroll-behavior: auto;
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
