<template>
  <div class="board-cell">
    <div v-if="disk" :class="`disk ${classFromColor}`"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DiskColor } from '../app/reversi';

export default defineComponent({
  name: 'Cell',
  props: {
    color: String,
    disk: Boolean,
  },
  computed: {
    classFromColor() {
      if (this.color === DiskColor.WHITE) return '-white';
      if (this.color === DiskColor.BLACK) return '-black';
      return '';
    },
  },
});
</script>

<style>
.board-cell {
  padding: 4px;
  border: 1px solid white;
  height: 40px;
  width: 40px;
}

.disk {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.disk.-white {
  background: white;
}

.disk.-black {
  background: black;
}
</style>
