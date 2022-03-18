<template>
  <q-page class="q-pa-md">
    <div class="row justify-center items-start">
      <q-btn
        color="secondary"
        label="New ticket"
        size="lg"
        @click="goToForm()"
      />
    </div>
    <div class="flex-center" style="padding: 1.5%">
      <tickets-table-component
        :tableTitle="`Tickets Summary 🎟️`"
        :parkingTicketsList="parkingTicketsList"
      ></tickets-table-component>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ApiConsumer from "~/ApiConsumer";
import ParkingTicket from "~/types/ParkingTicket";
import { useRouter } from "vue-router";

const router = useRouter();

const parkingTicketsList = ref<Array<ParkingTicket>>(
  new Array<ParkingTicket>()
);

ApiConsumer.getParkingTickets().then((response) => {
  parkingTicketsList.value = response;
});

function goToForm() {
  router.push({ name: "ParkingForm" });
}
</script>

<style lang="postcss"></style>

<route lang="JSON5">
{
  name: "index"
}
</route>
