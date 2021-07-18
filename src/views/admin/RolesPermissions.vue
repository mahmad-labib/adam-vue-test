<template>
  <div class="container">
    <h1>Roles</h1>
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
              class="btn btn-info float-left"
              v-for="perm in roles.permissions"
              :key="perm.id"
            >
              {{ perm.name }}
            </button>
          </td>
          <td>
            <button @click="redirectToEditUser(user)" class="btn btn-primary">
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
      });
    },
  },
  mounted: function () {
    this.getRoles();
  },
};
</script>

<style lang="scss" scoped></style>
