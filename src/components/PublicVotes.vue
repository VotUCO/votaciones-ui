<template>
  <div id="container">
    <h3>Votaciones Públicas ({{ votaciones.length }})</h3>
    <hr />
    <li v-for="votacion in votaciones" :key="votacion.id">
      <VotingCard
        :name="votacion.name"
        :type="votacion.type"
        :votingSystem="votacion.votingSystem"
        id="card"
      />
    </li>
  </div>
</template>

<script>
import VotingCard from "./VotingCard.vue";
import "../assets/css/mains.css";
import "../assets/css/header.css";
import "../assets/css/votes.css";
import axios from "axios";

export default {
  name: "PublicVotes",
  async setup() {
    const number = 0;

    function accessToken() {
      console.log(localStorage.getItem("accessToken"));
      return localStorage.getItem("accessToken");
    }

    const response = await axios.get(
      `${process.env.VUE_APP_BACK_URL}/api/v1/voting/public`,
      {
        headers: {
          // eslint-disable-next-line no-undef
          Authorization: `Bearer ${accessToken()}`,
        },
      }
    );

    const votaciones = response.data;
    return { number, votaciones };
  },
  components: { VotingCard },
};
</script>

<style></style>
