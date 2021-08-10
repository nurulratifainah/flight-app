import http from "@/utils/http/axios";

enum Api {
  airports = "/data/airports.json",
}

export function getAirports() {
  return http.request({
    url: Api.airports,
    method: "GET",
  });
}
