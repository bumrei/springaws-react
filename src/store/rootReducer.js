import { all } from 'redux-saga/effects';
import { combineReducers } from "redux";
import pracReactReducer from "./pracReact/reducer";
import { getTestSaga } from "./pracReact/saga";

const rootReducer = combineReducers({
    pracReactReducer,
});

export function* rootSaga() {
    yield all([
        getTestSaga()
    ])
}

export default rootReducer;