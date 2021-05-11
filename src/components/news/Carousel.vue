<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    
    <div class="carousel-inner">
      <UserIcon />
      <div class="carousel-item active">
        <img
          class="d-block"
          src="https://images.unsplash.com/photo-1558220829-e07d17304ad1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block"
          src="https://cdn.pixabay.com/photo/2020/05/16/16/08/dandelion-5178095_960_720.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block"
          src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80"
          alt="Third slide"
        />
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
    <div class="carousel-caption">
      <h5>Article Title</h5>
      <p>the description of the title</p>
    </div>
  </div>
</template>

<script>
import UserIcon from "../global/UserIcon";
export default {
  name: "Carousel",
  components: {
    UserIcon,
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
</style>
