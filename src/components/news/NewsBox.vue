<template>
  <div class="box">
    <div class="user-icon">
      <UserIcon :user="user" />
    </div>
    <img
      :src="'http://apiproject.stg/storage/' + article.images[0].path"
      alt=""
    />
    <div class="box-title">
      <!-- <div>Welcome, {{ username.substring(0, 8) + ".." }}</div> -->
      <h2>
        {{
          article.title.length > 60
            ? article.title.substring(0, 60) + "..."
            : article.title
        }}
      </h2>
    </div>
  </div>
</template>

<script>
import UserIcon from "../global/UserIcon";
import store from "../../store";
// import router from '../../router'

export default {
  name: "NewsBox",
  props: ["article", "user"],
  
  components: {
    UserIcon,
  },
  methods: {
    openArticle(id) {
      return store.dispatch("article", {
        id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 398px;
  height: 302px;
  margin-bottom: 50px;
  .row {
    margin: 0px;
  }
}
img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
.box::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: 15px;
  background: linear-gradient(-180deg, transparent, rgba(0, 0, 0, 0.5));
}
.box-title {
  position: absolute;
  bottom: 0px;
  z-index: 2;
  h2 {
    font-size: 20px;
    color: white;
    text-align: start;
    margin: 15px 20px;
  }
}
.user-icon {
  margin-left: 14px;
  margin-top: 14px;
  position: absolute;
}
</style>
