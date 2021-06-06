<template>
  <div class="box">
    <div class="header row"></div>

    <div class="text-col my-auto">
      <p>section: <a>section</a></p>
      <p>state: <a style="color: #036be4">state</a></p>
    </div>
    <div class="info row justify-content-around">
      <div class="user-icon">
        <UserIcon />
      </div>
      <div>
        <rejected />
      </div>
    </div>

    <div class="box-title row">
      <!-- <div>Welcome, {{ username.substring(0, 8) + ".." }}</div> -->
    </div>
    <h2>{{ title.length > 60 ? title.substring(0, 60) + "..." : title }}</h2>
  </div>
</template>

<script>
import UserIcon from "../global/UserIcon";
import Rejected from "../SVG/rejected.vue";
// import Comment from "../SVG/comment.vue";
export default {
  name: "NewsBox",
  data: function () {
    return {
      title:
        "How We Updated 275 Knowledge Base Aricles Knowledge Base Aricles Knowledge Base Aricles  in 3 Days",
    };
  },
  components: {
    UserIcon,
    Rejected,
    // Comment,
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 398px;
  height: 302px;
  margin-bottom: 50px;
  background-image: url("https://www.w3schools.com/html/pic_trulli.jpg");
  .row {
    margin: 0px;
  }
}

.header {
  height: 84px;
  width: 100%;
  background-color: gray;
  background: transparent;
  opacity: 0.8;
  backdrop-filter: blur(47px);
  --webkit-backdrop-filter: blur(47px);
  background-color: rgba(0, 0, 0, 0.26);
}
.text-col {
  position: absolute;
  top: 15px;
  width: 100%;
  p {
    color: white;
    font-weight: bold;
    font-size: 30px;
    line-height: 24px;
    margin: auto;
    width: inherit;
  }
}
img {
  width: 100%;
  height: 100%;
}

.box-title {
  height: 102px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  background-color: black;
  background: transparent;
  opacity: 0.67;
  backdrop-filter: blur(47px);
  --webkit-backdrop-filter: blur(47px);
  background-color: rgba(0, 0, 0, 0.26);
}
h2 {
  position: absolute;
  bottom: 10px;
  font-size: 20px;
  color: white;
  text-align: start;
  margin: 15px 20px;
  // z-index: 2;
}
.info {
  height: 116px;
}
.user-icon {
  // margin-left: 14px;
  // margin-top: 20px;
  margin-top: auto;
  margin-bottom: auto;
  //   position: absolute;
}
</style>
