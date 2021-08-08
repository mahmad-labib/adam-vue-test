<template>
  <div class="wrapper container-full">
    <div class="row justify-content-center title">My Pending Articles</div>
    <div class="row justify-content-around">
      <box v-for="article in articles" :key="article.id" :article="article"/>
    </div>
  </div>
</template>
<script>
import Box from "../../components/admin/MyArticleBox.vue";
import store from "../../store";

export default {
  name: "MyPendingArticles",
  components: {
    Box,
  },
  methods: {
    getArticle() {
      return store.dispatch("userPendingArticles");
    }
  },
  mounted:function() {
    this.getArticle();
  },
  computed: {
    articles: function () {
      return this.$store.state.userPendingArticles;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: white;
}
.title {
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
