<template>
  <div class="home">
    <button btn @click="login">Login</button>
    <button btn @click="user">show data</button>
    <div>
      <!-- {{ userData }} -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import store from "../store";

export default {
  name: "Home",
  data: () => {
    return {
      loginCred: {
        email: "admin@gmail.com",
        password: 12345678,
      },
      userData: {},
    };
  },
  components: {
    // HelloWorld,
  },
  computed: {},
  watch: {},
  methods: {
    login() {
      var data = this.loginCred;
      return store.dispatch("login", {
        data,
      });
    },
    user() {
      return (this.userData = store.state.user);
    },
  },
};
</script>
