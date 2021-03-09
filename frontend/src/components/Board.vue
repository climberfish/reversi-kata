<template>
  <div class="reversi-board">
    <div v-for="(row, ri) in board" :key="ri" class="row">
      <Cell v-for="(cell, rc) in row" :key="rc" :color="cell" :disk="!!cell" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cell from './Cell.vue';

import ReversiGame from '../app/reversi';

export default defineComponent({
  components: { Cell },
  data() {
    return {
      game: new ReversiGame(),
    };
  },
  computed: {
    board() { return this.game.board; },
  },
});
</script>

<style>
.reversi-board {
  background: green;
  display: flex;
  flex-direction: column;
}

.reversi-board > .row {
  display: flex;
}
</style>
