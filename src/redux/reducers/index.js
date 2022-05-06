import { FETCHDATA } from "../constants/action-types";
var payload = require("../../data/stackline_frontend_assessment_data_2021.json");

const initialState = {
    data : payload[0]
};

function rootReducer(state = initialState, action) {
    if (action.type === FETCHDATA) {
        return Object.assign({}, state,
            { data: state.data });
    }
    return state;
}

export default rootReducer;