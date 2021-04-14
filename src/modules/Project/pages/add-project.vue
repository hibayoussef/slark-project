<template>
  <v-app>
    <div class="mainPage">
      <!-- right section -->
      <div class="split left">
        <div class="left_body_content">
          <div class="left-body-content_logo">
            <img class="logo" src="../../../../src/assets/logo_base.png" />
          </div>

          <div class="left-body-content_illustrationImage">
            <v-img src="../../../../src/assets/create.svg"></v-img>
          </div>
        </div>
      </div>

      <div class="split-1 right">
        <div class="right_body_content">
          <div class="right_body_content_text">
            <div class="text">
              Create project
            </div>
          </div>

          <div class="right_body_content_field">
            <v-text-field
              label="Project Name"
              v-model="project_Name"
              type="text"
              color="#5f48ea "
              class="field"
              >{{ project_Name }}
            </v-text-field>
          </div>

          <div class="right_body_content_button">
            <v-btn
              @click="onAddProject"
              depressed
              elevation="2"
              x-large
              class="button"
              color="#5f48ea"
              block
            >
              Create
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>


<script>
import { mapActions } from "vuex";
import ActionsTypes from "../store/types/actions-types";

export default {
  data() {
    return {
      project_Name: ""
    };
  },
  methods: {
    ...mapActions({
      AddprojectAction: ActionsTypes.POST_PROJECT_DATA_ACTION,
    }),
    onAddProject() {
      this.AddprojectAction({
        project_Name: this.project_Name,
      });
      console.log(this.AddprojectAction, this.project_Name);
    },
  },
};
</script>


<style scoped>

.mainPage {
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}

.split {
  height: 100%;
  width: 66%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}

.left_body_content {
  display: flex;
  width: 100%;
}

.left {
  left: 0;
  background-color: #fff;
}

.left-body-content_logo {
  display: flex;
  width: 18%;
  padding-left: 2rem;
}

.logo {
  display: flex;
  width: 100%;
  z-index: -1;
}

.left-body-content_illustrationImage {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  z-index: -1;
  width: 85%;
  height: 100%;
  position: absolute;
  padding-top: 7rem;
  padding-left: 5rem;
}

.split-1 {
  height: 100%;
  width: 34%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 2rem;
   -webkit-box-shadow: -3px 1px 15px #ccc;  
  -moz-box-shadow:    -3px 0px 15px #ccc;  
  box-shadow:         -3px 0px 15px #ccc; 
}

.right_body_content {
  display: flex;
  width: 100%;
  height: 100%;
}

.right_body_content_text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 90%;
  height: 50%;
  padding-left: 4rem;
  font-family: 'Cinzel', serif;
}

.text {
  display: flex;
  color: #5f48ea;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Cinzel', serif;
}


.right_body_content_button{
display: flex;
justify-content: center;
  align-items: center;
  position: fixed;
  width: 25%;
  height: 100%;
  padding-left: 4rem;
}

.button{
    display: flex;
    text-align: center;
    text-transform: lowercase;
    font-family: "Fauna One", serif;
    font-size: 1.2rem;
}
.right {
  right: 0;
  background-color: #fff;
}

</style>
