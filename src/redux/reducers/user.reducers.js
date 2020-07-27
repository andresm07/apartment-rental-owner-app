export default function(state={ adminUsersList: [] }, action) {
    switch(action.type) {
        case "ADMIN_USERS_GET":
            return {
                ...state, adminUsersList: action.payload
            };
        default:
            return state;
    }
}