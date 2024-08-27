<template>
  <div id="card">
    <h1>{{ name }}</h1>
    <hr />
    <h6>Tipo de votación: {{ type }}</h6>
    <h6>Sistema de votación: {{ votingSystem }}</h6>
    <button id="vote-button">Votar</button>
  </div>
</template>

<script>
import "../assets/css/mains.css";
import "../assets/css/header.css";
import "../assets/css/votes.css";
export default {
  name: "VotingCard",
  props: {
    name: String,
    type: String,
    votingSystem: String,
  },
};
</script>

<style></style>
