<template>
  <div>
    <div class="container">
      <div class="input-group mb-3">
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="Search"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
    <div class="row">
      <box class="box" />
      <box class="box" />
      <box class="box" />
      <box class="box" />
    </div>
    <div class="my-page row justify-content-center">
      <nav aria-label="Page navigation pagination-wrapper">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Box from "../../components/admin/PendingArticleBox";
export default {
  name: "MyPendingArticle",
  components: {
    Box,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background-color: white;
  color: #707070;
  border-radius: 0px;
  border-color: #c1c1c1;
}
.box {
  margin: auto;
  margin-top: 15px;
}
.my-page{
  margin-top:15px;
}
.pagination {
  .page-link {
    color: #6c757d;
  }
}
</style>
