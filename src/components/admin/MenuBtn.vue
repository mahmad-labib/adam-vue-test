<template>
  <router-link
    v-slot="{ navigate, isActive, isExactActive }"
    :to="{ path: to }"
  >
    <div
      :class="[
        isActive && 'router-link-active',
        isExactActive && 'router-link-exact-active',
      ]"
      @click="navigate"
      class="row menu-btn"
    >
      <p class="my-auto">{{ name }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MenuBtn",
  props: ["to", "name"],
};
</script>

<style lang="scss" scoped>
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
  margin-bottom: 12px;
}
.router-link-exact-active .router-link-active {
  background-color: #ced4da;
  color: black;
}
</style>
