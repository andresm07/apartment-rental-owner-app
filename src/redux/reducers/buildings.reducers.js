export default function(state={ buildingList: [] }, action) {
    switch(action.type) {
        case "BUILDING_LIST_GET":
            return {
                ...state, buildingList: action.payload
            };
        default:
            return state;
    }
}