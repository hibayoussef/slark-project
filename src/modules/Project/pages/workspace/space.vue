<template>
  <v-row justify="center">
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
          Create space
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create New Space </span>
        </v-card-title>
        <v-card-text>
          <v-container>
               <v-label>
            Space name
        </v-label>
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  placeholder="Enter Space name"
                  type="text"
                ></v-text-field>
              </v-col>
             
            </v-row>
          </v-container>
        
        </v-card-text>
       
        <v-card-actions>
          
               <v-btn
                    @click="onSignIn"
                    depressed
                    elevation="2"
                    large
                    class="buttonSettings"
                    style="color:white;"
                    color="#5f48ea !important"
                    block
                  >
                    Next
                  </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
