import { IAirportState } from "./state";

export const getters = {
  airports: (state: IAirportState) => state.airports,
};
