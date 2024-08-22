<template>
  <div class="scoring-vote-container">
    <p id="vote-title">{{ votingName() }}</p>
    <div id="vote-container">
      <Suspense>
        <ScoringVote />
      </Suspense>
    </div>
  </div>
</template>

<script>
import ScoringVote from "@/components/ScoringVote.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    ScoringVote,
  },
  setup() {
    const route = useRoute();

    function votingName() {
      return route.query.name;
    }

    return {
      votingName,
    };
  },
};
</script>

<style scoped>
.scoring-vote-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

#vote-title {
  font-weight: bold;
  font-size: 3vw;
  margin: 6%;
}
</style>
