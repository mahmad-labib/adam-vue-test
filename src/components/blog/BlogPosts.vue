<template>
  <div class="post-box">
    <h3 class="post-title">Blog Post Title</h3>
    <span class="post-date">2020</span>
    <p class="post-content">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
      pariatur quaerat. Velit ipsam suscipit illo tempora. Corrupti quod porro
      minus ut fugit? Obcaecati, ut numquam. Tempora, voluptate illo! Nemo,
      impedit!
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author"> author </span>
      </div>
      <div class="col-sm-6">
        <span class="post-category"> category </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
};
</script>

<style scoped>
.post-box {
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 10 #ddd;
  position: relative;
  text-align: left;
}
</style>
