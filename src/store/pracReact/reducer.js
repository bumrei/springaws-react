import { fromJS } from "immutable";
import { handleActions } from "redux-actions";
import { GET_PEOPLE_ONE } from "./action";


const initialState = fromJS({
    testProp: "hahaha"
})

const pracReactReducer = handleActions(
    {
        // [GET_PEOPLE_ONE]: (state, action) => {
        //     console.log("redux 작동 GET_PEOPLE_ONE >>> ", action)
        //     console.log("redux 작동 GET_PEOPLE_ONE state >>> ", state)

        //     return state.set("thatIt", action.payload.ha);
        // }
    }, initialState
);

export default pracReactReducer;