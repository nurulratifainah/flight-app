import Vuex from "vuex"
import { expect } from "chai";
import { mount, createLocalVue } from "@vue/test-utils"
import ComponentWithVuex from "@/components/organism/offers/SearchResult.vue"

import "./setup.js";
import Vuetify from "vuetify";

const localVue = createLocalVue()
localVue.use(Vuex)


describe("Test Search Result Component", () => {
    let vuetify: any;

    beforeEach(() => {
        vuetify = new Vuetify();
    });

    const mountFunction = (options: any) => {
        return mount(ComponentWithVuex, {
            localVue,
            vuetify,
            ...options,
        });
    };


    it("render default message", () => {
        const store = new Vuex.Store({
            state: {
                offers : {
                    search : {
                        origin: "",
                        destination: "",
                        departureDate: "",
                        returnDate: "",
                    }
                }
            }
        })
        const wrapper = mountFunction({
            store,
        });

        expect(wrapper.find(".text-body-2").text()).to.contain("Enter your destinations and date to see exiting offers!")
    })



    it("render default Not Found message if no result", () => {
        const store = new Vuex.Store({
            state: {
                offers : {
                    isSearch : true,
                    flightOffer : {},
                }
            }
        })
        const wrapper = mountFunction({
            store,
        });

        expect(wrapper.find(".text-body-2").text()).to.contain("Oops! We don’t have any flights on this date. Try selecting another date. Who knows? You might just find a great deal.")
    })


    it("render Offer Card if there's result after searching", () => {
        const store = new Vuex.Store({
            state: {
                offers : {
                    isSearch : true,
                    flightOffer : {
                        "origin": "FRA",
                        "destination": "FCO",
                        "departureDate": "2021-08-20",
                        "returnDate": "2021-08-21",
                        "seatAvailability": 7,
                        "price" : {
                            "amount" : 128.26,
                            "currency" : "EUR"
                        },
                        "offerType": "BestPrice",
                        "uuid": "SA00003-b790715d-b2b8-4d23-ac27-d4e88c0e84af"
                    },
                }
            }
        })
        const wrapper = mountFunction({
            store,
        });

        expect(wrapper.find(".text-h6").text()).to.contain("We found best Offer for you!")
    })
})