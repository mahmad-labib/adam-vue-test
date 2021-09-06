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
          <button
            @click="resetPage"
            class="btn btn-warning"
            type="button"
            id="button-addon2"
          >
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
              class="btn btn-info float-left"
              v-for="role in user.roles"
              :key="role.id"
            >
              {{ role.name }}
            </button>
          </td>
          <td>
            <div
              class="btn btn-info float-left"
              v-for="section in user.sections"
              :key="section.id"
            >
              {{ section.name }}
            </div>
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
          <li @click="navBtn(-1)" class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li
            v-for="page in usersData.lastPage"
            :key="page"
            class="page-item"
            :class="page == usersData.currentPage ? 'active' : ''"
            @click="
              searchState ? search(searchData, $event, page) : getUsers(page)
            "
          >
            <a class="page-link" href="#">{{ page }}</a>
          </li>
          <li @click="navBtn(1)" class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
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
      page: 1,
      searchState: false,
      searchData: { name: null, section: null, role: null },
    };
  },
  methods: {
    getUsers(paginate) {
      return store.dispatch("getUsers", {
        paginate,
      });
    },
    search(data, event, page) {
      event ? event.preventDefault() : null;
      page ? (data.paginate = page) : (data.paginate = 1);
      this.searchState = true;
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
    resetPage() {
      this.searchState = false;
      this.page = 1;
      this.searchData.name = null;
      this.searchData.sections = null;
      this.searchData.role = null;
      this.getUsers(this.page);
    },
    navBtn(num) {
      var paginate = this.usersData.currentPage + num;
      if (paginate > this.usersData.lastPage || paginate < 1) {
        return null;
      } else {
        this.searchState
          ? this.search(this.searchData, null, paginate)
          : this.getUsers(paginate);
      }
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
    pagesInfo: function () {
      return this.$store.state.pages_info;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 1px;
  margin-bottom: 1px;
  font-size: 15px;
  padding: 3px;
}
</style>
