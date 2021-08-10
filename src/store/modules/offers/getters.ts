import { ISearchState } from "./state";

export const getters = {
  search: (state: ISearchState) => state.search,
  isSearch: (state: ISearchState) => Object.values(state.search).every((o) => o !== ""),
  flightOffer: (state: ISearchState) => state.flightOffer,
};
