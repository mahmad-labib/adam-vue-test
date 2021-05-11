<template>
  <div class="box">
    <div class="user-icon">
      <UserIcon />
    </div>
    <img src="../../assets/valo.jpg" alt="" />
    <div class="box-title">
      <!-- <div>Welcome, {{ username.substring(0, 8) + ".." }}</div> -->
      <p>{{title.length > 60 ? title.substring(0, 60) + "..." : title}}</p>
    </div>
  </div>
</template>

<script>
import UserIcon from "../global/UserIcon";
export default {
  name: "NewsBox",
  data: function () {
    return {
      title: "How We Updated 275 Knowledge Base Aricles Knowledge Base Aricles Knowledge Base Aricles  in 3 Days",
    };
  },
  components: {
    UserIcon,
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 398px;
  height: 302px;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
  }
}
.box-title {
  position: absolute;
  bottom: 0px;
  height: 102px;
  width: 100%;
  backdrop-filter: blur(2px);
  --webkit-backdrop-filter: blur(2px);
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  p {
    font-size: 20px;
    color: white;
    text-align: start;
    margin: 15px 20px;
  }
}
</style>
