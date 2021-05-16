<template>
  <div class="container profile-container">
    <!-- <div class="row justify-content-around"> -->
    <div class="profile-cloud row mx-auto">
      <div class="col-md-3">
        <div class="capsule">
          <img
            src="https://images.unsplash.com/profile-1449177714116-d6cac59f5eab?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt=""
          />
          <p>ruby rose</p>
          <ul class="icons-list">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#036BE4"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2DA776"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#5DA9DD"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9 cloud-right">
        <div class="container">
          <p>
            <b>specialities :</b> nutritionist, Medical genetics, Emergency
            medicine
          </p>
          <p><b>articles :</b> 15</p>
          <p><b>sections :</b> nutrition, food, women health</p>
          <p class="summary-title"><b>summary</b></p>
          <p class="summary">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain encounter consequences
            that are extremely painful.
          </p>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <div class="row articles">
      <div class="row mx-auto search-row">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Serach"
            aria-label="Serach"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary search-btn"
            type="button"
            id="button-addon2"
          >
            Serach
          </button>
        </div>
        <div class="dropdown mx-auto">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
      <NewsBox />
    </div>
    <div class="row justify-content-center">
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
import NewsBox from "@/components/news/NewsBox";
export default {
  name: "AuthorProfile",
  components: {
    NewsBox,
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  background-color: white;
  max-width: 1364px;
  margin-top: 15px;
  padding-top: 32px;
}
.profile-cloud {
  background-color: #c1c1c1;
  max-width: 1080px;
  min-height: 430px;
  border-radius: 40px;
  margin-bottom: 23px;
}
.capsule {
  margin: auto;
  margin-top: 20px;
  width: 172px;
  min-height: 380px;
  max-height: 100%;
  background-color: #d6d6d6;
  border-radius: 40px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  img {
    border-radius: 50%;
    width: 101px;
    height: 101px;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  .bi-twitter {
    margin-bottom: 25px;
  }
}
.icons-list {
  list-style: none;
  padding: 0px;
  svg {
    width: 34px;
    height: 34px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}
.cloud-right {
  margin-top: 25px;
  text-align: start;
  .summary-title {
    text-align: center;
  }
}
.articles {
  margin-top: 46px;
}
.search-row {
  .search-btn {
    border-color: #c1c1c1;
  }
  .dropdown {
    .btn {
      background-color: white;
      color: #707070;
      border-radius: 0px;
      border-color: #c1c1c1;
    }
  }
  .search-input {
    border-radius: 4px;
  }
  margin-bottom: 12px;
}
.pagination {
  .page-link {
    color: #6c757d;
  }
}
</style>
