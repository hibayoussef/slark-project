<template>
  <v-container class="mt-10">
    <v-layout row class="padding mb-9 ">
      <v-flex cols="12" sm="6" md="3" lg="3" xl="3">
        <v-card
          class="mx-auto mt-5 pa-5 text-center secondary"
          max-width="1000"
          max-height="2000"
          id="limited-products"
        >
          <v-btn
            class="ma-2 mt-10 ml-10 mr-10 icon-size"
            outlined
            fab
            color="blue"
            large
          >
            <v-icon large class="icon-size" color="blue darken-2">
              mdi-email
            </v-icon>
          </v-btn>

          <v-layout row class="pt-10">
            <v-flex xs12>
              <div class="text-center phase-style">
                Verify Your email address
              </div>
            </v-flex>
          </v-layout>

          <span
            class="SeparatorRow LoginDefaultView-separatorRow pt-6 ml-15 mr-15"
            ><span class="SeparatorRow-horizontalLine"></span
            ><span class="SeparatorRow-horizontalLine"></span
          ></span>

          <v-layout row class="p-long-style pt-6 ml-15 mr-15">
            <v-flex xs12>
              <div>
                We sent you an email to verify the email. Please check the email
                to activate your account.

                <div class="mt-10 p-size">
                  If you do not receive any message on your email, press the
                  button to resend the message again.
                </div>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 class="pt-8 pb-8  ml-15 mr-15">
              <v-btn
                @click="onConfirmEmail"
                class="blue darken-2 color myfont font-weight-bold "
                align="center"
                justify="center"
                block
                large
              >
                Resend Activation Link
              </v-btn>
            </v-flex>
          </v-layout>

          <span class="SeparatorRow LoginDefaultView-separatorRow pt-6">
            <span class="SeparatorRow-horizontalLine1"></span
          ></span>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapActions, mapGetters } from "vuex";
import GettersTypes from "../store/types/getters-types";
import ActionsTypes from "../store/types/actions-types"

export default {
  computed: {
    ...mapGetters({
      emailGetter: GettersTypes.GET_USER_EMAIL_GETTERS,
    }),
  },
  methods: {
    ...mapActions({
      confirmEmail: ActionsTypes.GET_REACTIVATION_EMAIL_ACTION
    }),
     onConfirmEmail(){

      this.confirmEmail()
        .then((res) => {
          console.log("This is the result to Verify Email:" ,res);
            
        })
        .catch((error) => {
          console.log(error);
        });

        }

  },
};
</script>
<style scoped>
.button {
  background: #b92c28 !important;
  color: aliceblue !important;
  display: flex;
}

.myfont {
  font-family: "Mansalva", cursive;
  color: #e8ecee;
}

.color {
  color: #fafafa;
}

.padding {
  padding-top: 30px;
}

.icon-size {
  font-size: 40px;
}

.phase-style {
  font-size: 28px;
}

.p-long-style {
  font-size: 19px;
}

.p-size {
  font-size: 14px;
}
.SeparatorRow {
  align-items: center;
  display: flex;
  text-align: center;
}

.SeparatorRow-horizontalLine {
  border-top: 1px solid #e8ecee;
  flex: 1 1 auto;
  margin-top: 8px;
  min-width: 1px;
  padding-top: 8px;
}

.SeparatorRow-horizontalLine1 {
  border-top: 1px solid #e8ecee;
  flex: 0.1 0.1 auto;
  margin-top: 8px;
  min-width: 0.5px;
  padding-top: 8px;
}

.LoginDefaultView-separatorRowLabel {
  color: #cbd4db !important;
  font-size: 16px;
}
</style>

