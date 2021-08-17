<template>
  <div class="container article-conatiner">
    <div class="row head-row">
      <div class="col-md-1"></div>
      <div class="col-md title">
        <p>{{ article.title }}</p>
        <p>Category > {{ article.section[0].name }}</p>
      </div>
      <div class="col-md autour-bilb">
        <div class="row justify-content-end">
          <UserIcon
            :user="article.creator[0]"
            @click="creatorProfile(article.creator[0].id)"
          />
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row body-row">
      <div class="col-md-12" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import UserIcon from "@/components/global/UserIcon";
import { mapState } from "vuex";

export default {
  name: "article",
  data: () => {},
  components: {
    UserIcon,
  },
  computed: {
    ...mapState(["article"]),
  },
  methods: {
    creatorProfile(id) {
      return store.dispatch("creatorProfile", {
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
