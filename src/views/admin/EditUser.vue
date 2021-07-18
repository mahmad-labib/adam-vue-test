<template>
  <div class="container">
    <h1>Edit User</h1>
    <div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
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
            v-model="user.email"
            type="text"
            class="form-control"
            id="Email"
          />
        </div>
      </div>
      <h3>Current Roles</h3>
      <small v-if="user.roles && user.roles.length > 0" class="text-info">click to delete</small>
      <div
        style="margin: 5px"
        v-for="role in user.roles"
        :key="role.id"
        class="btn btn-success"
        @click="
          (e) =>
            e.target.classList.toggle('btn-danger') &
            e.target.querySelector('.fa').classList.toggle('fa-trash') &
            deletedItems(role.id, 'roles')
        "
      >
        <i v-on:click.stop class="fa fa-check" aria-hidden="true"></i>
        {{ role.name }}
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label"
          >Assign Roles</label
        >
        <div class="col-sm-10">
          <treeselect
            v-model="value"
            :multiple="true"
            :options="options"
            @input="value"
          />
        </div>
      </div>
      <h3>Current Sections</h3>
      <small v-if="user.sections && user.sections.length > 0" class="text-info"
        >click to delete</small
      >
      <div
        style="margin: 5px"
        v-for="section in user.sections"
        :key="section.id"
        class="btn btn-success"
        @click="
          (e) =>
            e.target.classList.toggle('btn-danger') &
            e.target.querySelector('.fa').classList.toggle('fa-trash') &
            deletedItems(section.id, 'sections')
        "
      >
        <i v-on:click.stop class="fa fa-check" aria-hidden="true"></i>
        {{ section.name }}
      </div>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label"
          >Assign Sections</label
        >
        <div class="col-sm-10">
          <treeselect
            v-model="sectionsValue"
            :multiple="true"
            :options="sectionsOptions"
          />
        </div>
      </div>
      <div>
        <button
          @click="editUser(user, $event)"
          class="btn btn-secondary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import the component
import Treeselect from "vue3-treeselect";
// import the styles
import "vue3-treeselect/dist/vue3-treeselect.css";
import axios from "axios";
import store from "../../store";

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
      sectionsValue: null,
      // define options
      options: [],
      sectionsOptions: [],
      user: {},
      deletedRoles: [],
      deletedSections: [],
    };
  },
  methods: {
    deletedItems(id, name) {
      if (name === "roles") {
        var checkRole = this.deletedRoles.indexOf(id);
        if (checkRole !== -1) {
          this.deletedRoles.splice(checkRole, 1);
        } else {
          this.deletedRoles.push(id);
        }
      }
      if (name === "sections") {
        var checkSection = this.deletedSections.indexOf(id);
        if (checkSection !== -1) {
          this.deletedSections.splice(checkSection, 1);
        } else {
          this.deletedSections.push(id);
        }
      }
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
    editChildren(data) {
      var children = [];
      data.children.forEach((element) => {
        var elChildren =
          element.children != null ? this.editChildren(element) : [];
        if (elChildren.length > 0) {
          children.push({
            id: element.id,
            label: element.name,
            children: elChildren,
          });
        } else {
          children.push({
            id: element.id,
            label: element.name,
          });
        }
      });
      return children;
    },
    getSections() {
      axios.get("api/v1/admin/sections").then((result) => {
        result.data.sections.forEach((element) => {
          var children =
            element.children != null ? this.editChildren(element) : [];
          if (children.length > 0) {
            this.sectionsOptions.push({
              id: element.id,
              label: element.name,
              children: children,
            });
          } else {
            this.sectionsOptions.push({
              id: element.id,
              label: element.name,
            });
          }
        });
      });
    },
    getUser() {
      this.user = this.usersData;
    },
    editUser(user, event) {
      event.preventDefault();
      if (this.value !== null) {
        user.roles = [];
        this.value.forEach((role) => {
          user.roles.push(role);
        });
      } else {
        user.roles = [];
      }
      if (this.sectionsValue !== null) {
        user.sections = [];
        this.sectionsValue.forEach((section) => {
          user.sections.push(section);
        });
      } else {
        user.sections = [];
      }
      user.deletedRoles = this.deletedRoles;
      user.deletedSections = this.deletedSections;
      return store.dispatch("editUser", {
        user,
      });
    },
  },
  mounted: function () {
    this.getRoles();
    this.getSections();
    this.getUser();
  },
  computed: {
    usersData: function () {
      return this.$store.state.activeUser;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  padding: 15px;
}
</style>
