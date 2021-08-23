<template>
  <div>
    <div>
      {{ message }}
    </div>
    <!-- <div>
      <h5>Add Cover Image</h5>

      <input
        type="file"
        ref="coverInput"
        id="coverInput"
        @change="addCoverImage"
      />
    </div> -->
    <div class="row">
      <div class="col-sm-4">Choose Section</div>
      <div class="col-sm-8">
        <treeselect
          v-model="sectionsValue"
          :multiple="false"
          :options="sectionsOptions"
        />
      </div>
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        v-model="title"
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
// import axios from "axios";
import Treeselect from "vue3-treeselect";
// import the styles
import "vue3-treeselect/dist/vue3-treeselect.css";
import Editor from "@tinymce/tinymce-vue";
import { mapState } from "vuex";

export default {
  name: "AddArticle",
  components: {
    editor: Editor,
    Treeselect,
  },
  data() {
    return {
      selectedFile: [],
      sectionsValue: null,
      // define options
      sectionsOptions: [],
      userSections: [],
      //
      title: "",
    };
  },
  computed: {
    message: function () {
      return this.$store.state.message;
    },
    ...mapState(["user"]),
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
      var title = this.title;
      // let images = [];
      for (var i = 0; i < this.selectedFile.length; i++) {
        let file = this.selectedFile[i];
        formData.append("images[]", file);
      }
      formData.append("content", p.innerHTML);
      formData.append("section_id", 1);
      formData.append("title", title);

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
    getSections(sections) {
      sections.forEach((element) => {
        var children =
          element.children != null ? this.editChildren(element) : [];
        if (children.length > 0) {
          this.sectionsOptions.push({
            id: element.id,
            label: element.name,
            children: children,
          });
        } else {
          this.sectionsOptions.push({
            id: element.id,
            label: element.name,
          });
        }
      });
    },
    editChildren(data) {
      var children = [];
      data.children.forEach((element) => {
        var elChildren =
          element.children != null ? this.editChildren(element) : [];
        if (elChildren.length > 0) {
          children.push({
            id: element.id,
            label: element.name,
            children: elChildren,
          });
        } else {
          children.push({
            id: element.id,
            label: element.name,
          });
        }
      });
      return children;
    },
    refreshUser(id) {
      store.dispatch("getUser", {
        id,
      });
    },
  },
  mounted: function () {
    // this.userSections = this.user;
    this.refreshUser(this.user.id);
    this.getSections(this.user.sections);
  },
  unmounted() {
    console.log("Component has been destroyed!");
  },
};
</script>

<style lang="scss"></style>
