import { createAction } from "redux-actions";

export const GET_PEOPLE_ONE = "GET_PEOPLE_ONE";

export const getPopleOne = createAction(GET_PEOPLE_ONE, (ha) => ({ ha }));