<template>
  <div class="reversi-board">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <Cell
        v-for="(cell, colIndex) in row" :key="colIndex"
        :color="cell"
        :disk="!!cell"
        @click="playOn(rowIndex, colIndex)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cell from './Cell.vue';

import { Board } from '../app/reversi';

export default defineComponent({
  components: { Cell },
  props: ['game'],
  computed: {
    board(): Board { return this.game.board; },
  },
  methods: {
    playOn(row: number, col: number) {
      this.game.playsOn(row, col);
    },
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
