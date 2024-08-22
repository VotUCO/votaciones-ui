<template>
  <Suspense>
    <PublishVote />
  </Suspense>
</template>

<script>
import PublishVote from "@/components/PublishVote.vue";

export default {
  components: {
    PublishVote,
  },
};
</script>
