<template>
  <div class="header row">
    <div class="container">
      <div class="row">
        <div class="col-md-2 my-auto">
          <img
            src="https://picsum.photos/200"
            class="rounded-circle"
            alt="Cinque Terre"
          />
        </div>
        <div class="col-md-8">
          <div class="row">
            <Akhbar class="mx-auto" />
          </div>
          <div class="row">
            <ul class="nav-btns my-auto">
              <li class="btn">Home</li>
              <li class="btn">About Us</li>
              <router-link v-slot="{ navigate }" to="/authorProfile">
                <li class="btn" @click="navigate">Test</li>
              </router-link>
              <!-- <li class="btn">Test</li> -->
              <li class="btn">Contact Us</li>
              <router-link
                v-if="!user.api_token"
                v-slot="{ navigate }"
                to="/login"
              >
                <li class="btn" @click="navigate">Login</li>
              </router-link>
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
import { mapGetters } from "vuex";
import Akhbar from "@/components/SVG/akhbar";
import Menu from "@/components/SVG/menu";
export default {
  name: "AppHeader",
  components: {
    Akhbar,
    Menu,
  },
  data: () => {
    return {
      userData: {},
    };
  },
  computed: { ...mapGetters(["user"]) },
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
