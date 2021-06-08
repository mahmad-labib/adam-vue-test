<template>
  <div>
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
            <button class="btn btn-info" v-for="role in user.roles" :key="role.id">
              {{ role.name }}
            </button>
          </td>
          <td>
            <button class="btn btn-info" v-for="section in user.sections" :key="section.id">
              {{ section.name }}
            </button>
          </td>
          <td>
              <button  class="btn btn-primary">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row justify-content-center">
      <nav aria-label="Page navigation pagination-wrapper">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li @click="getUsers(page)" v-for="page in getPages" :key="page" class="page-item"><a class="page-link" href="#">{{page}}</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import store from "../../store";
// import { mapGetters } from 'vuex'

export default {
  name: "UsersList",
  data() {
    return {
      users: this.usersData,
      page: 1,
      pages: []
    };
  },
  methods: {
    getUsers(paginate) {
      return store.dispatch("getUsers", {
        paginate,
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
.btn{
margin-right: 0.5px;
margin-bottom: 0.5px;
}
</style>
