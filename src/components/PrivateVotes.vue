<template>
  <div id="container">
    <h3>Votaciones Privadas ({{ votaciones.length }})</h3>
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

export default {
  name: "PrivateVotes",
  setup() {
    const number = 0;
    const votaciones = [
      {
        id: 0,
        name: "Elecciones Consejo de Gobierno",
        type: "1entren",
        votingSystem: "scoring",
      },
    ];
    return { number, votaciones };
  },
  components: { VotingCard },
};
</script>

<style></style>
