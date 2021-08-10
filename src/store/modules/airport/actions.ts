import { ActionContext } from "vuex";
import { IAirportState } from "./state";
import store from "@/store";
import { IStore } from "@/store/types";
import { getAirports } from "@/api/city";

export const actions = {
  async getAirports({ commit }: ActionContext<IAirportState, IStore>) {
    if(store.state.airports.airports.length > 0 ){
      return
    }
    try {
      const response = await getAirports();


      store.commit("airports/setAirports", response);

      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
