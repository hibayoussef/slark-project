import SignUp from './modules/Authentication/pages/signup.vue'
import SignIn from './modules/Authentication/pages/login.vue'
import ConfirmEmail from './modules/Authentication/pages/confirmEmail.vue'
import Navbar from './components/shared/navbar.vue'
import Home from './modules/Task-Page/pages/home.vue'
import AddProject from './modules/Project/pages/add-project.vue'
import ProjectList from './modules/Project/pages/projectsList.vue'
import signuptaj from './modules/Authentication/pages/signuptaj.vue'
import Workspace from './modules/Project/pages/workspace/workspace.vue'
import List from './modules/Project/pages/workspace/list.vue'
import Task from './modules/Project/pages/task/task.vue'
import Space from './modules/Project/pages/workspace/space.vue'

export const routes = [
{ path:"/signup" , name:"SignUp" ,component:SignUp },
{
    path:"/signin" , name:"SignIn" , component:SignIn
},
{
    path:"/confirm-email" , name:"ConfirmEmail" , component:ConfirmEmail
},
{
    path:"/navbar" , name:"Navbar Part" , component:Navbar
},
{
    path:"/task-home" , name:"HomePage" , component:Home
},
{
    path:"/add-project" , name:"add Project" , component:AddProject
},
{
    path:"/projects-list" , name:"projects List" , component:ProjectList
},
{
    path:"/signuptaj" , name:"signup taj" , component:signuptaj
},
{
    path:"/onboarding" , name:"workspace" , component:Workspace
},
{
    path:"/list" , name: "list" , component: List
},
{
    path:"/task" , name: "task" , component: Task
},
{
    path:"/space" , name: "space" , component: Space
}
]