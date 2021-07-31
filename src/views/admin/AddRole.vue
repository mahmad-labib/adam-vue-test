<template>
  <div class="container">
    <h1>Add New Role</h1>
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label"
          >Role Name :</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="text"
            v-model="role.name"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="exampleFormControlSelect2" class="col-sm-2"
          >Select Permissions :</label
        >
        <div class="col-sm-10">
          <div
            style="margin: 5px"
            v-for="permission in permissions"
            :key="permission.id"
            class="btn btn-secondary"
            @click="
              (e) =>
                e.target.classList.toggle('btn-success') &
                e.target.querySelector('.fa').classList.toggle('fa-check') &
                selectPerm(permission.id)
            "
          >
            <i v-on:click.stop class="fa" aria-hidden="true"></i>
            {{ permission.name }}
          </div>
        </div>
      </div>
      <button
        @click="submitRole(role, $event)"
        class="btn btn-secondary"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
export default {
  name: "AddRole",
  data() {
    return {
      role: {
        name: "",
        permissions: [],
      },
      permissions: [],
    };
  },
  methods: {
    getPermissions() {
      axios.get("api/v1/admin/permissions").then((result) => {
        this.permissions = result.data.permissions;
      });
    },
    selectPerm(id) {
      var checkPerm = this.role.permissions.indexOf(id);
      if (checkPerm !== -1) {
        this.role.permissions.splice(checkPerm, 1);
      } else {
        this.role.permissions.push(id);
      }
    },
    submitRole(role, event) {
      event.preventDefault();
      axios
        .post("api/v1/admin/roles", {
          name: role.name,
          permissions: role.permissions,
        })
        .then(() => {
          return router.push("/admin/RolesPermissions");
        });
    },
  },
  mounted: function () {
    this.getPermissions();
  },
};
</script>
<style lang="scss" scoped>
.container {
  background-color: white;
  padding: 15px;
}
</style>
