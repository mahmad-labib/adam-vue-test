<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "about",
  data: function () {
    return {
      pageName: "About Us",
      pageDescription: "this is about us page",
    };
  },
  components: {},
};
</script>
