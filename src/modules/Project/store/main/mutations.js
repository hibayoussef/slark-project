import MutationsTypes from "../types/mutations-types";
import StateTypes from "../types/init-state-types";

const mutations = {
  [MutationsTypes.POST_PROJECT_DATA_MUTATION](state , data){
     state[StateTypes.POST_PROJECT_DATA_STATE] = data;
  },
  [MutationsTypes.POST_WORKSPACE_DATA_MUTATION](state ,data){
    state[StateTypes.POST_WORKSPACE_DATA_STATE]=data;
  },
  [MutationsTypes.POST_LIST_DATA_MUTATION](state ,data){
    state[StateTypes.POST_LIST_DATA_STATE]=data;
  },
  [MutationsTypes.POST_TASK_DATA_MUTATION](state ,data){
    state[StateTypes.POST_TASK_DATA_STATE]=data;
  }
};

export default mutations;
