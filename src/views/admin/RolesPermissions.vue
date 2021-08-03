<template>
  <div class="container">
    <h1>roles</h1>
    <router-link class="mx-auto" v-slot="{ navigate }" to="/admin/AddRole">
      <button class="btn btn-dark add-btn" @click="navigate">Add Role</button>
    </router-link>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">role</th>
          <th scope="col">permissions</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" v-bind:key="role.id">
          <td>{{ role.name }}</td>
          <td>
            <button
              class="btn btn-info float-left table-btn"
              v-for="perm in role.permissions"
              :key="perm.id"
            >
              {{ perm.name }}
            </button>
          </td>
          <td>
            <button @click="redirectToEditRole(role)" class="btn btn-primary">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import router from "../../router"
// import store from "../../store";

export default {
  name: "RolesPermissions",
  data() {
    return {
      roles: [],
    };
  },
  methods: {
    getRoles() {
      axios.get("api/v1/admin/roles").then((result) => {
        this.roles = result.data.roles;
        console.log(result.data.roles);
      });
    },
    redirectToEditRole(role) {
      this.$store.state.activeRole = role;
      return router.push({
        name: "EditRole",
        // props: { userId: user },
      });
    },
  },
  mounted: function () {
    this.getRoles();
  },
};
</script>

<style lang="scss" scoped>
.add-btn {
  margin: 5px;
}
.table-btn{
  margin-right: 5px;
}
</style>
