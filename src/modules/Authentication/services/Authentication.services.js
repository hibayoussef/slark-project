import api from "../../../axiosWithDelimiterFile";
import AuthenticationConfigurations from "./configurations";

export default class AuthenticationService {
  // get Data file 
   getMessageForEmail( email) {
    return api.get(AuthenticationConfigurations.GET_DATA_REACTIVATE_EMAIL_URL , { email});
  }
}
