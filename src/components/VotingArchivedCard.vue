<template>
  <el-card style="max-width: 480px">
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
      ><el-button
        type="info"
        tag="a"
        :href="`/publish?id={${id}}&name=${name}&winners=${winners}&votingSystem=${votingSystem}`"
        >Informe</el-button
      ></template
    >
  </el-card>
</template>

<script>
import "../assets/css/mains.css";
import "../assets/css/header.css";
import "../assets/css/votes.css";
export default {
  name: "VotingDraftCard",
  props: {
    identifier: String,
    name: String,
    winners: String,
    votingSystem: String,
  },
};
</script>

<style scoped>
#card {
  text-align: center;
  background-color: slategrey;
  border: 1px solid black;
}

h1 {
  font-size: calc(0.75em + 1vmin);
  font-weight: bold;
}
</style>
