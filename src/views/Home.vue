<template>
  <div class="container home-container">
    <Carousel
      :items-to-show="2.5"
      :settings="settings"
      :breakpoints="breakpoints"
    >
      <Slide v-for="article in news.slice(0, 10)" :key="article.id">
        <div
          class="carousel__item"
          style="padding: 10px; height: 427px; width: 100%"
        >
          <router-link :to="{ path: `/article/${article.id}` }">
            <div>
              <img
                class="carousel-cover"
                :src="
                  'http://apiproject.stg' + '/storage/' + article.images[0].path
                "
              />
              <div style="z-index: 2;">
                hdsglkjf;jfjf;jf;jf;jf;jf;jf;jf;jf;jf;jf;jf;jf;jf;jf
              </div>
            </div>
            <!-- <NewsBox
              :article="article"
              :user="article.creator[0]"
              style=" margin-bottom: 0px, width:100%"
            /> -->
          </router-link>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
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
// import Carousel from "@/components/news/Carousel";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import NewsBox from "@/components/news/NewsBox";
import { mapState } from "vuex";
import store from "../store";

import "vue3-carousel/dist/carousel.css";

export default {
  name: "Home",
  components: {
    // Carousel,
    NewsBox,
    Carousel,
    Slide,
    Navigation,
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
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1);
}
// .carousel__slide {
//   width: 25.3165%;
// }
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
