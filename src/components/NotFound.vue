<template>
  <div class="container">
    <img src="@/assets/404.jpeg" alt="Imagen de 404 Beagle" id="perro_img" />
    <p>
      No has encontrado lo que buscabas, pero has encontrado a este perrito
      democrático
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  setup() {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vw;
}

#perro_img {
  margin: 50px;
  width: 15vw;
}

p {
  font-size: 2vw;
  font-weight: bolder;
  text-align: center;
}
</style>
