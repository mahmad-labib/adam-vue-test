<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div>
      <p class="comment-title">Editors Comment:</p>
      <p class="comment-area">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odit nam
        dolor sit pariatur ipsam et. Dolores expedita repudiandae voluptas
        maiores optio, eaque placeat pariatur? Tempora animi minima provident
        in!
      </p>
    </div>
    <hr>
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
// import store from "../../store";
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "EditArticle",
  components: {
    editor: Editor,
  },
};
</script>

<style lang="scss" scoped>
.comment-title{
    text-align: left;
}
.comment-area {
  background-color: white;
  border: 1px solid #707070;
}
</style>
