<template>
  <div class="container article-conatiner">
    <div class="row head-row">
      <div class="col-md-1"></div>
      <div class="col-md title">
        <p>{{ article.title }}</p>
        <p>Main category > child</p>
      </div>
      <div class="col-md autour-bilb">
        <div class="row justify-content-end">
          <UserIcon />
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row body-row justify-content-around">
      <div class="col-md-10" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import UserIcon from "@/components/global/UserIcon";
export default {
  name: "article",
  data: () => {
    return { article_id: 21, article: {} };
  },
  components: {
    UserIcon,
  },
  mounted() {
    console.log("fired");
    this.GetArticle();
  },
  watch: {
    "$store.state.article"(nv) {
      return (this.article = nv.article);
    },
  },
  methods: {
    GetArticle() {
      var id = this.article_id;
      return store.dispatch("article", {
        id,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.article-conatiner {
  background-color: white;
  margin-top: 23px;
  max-width: 1364px;
}
.head-row {
  padding-top: 40px;
  .title {
    text-align: start;
    p {
      font-size: 30px;
      color: #707070;
    }
    p:first-of-type {
      font-size: 50px;
      font-weight: bold;
      color: black;
    }
  }
  .autour-bilb {
    align-items: flex-end;
  }
}
</style>
