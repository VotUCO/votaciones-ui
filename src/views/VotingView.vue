<template>
  <h1 id="voting-title">Delegado GG1 Informática</h1>
  <ScoringOptions :options="['Raul', 'Pepe', 'Juan']" />
</template>

<script>
import ScoringOptions from "@/components/ScoringOptions.vue";

export default {
  name: "VotingView",
  components: {
    ScoringOptions,
  },
};
</script>

<style></style>
