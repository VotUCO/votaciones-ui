<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
    crossorigin="anonymous"
  />

  <div class="add-form">
    <div>
      <label for="name">Nombre:</label>
      <input type="text" class="input" id="name" :value="name" />
    </div>
    <div>
      <label for="types">Tipo de Votación:</label>
      <select id="types" class="input" :value="votationType">
        <option v-for="(type, index) in types" :key="index" :value="type.value">
          {{ type.name }}
        </option>
      </select>
    </div>
    <div>
      <label for="votingsys">Sistema de Votación:</label>
      <select id="votingsys" class="input" :value="votingSystem">
        <option
          v-for="(system, index) in systems"
          :key="index"
          :value="system.value"
        >
          {{ system.name }}
        </option>
      </select>
    </div>
    <div>
      <label for="options">Opciones:</label>
      <input
        type="text"
        class="input"
        id="options"
        :value="name"
        v-for="(option, index) in options"
        :key="index"
      />
      <button
        v-on:click="
          {
            {
              addOption();
            }
          }
        "
      >
        <FontAwesomeIcon :icon="faPlus" />
      </button>
      <button
        id="remove-button"
        v-on:click="
          {
            {
              removeOption();
            }
          }
        "
      >
        <FontAwesomeIcon :icon="faMinus" />
      </button>
    </div>
    <div>
      <label for="initDate">Fecha de Inicio:</label>
      <input
        type="datetime-local"
        class="input"
        id="initDate"
        :value="initDate"
        v-on:change="checkStartDate()"
      />
    </div>
    <div>
      <label for="finishDate">Fecha de Finalización:</label>
      <input
        type="datetime-local"
        class="input"
        id="finishDate"
        :value="finalDate"
      />
    </div>
    <div id="submit-form-add-votation">
      <button id="vote-button">Crear Votación (en estado borrador)</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
import "../assets/css/mains.css";

export default {
  name: "CreateVotationForm",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const name = null;
    const votationType = null;
    const votingSystem = null;
    const options = ref([""]);
    let initDate = ref("");
    const finalDate = "";
    const types = [
      {
        value: "1",
        name: "1 entre n",
      },
      {
        value: "m",
        name: "m entre n",
      },
    ];
    const systems = [
      {
        value: "scoring",
        name: "Scoring",
      },
      {
        value: "mayoritario",
        name: "Mayoritario",
      },
    ];
    function addOption() {
      this.options.push("");
    }
    function removeOption() {
      console.log(this.options.length);
      if (this.options.length > 1) {
        this.options.pop();
      } else {
        alert("La lista de opciones no puede quedar vacía");
      }
    }
    function checkStartDate() {
      if (this.initDate < new Date()) {
        alert("La fecha de inicio no puede ser anterior a hoy");
        initDate = new Date();
      }
    }
    return {
      name,
      votationType,
      votingSystem,
      options,
      initDate,
      finalDate,
      types,
      systems,
      addOption,
      removeOption,
      checkStartDate,
      faPlus,
      faMinus,
    };
  },
};
</script>

<style>
#vote-button {
  background-color: #0f7fac;
  border-radius: 15px;
  padding: 10px;
}
</style>
