<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <div class="rating">
        <h2>{{ option }}</h2>
        <!-- Iterar sobre las estrellas utilizando un v-for -->
        <span
          v-for="star in 5"
          :key="star"
          class="star"
          :class="{ active: star <= selectedStars[index - 1] }"
          @click="selectStars(index, star)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRatingSet",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    initialRatings: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedStars: this.initialRatings,
    };
  },
  methods: {
    selectStars(setIndex, stars) {
      // Crear una copia del array de selectedStars
      const updatedRatings = [...this.selectedStars];

      // Actualizar la calificación del conjunto seleccionado
      updatedRatings[setIndex - 1] = stars;

      // Actualizar selectedStars con la nueva calificación
      this.selectedStars = updatedRatings;
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
  margin-right: 2%;
  margin-left: 2%;
}

.star.active,
.star:hover {
  background-image: url("../assets/estrellacoloreada.png"); /* Imagen de estrella coloreada */
}

h2 {
  display: inline-block;
  margin-left: 5%;
  margin-bottom: 4%;
}
</style>
