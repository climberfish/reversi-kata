<template>
  <div class="reversi-game">
    <Board :game="game" />
    <div class="currentplayer">
      <Cell :color="currentPlayer" :disk="true" />{{ currentPlayer }}
    </div>
    <div class="game-scores">
      <div class="score">
        <Cell color="white" :disk="true" /> {{ whiteCount }}
      </div>
      <div class="score">
        <Cell color="black" :disk="true" /> {{ blackCount }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReversiGame, { DiskColor } from '../app/reversi';
import Board from './Board.vue';
import Cell from './Cell.vue';

export default defineComponent({
  components: { Board, Cell },
  data() {
    return {
      game: new ReversiGame(),
    };
  },
  computed: {
    currentPlayer(): DiskColor { return this.game.currentPlayer(); },
    whiteCount(): number {
      return this.count(DiskColor.WHITE);
    },
    blackCount(): number {
      return this.count(DiskColor.BLACK);
    },
  },
  methods: {
    count(color: DiskColor): number {
      let sum = 0;
      for (const row of this.game.board) {
        for (const cell of row) {
          if (cell === color) sum++;
        }
      }
      return sum;
    }  
  }
});
</script>

<style>
.reversi-game {
  display: flex;
  background: green;
  padding: 12px;
}

.reversi-game > .currentplayer {
  margin: 40px;
}

.score {
  display: flex;
  align-items: center;
}

</style>
