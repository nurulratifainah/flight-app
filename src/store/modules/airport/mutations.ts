import { Airport, IAirportState } from "./state";

export const mutations = {
  setAirports: (state: IAirportState, airports: Airport[]) => {
    state.airports = airports
  },

}