import { combineReducers } from 'redux';

import users from './user.reducers';
import apartments from './apartments.reducers';
import buildings from './buildings.reducers';

const rootReducer = combineReducers({
    users,
    apartments,
    buildings
});

export default rootReducer;