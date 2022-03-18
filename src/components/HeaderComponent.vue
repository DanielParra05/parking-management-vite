<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-avatar>
        <router-link to="/">
          <q-icon
            @click="redirectToWithVueRouter('/')"
            name="local_parking"
            size="md"
            style="background-color: white"
          />
        </router-link>
      </q-avatar>
      <q-toolbar-title> {{ store.getAppName }} </q-toolbar-title>
      <q-tabs>
        <q-btn
          color="red"
          size="sm"
          rounded
          @click="redirectToWithVueRouter('/currentocupation')"
          glossy
          label="Current Ocupation"
        />
      </q-tabs>
      <q-btn flat round dense icon="logout" @click="logout">
        <q-tooltip> Logout </q-tooltip></q-btn
      >
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "~/stores/main";

export default defineComponent({
  setup() {
    const store = useMainStore();

    return {
      store,
    };
  },
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    logout() {
      //this.$store.commit("removeToken");
      this.redirectToWithVueRouter("login");
    },
    redirectToWithVueRouter(route: string) {
      this.$router.push(route);
    },
  },
});
</script>
