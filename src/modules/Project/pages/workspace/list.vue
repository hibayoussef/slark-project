<template>
  <v-row justify="center"  class="pt-10">
      <div class="pt-15">
          this space is empty. Create a List to get started///////with Picture
      </div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          + Create List
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create List</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
             
             
              <v-col cols="12">
                
             <label for="listName">List Name</label>
 
                <v-text-field
v-model="list_Name"
            outlined
            dense
            type="text"  name="listName" placeholder="List"
          >{{ list_Name }}</v-text-field>

        

          
              </v-col>
                      
             
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
           Cancel
          </v-btn>

          <v-btn
            color="blue darken-1"
            text
            @click="onCreateList() ;dialog = false"
          >
            Create List
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
import ActionsTypes from '../../store/types/actions-types'

  export default {
    data: () => ({
      dialog: false,
      list_Name: " "
    }),
    methods:{
        ...mapActions({
            add_List_Action: ActionsTypes.POST_LIST_DATA_ACTION
        }),
    onCreateList(){
        this.add_List_Action({
            list_Name: this.list_Name
        }),
        console.log("list_Name", this.list_Name)
    }
    }

  }
</script>