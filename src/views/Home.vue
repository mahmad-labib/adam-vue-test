<template>
  <div class="container home-container">
    <Carousel />
    <div class="row justify-content-around">
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/news/Carousel";
import NewsBox from "@/components/news/NewsBox";
export default {
  name: "Home",
  components: {
    Carousel,
    NewsBox,
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  max-width: 1364px;
  margin-top: 15px;
  padding: 35px 30px 30px 30px;
  background-color: #ffffff;
  .row{
    max-width: 1306px;
    margin: 0px;
    margin-top: 35px;
  }
}
</style>
