<template>
  <div class="header row">
    <div class="col-md-4 my-auto"></div>
    <div class="col-md-4 my-auto">
      <router-link class="mx-auto" v-slot="{ navigate }" to="/">
        <Akhbar class="mx-auto" @click="navigate" />
      </router-link>
    </div>
    <div class="col-md-4 my-auto">
      <UserIcon class="user-icon" />
    </div>
  </div>
</template>
<script>
import UserIcon from "../global/UserIcon";
import Akhbar from "../SVG/akhbar";
export default {
  name: "Navbar",
  components: {
    UserIcon,
    Akhbar,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 108px;
  background-color: white;
  position: relative;
  box-shadow: 0px 4px 5px rgba(68, 68, 68, 0.16);
  margin: 0px;
  .user-icon {
    margin: auto;
    position: relative;
  }
}
</style>
