<template>
  <div class="header row">
    <div class="container">
      <div class="row">
        <div class="col-md-2 my-auto">
          <router-link v-slot="{ navigate }" to="/admin">
            <img
              @click="navigate"
              src="https://picsum.photos/200"
              class="rounded-circle"
              alt="Cinque Terre"
            />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="row">
            <router-link class="mx-auto" v-slot="{ navigate }" to="/">
              <Akhbar class="mx-auto" @click="navigate" />
            </router-link>
          </div>
          <div class="row">
            <ul class="nav-btns my-auto">
              <router-link v-slot="{ navigate }" to="/">
                <li class="btn" @click="navigate">Home</li>
              </router-link>
              <li class="btn">About Us</li>
              <!-- <li class="btn">Test</li> -->
              <li class="btn">Contact Us</li>
              <router-link
                v-if="role === 'admin' || role === 'moderator'"
                v-slot="{ navigate }"
                to="/admin"
              >
                <li class="btn" @click="navigate">Admin Panel</li>
              </router-link>
              <router-link v-if="!user" v-slot="{ navigate }" to="/login">
                <li class="btn" @click="navigate">Login</li>
              </router-link>
              <li class="btn" v-else @click="Logout">Logout</li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 my-auto menu-button">
          <button class="btn">
            Categories
            <Menu />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
import { mapState } from "vuex";
import Akhbar from "@/components/SVG/akhbar";
import Menu from "@/components/SVG/menu";

export default {
  inject: ["Cookies"],
  name: "AppHeader",
  components: {
    Akhbar,
    Menu,
  },
  data: function () {
    return {
      userData: {},
      credential: {},
    };
  },
  computed: mapState(["role", "user"]),
  methods: {
    Logout() {
      return store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  color: #302e2e;
  overflow: hidden;
  position: relative;
  max-height: 148px;
  margin: 0px;
  box-shadow: 0px 4px 5px rgba(68, 68, 68, 0.16);
  svg {
    margin-top: 15px;
  }
}
.nav-btns {
  list-style-type: none;
  margin: auto;
  li {
    font-size: 18px;
    float: left;
    display: block;
    text-align: center;
    padding: auto;
    text-decoration: none;
    margin: 15px;
  }
}
.menu-button {
  svg {
    margin: 0px;
  }
}
.container {
  max-width: 80%;
}
img {
  height: 68px;
}
</style>
