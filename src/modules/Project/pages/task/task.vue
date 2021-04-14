<template>
  <div>
    <v-row justify="center">
      <v-btn color="primary" class="ma-2" dark @click="dialog2 = true">
        Open Dialog 2
      </v-btn>

      <v-dialog v-model="dialog2" max-width="50rem">
        <v-card>
          <!-- first line -->
          <v-card-title>
            <v-toolbar flat>
              <v-btn icon flat>
                <v-icon>
                  mdi-stop
                </v-icon>
              </v-btn>

              <v-text-field
                style="padding-top:2rem;"
                flat
                solo
                placeholder="Task name or Type '/' for commands"
                v-model="task_name"
                >{{ task_name }}</v-text-field
              >

              <v-spacer></v-spacer>
              <v-btn color="purple darken-3" small icon>
                <v-icon>
                  mdi-close
                </v-icon>
              </v-btn>
            </v-toolbar>
          </v-card-title>
          <!-- end first line -->
          <!-- textarea -->
          <v-card-title style="padding-left:2rem; padding-right:2rem;">
            <v-textarea
              outlined
              color="#BDBDBD"
              auto-grow
              placeholder="Description or type '/' for commands"
              v-model="textarea_descripe"
              >{{ textarea_descripe }}</v-textarea
            >
          </v-card-title>
          <!-- end textarea -->
          <!-- attachement -->
          <v-card-title>
            <h5>Attatchements</h5>
          </v-card-title>
          <v-card-title>
            <template>
              <v-file-input
              v-on:click="submitFile()"
                truncate-length="9"
                type="file"
                flat
                solo
                multiple
                placeholder="Drag or Drop files to attach or Browse"
              ></v-file-input>
            </template>
          </v-card-title>
          <!-- end attachement -->
          <v-card-actions>
            <v-btn color="primary" text @click="dialog2 = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog3 = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      
    },
  },
};
</script>
