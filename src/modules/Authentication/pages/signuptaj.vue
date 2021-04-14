<template>
  <v-app>
    <div class="login-page-new">
      <div class="login-page-new_header">
        <img
          src="../../../../src/assets/logo_base.png"
          class="login-page-new_header-logo"
        />

        <div class="login-page-new_header-right">
          <div class="login-page-new_header-right-text">
            Already playing with Slark?
          </div>
          <div class="login-page-new_header-right-button">
            <v-btn x-large color="white" class="button-v-btn">
              Login
            </v-btn>
          </div>
        </div>
      </div>

<!-- ////body -->
<v-container class="container"> 
      <v-card
            class="mx-auto mt-5 pa-5 text-center cardSettings rounded-lg"
            id="limited-products"
          >
            <v-card-text>
              <v-container class="cardContainer">
                <form>
                  <v-layout>
                    <v-flex>
                     <div class="cardHeader">Let's go!</div>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                         label="name"
                    v-model="name"
                    type="text"
                    required
                   persistent-hint
                   outlined
                    color="#D53C3C"
                    class="myfont margin-top:2rem"
                    prepend-inner-icon="mdi-account"
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
                    @click="onSignUp"
                    depressed
                    elevation="2"
                    x-large
                    class="cardButton"
                    color="#5f48ea !important"
                    block
                  >
                   Sign Up 
                  </v-btn>

                    </v-flex>
                  </v-layout>

<div class="footnote">
   <span class="SeparatorRow LoginDefaultView-separatorRow"
                ><span class="SeparatorRow-horizontalLine"></span
                >
                </span>
By clicking the button above,you agree to our
<a href="http://clickup.com/terms" target="_blank">Terms of Service</a>
and
<a href="http://clickup.com/privacy" target="_blank">Privacy policy</a>

</div>

                </form>
              </v-container>
            </v-card-text>
                </v-card>                
        </v-container>
</div>
<!-- //// -->
      <div class="footer"></div>
  </v-app>
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

<style scoped>
.login-page-new {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.login-page-new_header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 0 30px;
  padding-top: 3rem;
  padding-right: 3rem;
  flex-shrink: 0;
  flex-direction: row;
}

.login-page-new_header-logo {
  width: 13%;
  height: auto;
}

.login-page-new_header-right {
  display: flex;
  align-items: center;
  margin-left: auto;
  transform: scale(0.8);
}

.login-page-new_header-right-text {
  font-weight: 400;
  font-size: 2rem;
  line-height: 16px;
  color: #232d34;
  margin-right: 3.2rem;
  font-family: "Nanum Myeongjo", serif;
  font-family: "Spartan", sans-serif;
  flex-direction: column;

  /* font-family: 'Brush Script MT', cursive; */
}

.login-page-new_header-right-button {
  display: flex;
  line-height: 15rem;
  height: 10%;
  flex-direction: column;
  box-shadow: 0 5px 15px rgb(0 0 0 / 15%);
  width: 12%;
  transform: scale(1.4);
}

.button-v-btn {
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  text-transform: lowercase;
  color: #5f48ea;
  width: 8.5rem;
  flex-direction: column;
  /* font-family: Garamond, serif; */
  font-family: "Nanum Myeongjo", serif;
  font-family: "Spartan", sans-serif;
  font-weight: bold;
}

.body {
  width: 80%;
}

.footer {
  width: 100%;
  height: 20%;
}

.mainContainer{
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;

}

.cardSettings{
  width: 40%;
  height: auto;
  border-radius: 39rem;

}

.cardHeader{
  font-size: 3.5rem;
  font-family: "Nanum Myeongjo", serif;
  font-family: "Spartan", sans-serif;
  font-weight: bold;
    color: #232d34;
    width: auto;
    line-height: 13rem;
    justify-content: center;
    text-align: center;
    flex-direction: row;
}

.bodyCard{
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.container {
  width: 70%;
  height: auto;

}

.cardContainer{
width: 80%;
}


.cardSettings{
  width: 55%;
  height: auto;
  border-radius: 39rem;
}
.cardHeader{
  font-size: 3.5rem;
  font-family: "Nanum Myeongjo", serif;
  font-family: "Spartan", sans-serif;
  font-weight: bold;
    color: #232d34;
    width: auto;
    line-height: 13rem;
    justify-content: center;
    text-align: center;
    flex-direction: row;
}

.cardButton{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: lowercase;
  height: 10%;   
  font-weight: bold;
  border-radius: 4px;
  width: 100%;
  margin: 0 0 2rem;
  font-size:1.2rem;
  transform: scale(1, 1.4);

}


.SeparatorRow {
  align-items: center;
  display: flex;
  text-align: center;
  width: 100%;
}

.SeparatorRow-horizontalLine {
  border-top: 1px solid #e8ecee;
  flex: 1 1 auto;
  width: 100%;
  padding-top: 8px;
}

.LoginDefaultView-separatorRowLabel {
  color: #fff !important;
  font-size: 16px;
}

.SeparatorRow-label {
  color: #6f7782;

}

</style>
