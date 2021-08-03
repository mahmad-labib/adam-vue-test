<template>
  <div>
    <h1>New Section</h1>
    <label class="text-danger">{{result}}</label>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="text" v-model="name" />
      </div>
    </div>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Parent</label>
      <div class="col-sm-10">
        <treeselect
          v-model="sectionsValue"
          :multiple="false"
          :options="sectionsOptions"
        />
      </div>
    </div>
    <button
      @click="submitSection($event)"
      class="btn btn-primary"
      type="submit"
    >
      Submit
    </button>
  </div>
</template>

<script>
import Treeselect from "vue3-treeselect";
// import the styles
import "vue3-treeselect/dist/vue3-treeselect.css";
import axios from "axios";
// import store from "../../store";
export default {
  name: "Sections",
  components: {
    Treeselect,
  },
  data() {
    return {
      name: "",
      sectionsValue: null,
      // define options
      sectionsOptions: [],
      result: ''
    };
  },
  methods: {
    getSections() {
      axios.get("api/v1/admin/sections").then((result) => {
        result.data.sections.forEach((element) => {
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
    submitSection(event) {
      event.preventDefault();
      this.result = ''
      var request = {};
      request.name = this.name;
      request.parent_id = this.sectionsValue;
      axios.post("api/v1/admin/sections", request).then((result)=>{
          this.result = result.data.msg;
          console.log(result.data.msg);
          
      })
    },
  },
  mounted: function () {
    this.getSections();
  },
};
</script>
