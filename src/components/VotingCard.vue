<template>
  <el-card style="max-width: 480px" id="card">
    <template #header>
      <div class="card-header">
        <span
          ><h1>{{ name }}</h1></span
        >
      </div>
    </template>
    <p>Ganadores: {{ winners }}</p>
    <p>Sistema de votación: {{ votingSystem }}</p>
    <template #footer
      ><a :href="`/vote/${votingSystem}?id=${identifier}&name=${name}`"
        ><el-button type="primary">Votar</el-button></a
      ></template
    >
  </el-card>
</template>

<script>
import "../assets/css/mains.css";
import "../assets/css/header.css";
import "../assets/css/votes.css";
export default {
  name: "VotingCard",
  props: {
    name: String,
    winners: String,
    votingSystem: String,
    identifier: String,
  },
};
</script>

<style scoped>
#card {
  text-align: center;
  background-color: darkgrey;
  border: 1px solid black;
}

h1 {
  font-size: calc(0.75em + 1vmin);
  font-weight: bold;
}

#footer {
  display: flex;
  justify-content: center;
}
</style>
