
export type ISearchState = {
  isSearch: boolean;
  search: FlightSearch;
  flightOffer: FlightOffer;
};

export const state: ISearchState = {
  isSearch: false,
  search: {
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
  },
  flightOffer: {} as FlightOffer,
};

export interface FlightSearch {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
}
export interface FlightOffer {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatAvailability: number;
  price: FlightPrice;
  offerType: string;
  uuid: string;
}

export interface FlightPrice {
  amount: number;
  currency: string;
}
