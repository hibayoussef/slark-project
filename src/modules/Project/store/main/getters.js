import GettersTypes from '../types/getters-types';
import StateTypes from '../types/init-state-types';

const getters = {

    [GettersTypes.GET_DATA_PROJECT_GETTERS]:state => state[StateTypes.POST_PROJECT_DATA_STATE]
}


export default getters;