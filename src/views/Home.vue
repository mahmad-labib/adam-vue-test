<template>
  <div class="container home-container">
   
    <div class="row justify-content-around">
      <router-link
        v-for="article in news"
        :key="article.id"
        :to="{ path: `/article/${article.id}` }"
      >
        <NewsBox :article="article" :user="article.creator[0]" />
      </router-link>
    </div>
  </div>
</template>

<script>
import NewsBox from "@/components/news/NewsBox";
import { mapState } from "vuex";
import store from "../store";

import "vue3-carousel/dist/carousel.css";

export default {
  name: "Home",
  components: {
    NewsBox,
  },
  data() {
    return {
      paginate: 1,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    news_get() {
      return store.dispatch("news", { paginate: this.paginate });
    },
  },
  mounted: function () {
    this.news_get();
  },
  computed: {
    ...mapState(["news"]),
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  max-width: 1364px;
  margin-top: 15px;
  padding: 35px 30px 30px 30px;
  background-color: #ffffff;
  .row {
    max-width: 1306px;
    margin: 0px;
    margin-top: 35px;
  }
}
.d-block {
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
img {
  width: 100%;
  height: auto;
  z-index: 0;
}
</style>
