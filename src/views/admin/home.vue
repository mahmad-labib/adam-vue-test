<template>
  <div class="content-wrapper container-full">
    <div class="row">
      <div class="col-md-7">
        <div class="user-data-box">
          <div class="container-full">
            <div class="row justify-content-center">
              <img
                src="https://images.unsplash.com/profile-1449177714116-d6cac59f5eab?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt=""
              />
            </div>
            <div class="row justify-content-center">
              <button class="upload-btn">uplaod</button>
            </div>
            <div class="form-group row">
              <label for="Name" class="col-sm-4 col-form-label">Name:</label>
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Name"
                  v-model="user.name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="Email" class="col-sm-4 col-form-label">Email:</label>
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                  v-model="user.email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="facebook" class="col-sm-4 col-form-label"
                >facebook link:</label
              >
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="facebook"
                  placeholder="facebook"
                  v-model="user.fb_link"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="twitter" class="col-sm-4 col-form-label"
                >twitter link:</label
              >
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="twitter"
                  placeholder="twitter"
                  v-model="user.twitter_link"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="speciality" class="col-sm-4 col-form-label"
                >speciality :</label
              >
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="speciality"
                  placeholder="speciality"
                  v-model="user.speciality"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="summary" class="col-sm-4 col-form-label"
                >summary :</label
              >
              <div class="col-sm-8">
                <textarea
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="summary"
                  placeholder="summary"
                  v-model="user.summary"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="old-password" class="col-sm-4 col-form-label"
                >old password :</label
              >
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="old-password"
                  placeholder="old-password"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="new-password" class="col-sm-4 col-form-label"
                >new password :</label
              >
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="new-password"
                  placeholder="new-password"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="retype-password" class="col-sm-4 col-form-label"
                >retype password :</label
              >
              <div class="col-sm-8">
                <input
                  :readonly="edit === false"
                  type="text"
                  class="form-control"
                  id="retype-password"
                  placeholder="retype-password"
                />
              </div>
            </div>
          </div>
          <div @click="editState()" class="row form-button mx-auto">
            <div class="col-md-12 my-auto" v-if="edit">Submit</div>
            <div class="col-md-12 my-auto" v-else>Edit</div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="row info-box justify-content-between">
          <div class="col-md-4 child-box my-auto">
            <div class="row title">accepted articles</div>
            <div class="row counter">
              <p>0</p>
            </div>
          </div>
          <div class="col-md-4 child-box my-auto">
            <div class="row title">pending articles</div>
            <div class="row counter">
              <p>3</p>
            </div>
          </div>
          <div class="col-md-4 child-box my-auto">
            <div class="row title">rejected articles</div>
            <div class="row counter">
              <p>55</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col">
            <div class="vertical-info-box">
              <div class="row title">Roles</div>
              <div
                v-for="role in user.roles"
                :key="role.id"
                class="row v-b-child"
              >
                <p>{{ role.name }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="vertical-info-box right">
              <div class="row title">Sections</div>
              <div
                v-for="section in user.sections"
                :key="section.id"
                class="row v-b-child"
              >
                <p>{{ section.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row articles">
      <div class="row mx-auto search-row">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Serach"
            aria-label="Serach"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary search-btn"
            type="button"
            id="button-addon2"
          >
            Serach
          </button>
        </div>
        <div class="dropdown mx-auto">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <router-link
        v-for="article in myArticles"
        :key="article.id"
        :to="{
          path: `/article/${article.id}`,
        }"
      >
        <news-box :article="article" :user="user" />
      </router-link>
    </div>
    <div class="row justify-content-center">
      <nav aria-label="Page navigation pagination-wrapper">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import store from "../../store";
import { mapState } from "vuex";
import NewsBox from "../../components/news/NewsBox.vue";
export default {
  name: "admin-home",
  components: {
    NewsBox,
  },
  data() {
    return {
      edit: false,
      userData: {},
      paginate: 1,
    };
  },
  methods: {
    editState() {
      if (this.edit) {
        this.edit = false;
      } else {
        this.edit = true;
      }
    },
    Articles() {
      return store.dispatch("myArticles", {
        paginate: this.paginate,
      });
    },
  },
  computed: {
    ...mapState(["user", "myArticles"]),
  },
  mounted: function () {
    this.Articles();
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-color: white;
  padding: 10px;
}
.user-data-box {
  position: relative;
  max-width: 770px;
  border: 1px solid #ced4da;
  box-shadow: 15px 15px 3px rgba(0, 0, 0, 0.16);
  text-align: start;
  .container-full {
    padding: 0px 55px 0px 55px;
  }
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    filter: drop-shadow(10px 10px 6px rgba(0, 0, 0, 0.16));
    margin-top: 30px;
    margin-bottom: 18px;
  }
  .upload-btn {
    border-width: 0;
    border-radius: 5px;
    width: 80px;
    height: 37px;
    background-color: #ced4da;
    font-size: 18px;
  }
  .form-group {
    margin-top: 15px;
    textarea {
      max-height: 130px;
    }
  }
  .form-button {
    width: 100%;
    background-color: #ced4da;
    bottom: 0px;
    max-width: 768px;
    height: 67px;
    text-align: center;
  }
}
.info-box {
  background: rgba(193, 193, 193, 0.15);
  padding: 30px 0px 35px 0px;
  margin: 0px;
}
.child-box {
  max-width: 178.99px;
  .row {
    justify-content: center;
  }
  .title {
    font-size: 15px;
    font-weight: bold;
  }
}
.counter {
  background-color: #ced4da;
  justify-content: center;
  height: 60px;
  margin-top: 30px;
  p {
    font: 30px bold;
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
}
.vertical-info-box {
  margin-top: 18px;
  max-width: 180px;
  background: rgba(193, 193, 193, 0.15);
  padding: 0px;
  .v-b-child {
    background-color: #ced4da;
    justify-content: center;
    font: 18px;
    margin: auto;
    padding-top: 18px;
    padding-bottom: 18px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    margin-bottom: 25px;
    p {
      margin: auto;
    }
  }
  .title {
    justify-content: center;
    padding-top: 25px;
    padding-bottom: 25px;
    margin: auto;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    font-size: 25px;
  }
}
.right {
  margin-right: 0px;
  margin-left: auto;
}
.articles {
  margin-top: 47px;
  margin-bottom: 30px;
}
.search-row {
  .search-btn {
    border-color: #c1c1c1;
  }
  .dropdown {
    .btn {
      background-color: white;
      color: #707070;
      border-radius: 0px;
      border-color: #c1c1c1;
    }
  }
  .search-input {
    border-radius: 4px;
  }
  margin-bottom: 12px;
}
.pagination {
  .page-link {
    color: #6c757d;
  }
}

news-box {
  margin: 0px;
}
</style>
