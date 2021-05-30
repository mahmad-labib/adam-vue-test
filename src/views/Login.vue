<template>
  <div class="login container">
    <div>
      <label>
        <router-link to="/login"> Login</router-link>
      </label>
      |
      <label>
        <router-link to="/signup"> SignUp</router-link>
      </label>
      <div>
        <p>{{ message }}</p>
      </div>
      <div class="form-group">
        <input
          v-model="form.email"
          type="email"
          name="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button v-on:click="submit()" class="btn">Submit</button>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      var data = this.form;
      return store.dispatch("login", {
        data,
      });
    },
  },
  computed: {
    message: function () {
      return this.$store.state.message;
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  font-size: 30px;
  background-color: white;
  max-width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  height: 70%;
  box-shadow: 0px 3px 5px rgba(68, 68, 68, 0.16);
  label {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  input {
    font-size: 30px;
    width: 70%;
    margin: auto;
    margin-top: 50px;
    height: 78px;
  }
  .btn {
    font-size: 30px;
    border: 1px solid #ced4da;
    margin-top: 50px;
    width: 30%;
  }
  ::placeholder {
    color: #ced4da;
    opacity: 1; /* Firefox */
  }
}
</style>
