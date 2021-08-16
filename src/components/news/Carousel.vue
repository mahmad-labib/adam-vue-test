<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <!-- <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol> -->

    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="article in articles"
        :key="article.id"
        :id="article.id"
      >
        <div class="user-icon">
          <UserIcon :user="article.creator[0]" />
        </div>
        <img
          class="d-block"
          v-for="image in article.images"
          :key="image.path"
          :src="'http://apiproject.stg' + '/storage/' + image.path"
        />
        <div class="carousel-caption">
          <h3>{{ article.title }}</h3>
          <!-- <p>{{article.section}}</p> -->
        </div>
      </div>
    </div>
    <a
      class="carousel-control carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import UserIcon from "../global/UserIcon";
// import { mapState } from "vuex";
export default {
  name: "Carousel",
  props: ["articles"],
  data() {
    return {
      host: location.origin,
    };
  },
  components: {
    UserIcon,
  },
  methods: {
    activeClass(articles) {
      console.log("active", articles);
      document.getElementById(this.articles[0].id).classList.add("active");
    },
  },
  // watch: {
  //   news: function () {
  //     return this.activeClass(this.articles);
  //   },
  // },
  mounted: function () {
    this.activeClass();
    // ...mapState(["news"]),
  },
};
</script>

<style scoped lang="scss">
.carousel {
  height: 400px;
  box-shadow: 15px 15px 6px rgba(0, 0, 0, 0.16);
  .d-block {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .carousel-caption {
    right: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 102px;
    backdrop-filter: blur(2px);
    --webkit-backdrop-filter: blur(2px);
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  }
}
.carousel-indicators {
  margin-bottom: 0px;
}

.blib-right {
  align-self: center;
  padding: 0px;
  margin: 0px;
  text-align: center;
  word-wrap: break-word;
  .name {
    font-size: 20px;
    margin: 8px 0px 0px 0px;
  }
  .description {
    font-size: 15px;
  }
}
.blib-left {
  padding: 0px;
}
.user-icon {
  .row {
    margin: 0px;
  }
  margin-left: 11px;
  margin-top: 11px;
  position: absolute;
  z-index: 1;
}
</style>
