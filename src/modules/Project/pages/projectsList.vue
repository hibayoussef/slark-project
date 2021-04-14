<template>
  <v-app>
     <div style="text-align: center;">
           <TheNavigation />
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path" />
        </transition>
 </div>

    <v-container class="container">
      <v-sheet color="white" elevation="24" height="13rem" shaped width="13rem" class="mt-5">
        <v-row justify="center" style="padding-top:4.5rem;">
          <v-avatar color="red"  size="59" style="">
            <span class="white--text">
              <v-icon @click="onCreateProject" color="white"  large> mdi-plus</v-icon></span
            >
          </v-avatar>
        </v-row>
      </v-sheet>
      <div  class="textSettings font-weight-bold"
      >New Project</div>
    </v-container>
  </v-app>
</template>

<script>
import {  mapGetters } from 'vuex'
import TheNavigation from '../../../components/shared/navbar.vue';

import GettersTypes from '../store/types/getters-types'

export default {
   components: {
    TheNavigation
  },
    computed:{
        ...mapGetters({
            getProjectsListGetters : GettersTypes.GET_DATA_PROJECT_GETTERS
        })
    },
    methods:{
        onCreateProject(){
            this.$router.push("/add-project");
        }
    }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #f4f3f4;
}

.textSettings{
padding-top: 1.5rem;
padding-left: 2.1rem;
font-size: 1.5rem;
color: #D53C3C  ;
}
</style>
