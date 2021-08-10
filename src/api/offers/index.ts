import http from "@/utils/http/axios";
import { SearchFlightParams } from "@/api/models/flight";
import { FlightOffer } from "@/store/modules/offers/state";


enum Api {
  offers = "data/offers.json",
}


export  function searchFlights(params: SearchFlightParams){
  return http.request<FlightOffer[]>({
    url: Api.offers,
    method: "GET",
    params,
  });
}

