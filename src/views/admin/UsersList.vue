<template>
  <div>
    <form @submit="search(searchData, $event)">
      <div class="row">
        <div class="input-group mb-3 col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="name"
            aria-label="name"
            aria-describedby="button-addon2"
            name="name"
            v-model="searchData.name"
          />
        </div>
        <div class="input-group mb-3 col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Role"
            aria-label="Role"
            aria-describedby="button-addon2"
            name="role"
            v-model="searchData.role"
          />
        </div>
        <div class="input-group mb-3 col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Section"
            aria-label="Section"
            aria-describedby="button-addon2"
            name="section"
            v-model="searchData.section"
          />
        </div>
        <div class="input-group mb-3 col-md-3">
          <button
            class="btn btn-outline-secondary"
            id="button-addon2"
            type="submit"
          >
            Search
          </button>
          <button class="btn btn-warning" type="button" id="button-addon2">
            Reset
          </button>
        </div>
      </div>
    </form>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">roles</th>
          <th scope="col">sections</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersData" v-bind:key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button
              class="btn btn-info"
              v-for="role in user.roles"
              :key="role.id"
            >
              {{ role.name }}
            </button>
          </td>
          <td>
            <button
              class="btn btn-info"
              v-for="section in user.sections"
              :key="section.id"
            >
              {{ section.name }}
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
    <div class="row justify-content-center">
      <nav aria-label="Page navigation pagination-wrapper">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li
            @click="getUsers(page)"
            v-for="page in getPages"
            :key="page"
            class="page-item"
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import store from "../../store";
import router from "../../router";

export default {
  name: "UsersList",
  data() {
    return {
      users: this.usersData,
      page: 1,
      pages: [],
      searchData: { name: null, section: null, role: null },
    };
  },
  methods: {
    getUsers(paginate) {
      return store.dispatch("getUsers", {
        paginate,
      });
    },
    search(data, event) {
      event.preventDefault();
      return store.dispatch("searchUsers", {
        data,
      });
    },
    redirectToEditUser(user) {
      this.$store.state.activeUser = user;
      return router.push({
        name: "EditUser",
        props: { userId: user },
      });
    },
  },
  created() {
    this.getUsers(this.page);
  },
  computed: {
    usersData: function () {
      return this.$store.state.users;
    },
    getPages: function () {
      return this.$store.state.pages;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 1px;
  margin-bottom: 1px;
}
</style>
