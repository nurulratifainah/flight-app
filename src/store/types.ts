// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ISearchState } from "@/store/modules/offers";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IAirportState } from "@/store/modules/airport";

export interface IStore {
  offers: ISearchState
  airports: IAirportState
}