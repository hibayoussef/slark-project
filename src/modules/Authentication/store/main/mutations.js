import MutationsTypes from "../types/mutations-types";
import StateTypes from "../types/init-state-types";

const mutations = {
  [MutationsTypes.RETRIEVE_TOKEN_MUTATIONS](state, response) {
    state[StateTypes.GET_TOKEN_STATE_TYPES] = response.token;
  },
  [MutationsTypes.GET_USER_EMAIL_MUTATIONS](state, data) {
    state[StateTypes.GET_EMAIL_STATE_TYPES] = data;
  }
};

export default mutations;
