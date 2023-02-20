import {expiration} from "./constants";

export const checkExpirationDate = (dateOfSaveToLs) => {
    const dateNow = new Date();
    const from = new Date(dateOfSaveToLs);
    // test
    // const from = new Date("2023-01-01");
    const thirtyDaysInMilliseconds = expiration * 24 * 60 * 60 * 1000;
    return dateNow.getTime() - from.getTime() < thirtyDaysInMilliseconds;
}