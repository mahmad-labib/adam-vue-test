<template>
  <div class="container">
    <h1>Edit Role</h1>
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
          >Current Permissions :</label
        >
        <div class="col-sm-10">
          <div
            v-for="perm in role.permissions"
            :key="perm.id"
            class="btn btn-info"
            @click="
              (e) =>
                e.target.classList.toggle('btn-danger') &
                e.target.querySelector('.fa').classList.toggle('fa-trash') &
                deletedItems(perm.id)
            "
          >
            <i v-on:click.stop class="fa fa-check" aria-hidden="true"></i>
            {{ perm.name }}
          </div>
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
        class="btn btn-primary"
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
import { mapState } from "vuex";
export default {
  name: "EditRole",
  data() {
    return {
      role: {
        name: "",
        permissions: [],
      },
      permissions: [],
      deletedPerm: [],
      selectedPerm: [],
    };
  },
  methods: {
    getPermissions() {
      axios.get("api/v1/admin/permissions").then((result) => {
        this.permissions = result.data.permissions;
      });
    },
    selectPerm(id) {
      var checkPerm = this.selectedPerm.indexOf(id);
      if (checkPerm !== -1) {
        this.selectedPerm.splice(checkPerm, 1);
      } else {
        this.selectedPerm.push(id);
      }
    },
    deletedItems(id) {
      var checkPerm = this.deletedPerm.indexOf(id);
      if (checkPerm !== -1) {
        this.deletedPerm.splice(checkPerm, 1);
      } else {
        this.deletedPerm.push(id);
      }
    },
    submitRole(role, event) {
      event.preventDefault();
      if (this.selectedPerm.length > 0) {
        console.log('selected')
        role.permissions = this.selectedPerm;
      }else{
        role.permissions = [];
      }
      role.deletedPerm = this.deletedPerm;
      console.log(role);
      axios
        .post(`api/v1/admin/roles/${role.id}?_method=PUT`, role)
        .then((data) => {
          console.log(data);
          return router.push("/admin/RolesPermissions");
        });
    },
  },
  computed: {
    ...mapState(["activeRole"]),
  },
  mounted: function () {
    this.role = this.activeRole;
    // this.role.permissions = this.activeRole.permissions;
    this.getPermissions();
  },
};
</script>
