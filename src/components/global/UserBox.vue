<template>
  <div class="user-data-box">
    {{ userData }}
    <div class="container-full">
      <div class="row justify-content-center">
        <img
          src="https://images.unsplash.com/profile-1449177714116-d6cac59f5eab?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          alt=""
        />
      </div>
      <div class="row justify-content-center">
        <button class="upload-btn">uplaod</button>
      </div>
      <div class="form-group row">
        <label for="Name" class="col-sm-4 col-form-label">Name:</label>
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="Name"
            placeholder="Name"
            v-model="user.name"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="Email" class="col-sm-4 col-form-label">Email:</label>
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="email"
            class="form-control"
            id="Email"
            placeholder="Email"
            v-model="user.email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="facebook" class="col-sm-4 col-form-label"
          >facebook link:</label
        >
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="facebook"
            placeholder="facebook"
            v-model="user.fb_link"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="twitter" class="col-sm-4 col-form-label"
          >twitter link:</label
        >
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="twitter"
            placeholder="twitter"
            v-model="user.twitter_link"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="speciality" class="col-sm-4 col-form-label"
          >speciality :</label
        >
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="speciality"
            placeholder="speciality"
            v-model="user.speciality"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="summary" class="col-sm-4 col-form-label">summary :</label>
        <div class="col-sm-8">
          <textarea
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="summary"
            placeholder="summary"
            v-model="user.summary"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="old-password" class="col-sm-4 col-form-label"
          >old password :</label
        >
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="old-password"
            placeholder="old-password"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="new-password" class="col-sm-4 col-form-label"
          >new password :</label
        >
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="new-password"
            placeholder="new-password"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="retype-password" class="col-sm-4 col-form-label"
          >retype password :</label
        >
        <div class="col-sm-8">
          <input
            :readonly="edit === false"
            type="text"
            class="form-control"
            id="retype-password"
            placeholder="retype-password"
          />
        </div>
      </div>
    </div>
    <div @click="editState()" class="row form-button mx-auto">
      <div class="col-md-12 my-auto" v-if="edit">Submit</div>
      <div class="col-md-12 my-auto" v-else>Edit</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBox",
  props: ["user"],
  data: () => {
    return {
      edit: false,
      userData: this.user,
    };
  },
};
</script>
