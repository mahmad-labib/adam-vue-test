<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <router-link
      v-for="(article, index) in articles"
      :key="index"
      :to="{ path: `/article/${article.id}` }"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="index == 0 ? 'active' : ''"
          :id="article.id"
        >
          <div class="user-icon">
            <UserIcon :user="article.creator[0]" />
          </div>
          <img
            class="d-block"
            :src="
              'http://apiproject.stg' + '/storage/' + article.images[0].path
            "
          />
          <div class="carousel-caption">
            <h3>{{ article.title }}</h3>
            <!-- <p>{{article.section}}</p> -->
          </div>
        </div>
      </div>
    </router-link>
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

export default {
  name: "Carousel",
  props: ["articles"],
  data() {
    return {
      host: location.origin,
      slide: 0,
    };
  },
  components: {
    UserIcon,
  },
  methods: {
    activeClass() {
      console.log("active", document.getElementById(this.articles[0].id));
      document.getElementById(this.articles[0].id).classList.add("active");
    },
    slideIncrease() {
      this.slide = this.slide + 1;
    },
  },
  mounted: function () {
    // this.activeClass();
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
