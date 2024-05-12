<template>
  <div class="rating">
    <!-- Iterar sobre las estrellas utilizando un v-for -->
    <span
      v-for="star in totalStars"
      :key="star"
      class="star"
      :class="{ active: star <= selectedStars }"
      @click="selectStars(star)"
    ></span>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    maxStars: {
      type: Number,
      default: 5,
    },
    initialStars: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedStars: this.initialStars,
      totalStars: this.maxStars,
    };
  },
  methods: {
    selectStars(stars) {
      this.selectedStars = stars;
    },
  },
};
</script>

<style scoped>
.rating {
  font-size: 0; /* Evita espacio entre las estrellas */
}

.star {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("../assets/estrellavacia.png"); /* Imagen de estrella vacía */
  background-size: cover;
  cursor: pointer;
}

.star.active,
.star:hover {
  background-image: url("../assets/estrellacoloreada.png"); /* Imagen de estrella coloreada */
}
</style>
