<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div>
      <p class="comment-title">Editors Comment:</p>
      <p class="comment-area">
        {{ article.comment }}
      </p>
    </div>
    <hr />
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        v-model="article.title"
      />
    </div>
    <button @click="$refs.getFile.click()" id="upload" hidden>
      Add Image
      <input type="file" ref="getFile" id="getFile" @change="addImage" hidden />
    </button>
    <editor
      initialValue="<p>Initial editor content</p>"
      output-format="html"
      v-model="content"
      :init="{
        file_picker_types: 'file image media',
        file_picker_callback: function (callback, value, meta) {
          handlerFunction(callback, value, meta);
        },
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image imagetools charmap',
          'searchreplace visualblocks code fullscreen',
          'print preview anchor insertdatetime media',
          'paste code help wordcount table',
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent image | help ',
      }"
    >
    </editor>
    <button @click="submitArticle(content)">Submit Article</button>
  </div>
</template>
<script>
import store from "../../store";
import Editor from "@tinymce/tinymce-vue";
import { mapState } from "vuex";
export default {
  name: "EditArticle",
  data() {
    return {
      selectedFile: [],
      content: {},
      article: {},
    };
  },
  components: {
    editor: Editor,
  },
  methods: {
    getArticle() {
      this.content = this.current_article.content;
      this.article = this.current_article;
    },
    onFileChanged(event) {
      this.selectedFile.push(event.target.files[0]);
    },
    click() {
      document.getElementById("#upload").click();
    },
    async addImage(data) {
      // console.log(data.target.files[0], "addImage");
      var file = data.target.files[0];
      this.selectedFile.push(file);
    },
    handlerFunction(callback, value, meta) {
      if (meta.filetype == "image") {
        var input = document.getElementById("getFile");
        input.click();
        input.onchange = function () {
          var file = input.files[0];
          var reader = new FileReader();
          reader.onload = function (e) {
            callback(e.target.result, {
              alt: file.name,
            });
          };
          reader.readAsDataURL(file);
        };
      }
    },
    submitArticle(article) {
      var Article = this.changeImgSrc(article);
      var p = document.createElement("p");
      p.innerHTML = Article;
      var formData = new FormData();

      // let images = [];
      for (var i = 0; i < this.selectedFile.length; i++) {
        let file = this.selectedFile[i];
        formData.append("images[]", file);
      }
      formData.append("content", p.innerHTML);
      formData.append("section_id", 1);
      formData.append("title", this.article.title);
      formData.append("id", this.article.id);
      var id = this.article.id
      return store.dispatch("editPendingArticle", {
        formData,
        id
      });
    },
    changeImgSrc(article) {
      var div = document.createElement("div");
      div.innerHTML = article;
      var images = div.querySelectorAll("img");
      images.forEach((image) => {
        var name = image.getAttribute("alt");
        image.setAttribute("src", name);
      });
      return div.innerHTML;
    },
  },
  computed: mapState(["current_article"]),
  mounted: function () {
    this.getArticle();
  },
};
</script>

<style lang="scss" scoped>
.comment-title {
  text-align: left;
}
.comment-area {
  background-color: white;
  border: 1px solid #707070;
}
</style>
