<template>
  <v-app>
    <v-layout row>
      <v-flex>
        <div class="page">
      <div class="headerSettings">
          <v-img>
             <img
                  class="logoSett"
                  src="../../../../src/assets/logo_base.png"
                  style="transform: scale(1.6);"
                />
          </v-img>

        <div class="signip_page_header_right">
          <div class="login_page_right_text">
            Don't have an account?
          </div>
          <div class="login_page_right_button">
              <v-btn color="white" 
              style=" color: #7b68ee !important;" 
              x-large
              class="font-weight-bold"

              >
                sign up 
              </v-btn>
          </div>
        </div>
      </div> 
      <div class="formSettings">
        
      <v-container class="container "> 
      <v-card
            class="mx-auto mt-5 pa-5 text-center cardSettings rounded-lg"
            id="limited-products"
          >
            <v-card-text>
              <v-container class="cardCont$ainer">
                <form>
                  <v-layout>
                    <v-flex>
                      <v-card-text>
                        <h1 class="h1Settings">Welcome back!</h1>
                        </v-card-text>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        label="email"
                        v-model="email"
                        type="text"
                        outlined
                        required
                         persistent-hint
                        color="#6f7782"
                        class="myfont"
                        prepend-inner-icon= "drafts"
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
                        required
                        persistent-hint
                        outlined
                        color="#6f7782"
                        class="myfont"
                        prepend-inner-icon="lock"
                      >
                      
                        {{ password }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>


                  <v-layout row>
                    <v-flex xs12 class="pt-5">
                                       <v-btn
                    @click="onSignIn"
                    depressed
                    elevation="2"
                    large
                    class="buttonSettings"
                    color="#5f48ea !important"
                    block
                  >
                    log in
                  </v-btn>

                    </v-flex>
                  </v-layout>

                  <v-layout style="padding-top:2rem;">
                    <v-flex>
                      <span  router to="/"></span>
                      <p><b><a
                      > or login with sso</a></b></p>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
                </v-card>   
                <div class="underCardSettings">
  LET'S MAKE THE WORLD MORE PRODUCTIVE, TOGETHER.
</div>             
        </v-container>

      </div>
      </div>  

      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import ActionsTypes from "../store/types/actions-types";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      LoginUser: ActionsTypes.POST_USER_DATA_ACTION,
    }),
    onSignIn() {
      console.log("Signing in .....");
      this.LoginUser({
        email: this.email,
        password: this.password,
      })
        .then((res) => {
          console.log("Login succeeded");
          this.$router.push("/home");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.logoSett{
  padding-left: 2.3rem;

}

.headerSettings{
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 30px;
  flex-shrink: 0;
      position: relative;
    top: auto;
    padding-top: 1rem;

}

.signip_page_header_right{
display: flex;
align-items: center;
margin-left: auto;
}

.login_page_right_text{
  font-size: 1.6rem;
  padding: 0 3rem;
  color: #292d34;
}

.login_page_right_button{
  text-align: center;
  padding-right: 5rem;
  transform: scale(1.2 , 1.2);
  color: #7b68ee !important;
}
.container {
  width: 60%;
  height: auto;
  padding-bottom: 2rem;
  margin-top: 0rem;

}

.cardContainer{
width: 80%;
}


.buttonSettings {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  text-transform: lowercase;
  font-weight: 800;
  border-radius: 4px;
  width: 100%;
  margin: 0 0 2rem;
  font-size:1.2rem;
  transform: scale(1, 1.6);
}

.h1Settings{
font-size: 3.3rem;
color: black;
padding-bottom: 5rem;
padding-top: 2rem;
margin: 0 0 1rem;
margin-top: 0.7rem;
}

.cardSettings{
  width: 60%;
  height: auto;
  border-radius: 39rem;
}

.formSettings{
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.underCardSettings{
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  width: 100%;
      font-weight: 700;
    font-size: 1.1rem;
    line-height: 11px;
    font-family: Gotham Pro,Proxima Nova,arial,serif;
    color: black;
    text-transform: uppercase;
    letter-spacing: 2px;  
}

.page {
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
 background-color: #ffffff;
/* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23bdb4f7'/%3E%3Cstop offset='1' stop-color='%23bdb4f7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23bdb4f7'/%3E%3Cstop offset='1' stop-color='%23bdb4f7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237b68ee'/%3E%3Cstop offset='1' stop-color='%237b68ee' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E"); */
background-attachment: fixed;
background-size: cover;
}


</style>
