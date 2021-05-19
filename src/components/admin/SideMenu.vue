<template>
  <div class="side-menu">
    <div class="row menu-btn">
      <p class="my-auto">Home</p>
    </div>
    <div class="row menu-btn">
      <p class="my-auto">Add Articles</p>
    </div>
    <div class="row menu-btn">
      <p class="my-auto">My Pending Articles</p>
    </div>
    <div class="row menu-btn">
      <p class="my-auto">Users Pending Articles</p>
    </div>
    <div class="row menu-btn">
      <p class="my-auto">Users</p>
    </div>
    <div class="row menu-btn">
      <p class="my-auto">Roles & permissions</p>
    </div>
    <div class="row menu-btn">
      <p class="my-auto">Sections</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideMenu",
};
</script>

<style lang="scss" scoped>
.side-menu {
  height: 100vh;
  background-color: #f4f4f4;
  .menu-btn {
    margin: auto;
    padding-left: 25px;
    width: 95%;
    height: 56px;
    background-color: #707070;
    color: white;
    text-align: center;
    text-justify: auto;
    border-radius: 15px;
    font-size: 18px;
    margin-bottom: 6px;
    margin-top: 6px;
  }
}
</style>
