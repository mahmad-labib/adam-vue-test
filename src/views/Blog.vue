<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts />
          </div>
        </div>
        <div class="col-md-4">
          <blog-sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/blog/BlogPosts";
import BlogSidebar from "../components/blog/BlogSidebar.vue";
export default {
  name: "blog",
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "this is Blog page",
    };
  },
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>

<style scoped>
our-blog {
  background-color: white;
}
</style>
