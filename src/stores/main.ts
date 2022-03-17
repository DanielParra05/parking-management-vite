import { defineStore } from 'pinia'
import ApiConsumer from '~/ApiConsumer';
import ParkingTicket from '~/types/ParkingTicket'

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        appName: "Parking Management",
        carSpots: new Array<ParkingTicket>(),
        bikeSpots: new Array<ParkingTicket>(),
        authenticationToken: "",
    }),

    actions: {
        fillCarSpot(car: ParkingTicket) {
            this.carSpots.push(car);
            ApiConsumer.pushCarSpot(car);
        },
        fillBikeSpot(bike: ParkingTicket) {
            this.bikeSpots.push(bike);
            ApiConsumer.pushBikeSpot(bike);
        },
        freeBikeSpot(bike: ParkingTicket) {
            const index: number = this.bikeSpots.findIndex((ticket) => {
                return ticket.id === bike.id;
            });
            this.bikeSpots.splice(index, 1);
            ApiConsumer.removeBikeSpot(bike);
        },
        freeCarSpot(car: ParkingTicket) {
            const index: number = this.carSpots.findIndex((ticket) => {
                return ticket.id === car.id;
            });
            this.carSpots.splice(index, 1);
            ApiConsumer.removeCarSpot(car);
        },
        fillAuthenticationToken(token: string) {
            this.authenticationToken = token;
        },
        removeToken() {
            this.authenticationToken = "";
        },
        fetchCarSpots() {
            ApiConsumer.getCarSpots().then((response) =>
                this.bikeSpots = response
            );
        },
        fetchBikeSpots() {
            ApiConsumer.getBikeSpots().then((response) =>
                this.bikeSpots = response
            );
        },
    },

    getters: {
        getAppName: (state) => state.appName,
        getCarSpots: (state) => state.carSpots,
        getBikeSpots: (state) => state.bikeSpots,
        isAuthenticated: (state) => state.authenticationToken !== "",
    }
})