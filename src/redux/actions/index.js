import { FETCHDATA } from "../constants/action-types";

export function fetchData() {
    return { type: FETCHDATA, payload: {} };
}