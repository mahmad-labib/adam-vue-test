<template>
  <div v-if="creatorProfile.id" class="container profile-container">
    <div class="profile-cloud row mx-auto">
      <div class="col-md-3">
        <div class="capsule">
          <img
            src="https://images.unsplash.com/profile-1449177714116-d6cac59f5eab?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt=""
          />
          <p>{{ creatorProfile.name }}</p>
          <ul class="icons-list">
            <li>
              <a :href="creatorProfile.fb_link" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#036BE4"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#2DA776"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                :href="'http://' + creatorProfile.twitter_link"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#5DA9DD"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9 cloud-right">
        <div class="container">
          <p><b>specialities :</b> {{ creatorProfile.speciality }}</p>
          <p><b>articles :</b> {{ creatorProfile.articles.length }}</p>
          <p>
            <b>sections :</b>
            <b v-for="section in creatorProfile.sections" :key="section.id">{{
              section.name + ", "
            }}</b>
          </p>
          <p class="summary-title"><b>summary</b></p>
          <p class="summary">
            {{ creatorProfile.summary }}
          </p>
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
        v-for="article in creatorProfile.articles"
        :key="article.id"
        :to="{ path: `/article/${article.id}` }"
      >
        <NewsBox :article="article" :user="creatorProfile" />
      </router-link>
    </div>
    <div class="row justify-content-center">
      <nav aria-label="Page navigation pagination-wrapper">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <div v-else class="container profile-container">
    <div
      class="spinner-grow text-primary"
      style="width: 3rem; height: 3rem"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import NewsBox from "@/components/news/NewsBox";
import store from "../store";
import { mapState } from "vuex";
// import route from 'vue-router';
export default {
  name: "AuthorProfile",
  components: {
    NewsBox,
  },
  data: () => {
    return {
      // userId: ,
    };
  },
  methods: {
    getUser() {
      console.log(this.$route.params.id);
      return store.dispatch("creatorProfile", {
        id: this.$route.params.id,
      });
    },
  },
  mounted() {
    this.getUser();
  },
  computed: {
    ...mapState(["creatorProfile"]),
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  background-color: white;
  max-width: 1364px;
  min-height: 50vh;
  margin-top: 15px;
  padding-top: 32px;
}
.profile-cloud {
  background-color: #c1c1c1;
  max-width: 1080px;
  min-height: 430px;
  border-radius: 40px;
  margin-bottom: 23px;
}
.capsule {
  margin: auto;
  margin-top: 20px;
  width: 172px;
  min-height: 380px;
  max-height: 100%;
  background-color: #d6d6d6;
  border-radius: 40px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  img {
    border-radius: 50%;
    width: 101px;
    height: 101px;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  .bi-twitter {
    margin-bottom: 25px;
  }
}
.icons-list {
  list-style: none;
  padding: 0px;
  svg {
    width: 34px;
    height: 34px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
.cloud-right {
  margin-top: 25px;
  text-align: start;
  .summary-title {
    text-align: center;
  }
}
.articles {
  margin-top: 46px;
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
</style>
