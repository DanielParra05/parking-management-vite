import { defineStore } from 'pinia'
import ParkingTicket from '~/types/ParkingTicket'

export const useMainStore = defineStore('mainStore', {

    state: () => ({
        appName: "Parking Management",
        carSpots: new Array<ParkingTicket>(),
        bikeSpots: new Array<ParkingTicket>(),
        authenticationToken: "",
    }),

    actions: {

    }

})