<template>
  <div class="wrapper container-full">
    <div class="row justify-content-center title">My Pending Articles</div>
    <div class="row justify-content-around">
      <box />
      <box />
      <box />
    </div>
  </div>
</template>
<script>
import Box from "../../components/admin/MyArticleBox.vue";
export default {
  name: "MyPendingArticles",
  components: {
    Box,
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
