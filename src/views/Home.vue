<template>
  <div class="container home-container">
    <Carousel v-if="news.length > 0" :articles="news.slice(0, 4)" />
    <div class="row justify-content-around">
      <NewsBox
        v-for="article in news"
        :key="article.id"
        :article="article"
        :user="article.creator[0]"
      />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/news/Carousel";
import NewsBox from "@/components/news/NewsBox";
import { mapState } from "vuex";
import store from "../store";
export default {
  name: "Home",
  components: {
    Carousel,
    NewsBox,
  },
  data() {
    return {
      paginate: 1,
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
</style>
