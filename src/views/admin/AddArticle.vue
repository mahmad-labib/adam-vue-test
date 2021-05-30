<template>
  <div>
    <button @click="$refs.getFile.click()" id="upload">
      Add Image
      <input type="file" ref="getFile" id="getFile" @change="addImage" hidden />
    </button>
    <editor
      initialValue="<p>Initial editor content</p>"
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
  </div>
</template>

<script>
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

  methods: {
    onFileChanged(event) {
      this.selectedFile.push(event.target.files[0]);
    },
    click() {
      document.getElementById("#upload").click();
    },
    async addImage(data) {
      console.log(data.target.files[0], 'addImage');
      var file = data.target.files[0];
      this.selectedFile.push(file);
      // const blobToData = (blob) => {
      //   return new Promise((resolve) => {
      //     const reader = new FileReader();
      //     reader.onloadend = () => resolve(reader.result);
      //     reader.readAsDataURL(blob);
      //   });
      // };
      // const resData = await blobToData(file);
      // console.log(resData);
      // return resData;
      // this.editor
      //   .chain()
      //   .focus()
      //   .setImage({ src: resData, title: file.name })
      //   .run();
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
  },
};
</script>

<style lang="scss"></style>
