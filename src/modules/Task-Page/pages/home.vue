<template>
  <v-app>
    <v-layout>
      <v-flex>
        <v-container>
            <v-layout><v-flex>
          <v-card
            class="mx-auto mt-5 pa-5 text-center"
            style="box-shadow: -7px -7px 20px #33691E; box-shadow: 7px 7px 20px #33691E;"
            :width="200"
            :height="200"
            id="limited-products"
            shaped >
            <v-list-item >
              <v-list-item-content>
                <v-row justify="space-around" class="pt-11" >
                  <v-avatar color="#33691E" size="70">
                    <span class="white--text">
                      <v-btn icon router to="/add-project">
                      <v-icon large color="white">
                        mdi-plus
                      </v-icon>
                      </v-btn>
                     
                    </span>
                  </v-avatar>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>
            
             
          </v-flex></v-layout>

          <v-layout >
            <v-flex>
              <v-row justify="center" bold class="pt-8 font-weight-bold" style="color: #33691E ; font-size:1.4rem; font-family:Mansalva, cursive;">
                New Project
              </v-row>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<style scoped>

</style>
