<template>
  <v-app>
    <div class="mainPage">
      <!-- right section -->
      <div class="split left">
          <h1>
            Name your workspace:
          </h1>
           <v-text-field
                         label="workspace Name"
                    v-model="workspace_Name"
                    type="text"
                    color="#D53C3C"
                      >
                      
                        {{ workspace_Name }}
                      </v-text-field>

                  <v-btn
                    @click="onAddWorkspace"
                    elevation="7"
                    x-large
                    class="cardButton"
                    color="#5f48ea !important"
                  >
                  Next
                  </v-btn>
                     <v-btn
                    @click="onCancel"
                    elevation="7"
                    x-large
                    class="cardButton"
                    color="#5f48ea !important"
                  >
                  Cancel
                  </v-btn>

      </div>

      <div class="split-1 right">
        <div class="right_body_content"></div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import ActionsTypes from '../../store/types/actions-types'

export default {
    data(){
        return {
            workspace_Name: " "
        }
    },
    methods:{
        ...mapActions({ 
            add_Workspace_action: ActionsTypes.POST_WORKSPACE_DATA_ACTION
        }),
          onAddWorkspace(){
      this.add_Workspace_action({
        workspace_Name: this.workspace_Name
      })
      console.log(this.workspace_Name);
    },
    onCancel(){
      this.$router.push('/signin')
    }
    }
  
}
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


.split-1 {
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 2rem;
}

.right_body_content {
  display: flex;
  width: 100%;
  height: 100%;
}

.right {
  right: 0;
  background-color: #5b43ea;
}
</style>
