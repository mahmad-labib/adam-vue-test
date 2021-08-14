<template>
  <div class="user-blib row">
    <div class="blib-left">
      <img
        src="https://images.unsplash.com/profile-1449177714116-d6cac59f5eab?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
        alt=""
      />
    </div>
    <div class="blib-right">
      <p class="name">
        {{
          user.name.length > 10
            ? user.name.substring(0, 10) + ".."
            : user.name
        }}
      </p>
      <p class="description">{{user.speciality}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserIcon",
  props: ["user"],
};
</script>

<style lang="scss" scoped>
.user-blib {
  color: white;
  z-index: 2;
  width: 186px;
  height: 68px;
  border-radius: 34px;
  backdrop-filter: blur(2px);
  --webkit-backdrop-filter: blur(2px);
  background-color: rgb(112, 112, 112); /* Fallback color */
  background-color: rgba(112, 112, 112, 0.4);
  .blib-left {
    padding: 0px;
    img {
      border-radius: 50%;
      width: 68px;
      height: 68px;
    }
  }
  .blib-right {
    padding: 0px;
    text-align: start;
  }
}
.name {
  margin: auto;
  margin-top: 8px;
  margin-left: 8px;
  font-size: 20px;
}
.description {
  margin-top: 0px;
  margin-left: 8px;
  margin-bottom: 0px;
}
</style>
