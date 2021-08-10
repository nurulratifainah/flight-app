
export type IAirportState = {
  airports: Airport[];
};

export const state: IAirportState = {
  airports: [],
};


export interface Airport {
  name: string;
  city: string;
  country: string;
  iata_code: string;
}
