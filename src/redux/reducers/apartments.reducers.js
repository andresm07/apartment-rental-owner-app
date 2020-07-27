export default function(state={ apartmentList: [] }, action) {
    switch(action.type) {
        case "APARTMENT_LIST_GET":
            return {
                ...state, apartmentList: action.payload
            };
        default:
            return state;
    }
}

