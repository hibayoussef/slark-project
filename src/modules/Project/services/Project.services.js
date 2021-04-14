import api from "../../../axiosWithDelimiterFile";
import ProjectConfigurations from "./configurations";

export default class ProjectService {
   createProject(project) {
    console.log("project name that we send it in project.services file", project);
    return api.post(ProjectConfigurations.POST_PROJECT_DATA_URL, { project });
  }

  createWorkspace(workspace){
    console.log("workspace name that we send it in project.services file",workspace)
    return api.post(ProjectConfigurations.POST_WORKSPACE_DATA_URL , { workspace })
  }

  createList(list){
    console.log("list name that we send it in project.services file", list)
    return api.post(ProjectConfigurations.POST_LIST_DATA_URL , { list })
  }

  createTask(task){
    console.log("list name that we send it in project.services file", task)
    return api.post(ProjectConfigurations.POST_TASK_DATA_URL , { task })
  }
}
