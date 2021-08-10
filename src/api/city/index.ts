import http from "@/utils/http/axios";
import { BasicResponseModel } from "@/api/models/base";
import { FlightOffer } from "@/store/modules/offers/state";


enum Api {
  airports = "/data/airports.json",
}

export function getAirports() {
  return http.request<BasicResponseModel<FlightOffer[]>>({
    url: Api.airports,
    method: "GET",
  });
}
