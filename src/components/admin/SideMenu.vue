<template>
  <div class="side-menu">
    <menu-btn to="/admin" name="Home" />
    <menu-btn to="/admin/addArticle" name="AddArticle" />
    <menu-btn to="/admin/myPendingArticles" name="My Pending Articles" />
    <menu-btn to="/admin/usersPendingArticle" name="Users Pending Articles" />
    <menu-btn to="/admin/addArticle" name="Users" />
    <menu-btn to="/admin/addArticle" name="Roles & permissions" />
    <menu-btn to="/admin/addArticle" name="Sections" />
  </div>
</template>
<script>
import MenuBtn from "./MenuBtn";
export default {
  name: "sideMenu",
  components: {
    MenuBtn,
  },
};
</script>

<style lang="scss" scoped>
.side-menu {
  a {
    text-decoration: none;
  }
  background-color: #f4f4f4;
}
</style>
