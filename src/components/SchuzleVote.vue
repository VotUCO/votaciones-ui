<template>
  <div id="vote-modal">
    <el-alert title="Voto emitido" type="success" v-if="confirmVote" />
    <el-alert title="Error en el voto" type="error" v-if="errorVote" />
  </div>
  <div id="schuzle-container">
    <draggable
      v-model="options"
      group="people"
      @start="drag = true"
      @end="drag = false"
      item-key="element"
    >
      <template #item="{ element }">
        <div id="element-schuzle">{{ element }}</div>
      </template>
    </draggable>
    <div id="vote-buttons">
      <el-checkbox
        v-model="checkedNull"
        label="Voto en Blanco"
        size="large"
        @click="blankVote()"
      />
      <el-button type="primary" @click="confirmVoteDialog = true"
        >Confirmar Voto</el-button
      >
    </div>
  </div>
  <el-dialog
    v-model="confirmVoteDialog"
    title="Confirmación de Voto"
    width="800"
  >
    <div
      v-for="(item, index) in options"
      :key="index"
      class="confirm-vote-dialog"
    >
      <span class="demonstration">Opción {{ index + 1 }} : {{ item }}</span>
    </div>
    <div>
      <p style="font-weight: bold">Voto en Blanco</p>
    </div>
    <el-button v-on:click="sendVote()" type="primary">Confirmar</el-button>
    <el-button v-on:click="cancelVote()">Cancelar</el-button>
  </el-dialog>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import draggableComponent from "vuedraggable";

export default {
  components: {
    draggable: draggableComponent,
  },
  async setup() {
    const route = useRoute();
    let options = ref([]);
    let checkedNull = ref(false);
    let confirmVoteDialog = ref(false);
    let confirmVote = ref(false);
    let errorVote = ref(false);
    const drag = false;
    function blankVote() {
      //to-implement
    }

    try {
      const response = await axios.get(
        `${process.env.VUE_APP_BACK_URL}/api/v1/voting/options?id=${route.query.id}`,
        {
          headers: {
            // eslint-disable-next-line no-undef
            Authorization: `Bearer ${accessToken()}`,
          },
        }
      );
      options.value = response.data.options;
    } catch (error) {
      if (error.response) {
        if (error.response.status == 401) {
          localStorage.setItem("accessToken", "null");
          window.location.replace("/");
        }
      }
    }

    function accessToken() {
      return localStorage.getItem("accessToken");
    }

    async function sendVote() {
      const paylaod = {
        voting_id: route.query.id,
        vote: options,
        voted: "True",
      };
      try {
        await axios.post(
          `${process.env.VUE_APP_BACK_URL}/api/v1/vote/create`,
          paylaod,
          {
            headers: {
              Authorization: `Bearer ${accessToken()}`,
            },
          }
        );

        confirmVoteDialog.value = false;
      } catch (error) {
        if (error.response.status == 401) {
          localStorage.setItem("accessToken", "null");
          window.location.replace("/");
        }
        confirmVoteDialog.value = false;
        errorVote.value = true;
      }
    }

    function cancelVote() {
      confirmVoteDialog.value = false;
    }
    return {
      options,
      confirmVoteDialog,
      checkedNull,
      blankVote,
      sendVote,
      cancelVote,
      confirmVote,
      errorVote,
      drag,
    };
  },
};
</script>

<style scoped>
.demo-rate-block {
  padding: 30px 0;
  align-items: center;
  display: inline;
  width: 100%;
}
.demo-rate-block .demonstration {
  display: inline;
  color: black;
  font-size: 14px;
  margin: 20px;
}

#rate-container {
  display: inline;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#rate-voting {
  display: flex;
}

#blank-vote-button {
  margin-top: 35px;
  display: block;
}

#schuzle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#vote-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

#vote-buttons .el-checkbox {
  margin-bottom: 10px;
}

#confirm-vote-dialog {
  align-items: center;
}

#vote-modal {
  display: inline-block;
}

#element-schuzle {
  border: 1px solid black;
  width: 45vw;
  font-size: xx-large;
  margin: 10px;
  text-align: center;
}
</style>
