import { FlightOffer, ISearchState } from "./state";

export const mutations = {
  setOrigin: (state: ISearchState, origin: string) => {
    state.search.origin = origin
  },
  setDestination: (state: ISearchState, destination: string) => {
    state.search.destination = destination
  },
  setDepartureDate: (state: ISearchState, departureDate: string) => {
    state.search.departureDate = departureDate
  },
  setReturnDate: (state: ISearchState, returnDate: string) => {
    state.search.returnDate = returnDate
  },
  setIsSearch:(state: ISearchState, isSearch: boolean) => {
    state.isSearch = isSearch
  },
  setFlightOffers: (state: ISearchState, flightOffer: FlightOffer) => {
    state.flightOffer = flightOffer
  }
}