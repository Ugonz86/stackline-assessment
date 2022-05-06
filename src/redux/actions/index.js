import { DATA } from "../constants/action-types";

export function fetchData() {
    return { type: DATA, payload: {} };
}