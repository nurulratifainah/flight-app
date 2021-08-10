import { ActionContext } from "vuex";
import { FlightOffer, ISearchState } from "./state";
import store from "@/store";
import { IStore } from "@/store/types";
import { searchFlights } from "@/api/offers";

export const actions = {
  async getFlightOffers({ commit }: ActionContext<ISearchState, IStore>) {
    try {
      const search = store.state.offers.search;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const offers: FlightOffer[] = await searchFlights(search);

      store.commit("offers/setIsSearch", true);
      const bestOffer = offers.find(
        (offer: FlightOffer) =>
          offer.origin == search.origin &&
          offer.destination == search.destination
      );

      if (typeof bestOffer !== "undefined")
        store.commit("offers/setFlightOffers", bestOffer);

      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
