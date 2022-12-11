import axios from "axios";
import { put, all, call, takeEvery } from "redux-saga/effects";
import { GET_PEOPLE_ONE } from "./action";

async function test(action) {
    try {
        const result = await axios.get('https://swapi.dev/api/people/1/')
        console.log("fdfds >>> ", result.data)
        const { data } = result;
        return data;

    } catch (e) {

    }
    console.log("middleware 적용 >>> ", action);
}

export function* getTestSaga() {
    yield takeEvery(GET_PEOPLE_ONE, test)
}