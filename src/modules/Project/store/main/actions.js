import ProjectService from '../../services/Project.services';
import ActionsTypes from '../../store/types/actions-types';
import MutationsTypes from '../../store/types/mutations-types';

const actions = {

  async [ActionsTypes.POST_PROJECT_DATA_ACTION]({ commit } , project){
    const projectService = new ProjectService();
    const reply = await projectService.createProject({ project });
    console.log("kkkkkk",reply);
    if(reply){
      commit(MutationsTypes.POST_PROJECT_DATA_MUTATION , reply.data)
    }
    console.log(reply.data)
  },
  async [ActionsTypes.POST_WORKSPACE_DATA_ACTION]({ commit } , workspace){
    const projectService =new  ProjectService();
    const reply = await projectService.createWorkspace({ workspace});
    console.log('inside action', reply);
    if(reply){
      commit(MutationsTypes.POST_WORKSPACE_DATA_MUTATION , reply.data)
    }
    console.log(reply.data)
  },
  async [ActionsTypes.POST_LIST_DATA_ACTION]({ commit } , list){
    const projectService =new  ProjectService();
    const reply = await projectService.createList({ list });
    console.log('inside action', reply);
    if(reply){
      commit(MutationsTypes.POST_LIST_DATA_MUTATION , reply.data)
    }
    console.log(reply.data)
  },
  async [ActionsTypes.POST_TASK_DATA_ACTION]({ commit } , task){
    const projectService =new  ProjectService();
    const reply = await projectService.createTask({ task });
    console.log('inside action', reply);
    if(reply){
      commit(MutationsTypes.POST_TASK_DATA_MUTATION , reply.data)
    }
    console.log(reply.data)
  }

}

export default actions;