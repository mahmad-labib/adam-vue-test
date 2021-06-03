<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
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

export default {
  name: "AddArticle",
  components: {
    editor: Editor,
  },
  data() {
    return {
      selectedFile: [],
    };
  },
  computed: {
    message: function () {
      return this.$store.state.message;
    },
  },
  methods: {
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
      formData.append("title", "vue article");

      // var doc = p.innerHTML;
      return store.dispatch("PublishArticle", {
        formData,
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
};
</script>

<style lang="scss"></style>
