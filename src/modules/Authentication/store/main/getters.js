import GettersTypes from '../types/getters-types';
import StateTypes from '../types/init-state-types';

const getters = {
    [GettersTypes.GET_USER_EMAIL_GETTERS]:state => state[StateTypes.GET_EMAIL_STATE_TYPES],
    [GettersTypes.GET_USER_TOKEN_GETTER]:state=>state[StateTypes.GET_TOKEN_STATE_TYPES]
}


export default getters;