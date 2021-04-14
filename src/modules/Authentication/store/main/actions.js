// import { email } from "vuelidate/lib/validators";
import api from "../../../../axiosWithDelimiterFile";
import ActionsTypes from "../types/actions-types"
import MutationsTypes from '../types/mutations-types'
import StateTypes from '../types/init-state-types'

const actions ={
  async [ActionsTypes.GET_USER_DATA_ACTION]({ commit }, userData) {
        console.log(`userData: `, userData);
        return new Promise((resolve, reject) => {
          api
            .post(`/account/signup`, userData)
            .then((res) => {
              console.log(res);
              const userEmail = userData.email
              commit(MutationsTypes.GET_USER_EMAIL_MUTATIONS, userEmail);
              resolve(res);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      },

      async [ActionsTypes.POST_USER_DATA_ACTION]({ commit }, userData) {
        console.log('userData: ', userData);
        userData.username = userData.email;
        return new Promise((resolve, reject) => {
          api
            .post("/account/login", userData)
            .then((response) => {
              console.log(response);
              // const token = response.data.token;

              commit(MutationsTypes.RETRIEVE_TOKEN_MUTATIONS, response);

              // localStorage.setItem("accessToken", token);
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      },

      async [ActionsTypes.GET_REACTIVATION_EMAIL_ACTION]({state}) {
        // console.log('userData: ', userData);
        const userEmail = state[StateTypes.GET_EMAIL_STATE_TYPES];
        return new Promise((resolve, reject) => {
          api
            .get("/account/reactivate/",userEmail)
            .then((response) => {
              console.log("The request is successed")
              resolve(response);
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        });
      }
}
export default actions;