<template>
  <div>
    <button @click="readOnly" style="margin: 15px" class="btn btn-warning">
      Start Edit
    </button>
    <form @submit="editUser(user, $event)">
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            :readonly="this.readOnlyState"
            type="text"
            class="form-control"
            id="text"
            v-model="user.name"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            :readonly="this.readOnlyState"
            v-model="user.email"
            type="text"
            class="form-control"
            id="Email"
          />
        </div>
      </div>
      Current Roles :
      <div
        style="margin: 15px"
        v-for="role in user.roles"
        :key="role.id"
        class="btn btn-info"
      >
        {{ role.name }}
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label"
          >Replace Roles:</label
        >
        <div class="col-sm-10">
          <treeselect v-model="value" :multiple="true" :options="options" />
        </div>
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
// import the component
import Treeselect from "vue3-treeselect";
// import the styles
import "vue3-treeselect/dist/vue3-treeselect.css";
import axios from "axios";
import store from "../../store";
// import router from '../../router'
export default {
  props: true,
  name: "EditUser",
  components: {
    Treeselect,
  },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: [],
      user: {},
      readOnlyState: true,
    };
  },
  methods: {
    readOnly() {
      this.readOnlyState
        ? (this.readOnlyState = false)
        : (this.readOnlyState = true);
    },
    assignChild(roles) {
      roles.forEach((element) => {
        this.options.push({ id: element.id, label: element.name });
      });
    },
    getRoles() {
      axios.get("api/v1/admin/roles").then((result) => {
        this.assignChild(result.data.roles);
      });
    },
    getUser() {
      this.user = this.usersData;
    },
    editUser(user, event) {
      if (this.value !== null) {
        user.roles = this.value;
      } else {
        this.user.roles.forEach((role) => {
          user.roles.push(role.id);
        });
      }
      event.preventDefault();
      return store.dispatch("editUser", {
        user,
      });
    },
  },
  mounted: function () {
    this.getRoles();
    this.getUser();
  },
  computed: {
    usersData: function () {
      return this.$store.state.activeUser;
    },
  },
};
</script>