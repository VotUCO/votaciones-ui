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
      <label for="authorized">Lista de Autorizados:</label>
      <input
        type="text"
        class="input"
        id="authorized"
        :value="autorhized_list"
      />
      <div class="container-input">
        <input
          type="file"
          name="file-1"
          id="file-1"
          class="inputfile inputfile-1"
          accept=".txt"
          :value="file"
        />
        <label for="file-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="iborrainputfile"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path
              d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
            ></path>
          </svg>
          <span class="iborrainputfile">Adjuntar lista (.txt)</span>
        </label>
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
    </div>
    <div id="submit-form-add-votation">
      <button id="vote-button">Añadir Votación (modo borrador)</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";

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
    const file = "";
    const autorhized_list = "";
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
      console.log(file);
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
      file,
      autorhized_list,
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
.container-input {
  display: inline;
  text-align: center;
  padding: 50px 0;
  border: none;
  width: auto;
  margin: 0 auto;
  align-self: center;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  max-width: 80%;
  font-size: 1.25rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
}

.inputfile + label svg {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  margin-top: -0.25em;
  margin-right: 0.25em;
}

.iborrainputfile {
  font-size: 16px;
  font-weight: normal;
  font-family: "Lato";
}

.inputfile-1 + label {
  color: #fff;
  background-color: #0f7fac;
}

.inputfile-1:focus + label,
.inputfile-1.has-focus + label,
.inputfile-1 + label:hover {
  background-color: rgb(221, 215, 215);
  color: black;
}

#vote-button {
  background-color: #0f7fac;
  border-radius: 15px;
  padding: 10px;
}
</style>
