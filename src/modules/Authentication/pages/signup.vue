<template>
  <div>
    <v-container>
      <v-layout row class="padding mb-7">
        <v-flex cols="12" sm="6" md="3" lg="3" xl="3">
          <v-card
            class="mx-auto mt-5 pa-5 text-center"
            max-width="500"
            id="limited-products"
          >
            <div class="bf" align="center">
              <v-img
                src="../../../../src/assets/logo-website.png"
                max-height="600"
                max-width="700"
                aspect-ratio="1.6"
              />
            </div>

            <div class="padding-bottom padding-top">
              <div
                class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--xlarge SecondaryButton GoogleSignInButton--sparse GoogleSignInButton LoginDefaultView-ssoButton"
                role="button"
                tabindex="0"
              >
                Sign Up with Google
              </div>

              <span class="SeparatorRow LoginDefaultView-separatorRow"
                ><span class="SeparatorRow-horizontalLine"></span
                ><span
                  class="SeparatorRow-label LoginDefaultView-separatorRowLabel"
                  >or</span
                ><span class="SeparatorRow-horizontalLine"></span
              ></span>
            </div>
            <v-card-text>
              <v-container>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        label="name"
                        v-model="name"
                        type="text"
                        outlined
                        dense
                        required
                        color="#6f7782"
                        class="myfont"
                      >
                        {{ name }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        label="email"
                        v-model="email"
                        type="text"
                        outlined
                        dense
                        required
                        color="#6f7782"
                        class="myfont"
                      >
                        {{ email }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        label="password"
                        v-model="password"
                        type="text"
                        outlined
                        dense
                        required
                        color="#6f7782"
                        class="myfont"
                      >
                        {{ password }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12 class="pt-5">
                      <v-btn
                        @click="onSignUp"
                        class="button color myfont"
                        block
                        large
                      >
                        Sign Up
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
            <div class="LoginDefaultView-signUp padding-bot">
              <span class="Typography">Do you have an account?</span
              ><a
                class="LoginDefaultView-signUpButtonLink PrimaryLink BaseLink"
                href="/-/login_page_log?se=%7B%22action%22%3A%22LinkClicked%22%2C%22sub_action%22%3A%22SignUp%22%2C%22location%22%3A%22LoginPage%22%2C%22url%22%3A%22https%3A%2F%2Fasana.com%2Fcreate-account%3Futm_source%3Dasana.com%26utm_campaign%3Dapp.asana.com%22%2C%22name%22%3A%22LinkClicked%22%2C%22non_user_action_event%22%3Afalse%7D&amp;allowed=login_page&amp;dest=https%3A%2F%2Fasana.com%2Fcreate-account%3Futm_source%3Dasana.com%26utm_campaign%3Dapp.asana.com"
                >Sign in</a
              >
            </div>
            <div
              class="size padding-down textColor text-caption text-sm-body-2 LoginDefaultView-signUp"
              text-caption
            >
              <span class="LoginCardLayout-captchaNotice"
                >This site is protected by reCAPTCHA and the Google

                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  class="size SecondaryLink BaseLink"
                  href="https://policies.google.com/privacy"
                  >privacy Policy</a
                >
                <div
                  class="padding-bottom text-caption text-sm-body-2"
                  text-caption
                >
                  <span class="size">and</span>.
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    class="size SecondaryLink BaseLink"
                    href="https://policies.google.com/terms"
                    >Terms of Service </a
                  ><span class="size">apply.</span>
                </div>
              </span>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ActionsTypes from "../store/types/actions-types";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  }
,
  methods: {
    ...mapActions({
      AddNewUser: ActionsTypes.GET_USER_DATA_ACTION,
    }),
    onSignUp() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(data);
      this.AddNewUser(data)
        .then((res) => {
          console.log("User is already exist rrrrrrrrrrrrr", res);
          this.$router.push("/confirm-email");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
$mainMargine: 20px;
$mainBackgroundColor: #3949ab !important;
$mainColor: aliceblue;
$mainFont: "Mansalva", cursive;
$mainPadding: 40px;
$childColor: #6f7782;
$fontSize: 15px;
$childSize: 13px;

.button {
  background-color: $mainBackgroundColor;
  color: $mainColor !important;
  display: flex;
}

.myfont {
  font-family: $mainFont;
  color: $mainColor;
}
.margine {
  margin-left: $mainMargine;
}
.color {
  color: $mainColor;
}

.bg-color {
  color: $mainColor;
}

.textColor {
  color: red;
}

.padding {
  padding-top: $mainPadding;
}

.size {
  font-size: 4rem;
}

.paddingLeft {
  padding-left: 40px;
}

.padding-down {
  padding-top: 50px;
}
.padding-bot {
  padding-top: $mainPadding;
}
.padding-bottom {
  padding-bottom: 40px;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: 10px;
  top: 0;
  left: 0;
  background-size: cover;
  transform: scale(1);
}

a {
  color: #151b26;
  cursor: pointer;
  text-decoration: none;
}
a {
  background-color: transparent;
}

.Typography {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #6f7782;
  font-size: 15px;
  line-height: 20px;
}

/* to put sign up in the left side,make distance between two sentences */
.LoginDefaultView-signUpButtonLink {
  margin-left: 8px;
}

.LoginCardLayout-captchaNotice {
  margin-top: 48px;
  color: $childColor;
  /* text-align: center; */
  font-size: 13px;
  /* padding-bottom: 10px; */
  /* line-height: 16px; */
}
.size {
  font-size: 13px;
}
.SecondaryLink {
  cursor: pointer;
  color: $childColor;
  fill: $childColor;
  text-decoration: underline;
  text-decoration-style: solid;
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

.LoginDefaultView-separatorRowLabel {
  color: $mainColor !important;
  font-size: 16px;
}

.SeparatorRow-label {
  color: $childColor;
  margin: 0 8px;
}
/* logo Google */
.AbstractThemeableRectangularButton-leftIcon {
  margin-right: 4px;
}
.GoogleSignInButton-logo--sparse {
  display: none;
}

.GoogleSignInButton-logo {
  flex: 0 0 auto;
  height: 18px;
  width: 18px;
}

/* side Google logo */
.AbstractThemeableRectangularButton {
  align-items: center;
  border: 1px solid;
  border-radius: 6px;
  box-sizing: border-box;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.2s;
  transition-property: background, border, box-shadow, color, fill;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.AbstractThemeableRectangularButton.AbstractThemeableRectangularButton--isEnabled {
  cursor: pointer;
}

.AbstractThemeableRectangularButton.AbstractThemeableRectangularButton--xlarge {
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  padding: 0 16px;
}

.LoginDefaultView-ssoButton {
  align-self: stretch;
  margin-bottom: 32px;
}

.GoogleSignInButton--sparse {
  position: relative;
}

.LoginCardLayout-asanaLogoContainer {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
}
.PrimaryLink {
  cursor: pointer;
  color: #14aaf5;
  fill: #14aaf5;
}
a {
  text-decoration: none;
}
a {
  background-color: transparent;
}
.bf {
  transform: scale(0.5);
  padding-top: 1px;
}
</style>
