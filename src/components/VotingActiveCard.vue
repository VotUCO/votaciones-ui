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
    <p>
      Fecha de Inicio:
      {{
        startDate.toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      }}
    </p>
    <p>
      Fecha de Fin:
      {{
        endDate.toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      }}
    </p>
  </el-card>
</template>

<script>
import "../assets/css/mains.css";
import "../assets/css/header.css";
import "../assets/css/votes.css";
export default {
  name: "VotingActiveCard",
  props: {
    name: String,
    winners: String,
    votingSystem: String,
    identifier: String,
    startDate: Date,
    endDate: Date,
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
