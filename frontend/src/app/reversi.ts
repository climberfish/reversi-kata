export enum DiskColor {
  BLACK = 'black',
  WHITE = 'white',
}

export type Board = DiskColor[][];

namespace Disk {
  export function inverse(disk: DiskColor): DiskColor {
    return disk === DiskColor.BLACK ? DiskColor.WHITE : DiskColor.BLACK;
  }
}

enum Direction { UPWARD, DOWNWARD, LEFT, RIGTH, DOWNRIGTH, DOWNLEFT, UPRIGHT, UPLEFT }
const DIRECTIONS = ['UPWARD', 'DOWNWARD', 'LEFT', 'RIGTH', 'DOWNRIGTH', 'DOWNLEFT', 'UPRIGHT', 'UPLEFT'];

namespace DirectionMethods {
  export function toVector(direction: Direction): [number, number] {
    if (direction === Direction.UPWARD) return [-1, 0];
    if (direction === Direction.DOWNWARD) return [1, 0];
    if (direction === Direction.LEFT) return [0, -1];
    if (direction === Direction.RIGTH) return [0, 1];
    if (direction === Direction.DOWNRIGTH) return [1, 1];
    if (direction === Direction.DOWNLEFT) return [1, -1];
    if (direction === Direction.UPRIGHT) return [-1, 1];
    if (direction === Direction.UPLEFT) return [-1, -1];
    return [0, 0];
  }
}

export default class ReversiGame {
  private currentDisk = DiskColor.BLACK;

  public board: Board;

  constructor() {
    this.board = Array(8).fill(null).map(() => Array(8).fill(null));
    this.board[3][3] = DiskColor.WHITE;
    this.board[3][4] = DiskColor.BLACK;
    this.board[4][3] = DiskColor.BLACK;
    this.board[4][4] = DiskColor.WHITE;
  }

  currentPlayer(): DiskColor {
    return this.currentDisk;
  }

  playsOn(row: number, col: number) {
    if (this.board[row][col]) return false;
    let painted = false;

    for (const direction of DIRECTIONS) {
      const [dRow, dCol] = DirectionMethods.toVector(Direction[direction]);
      painted = this.tryPaintInDirection(Direction[direction], 0, row + dRow, col + dCol, this.currentDisk) || painted;
    }

    if (!painted) return;

    this.board[row][col] = this.currentDisk;
    this.currentDisk = Disk.inverse(this.currentDisk);

    return painted;
  }

  pieceAt(row: number, col: number): DiskColor {
    return this.board[row][col];
  }

  private tryPaintInDirection(direction: Direction, toPaint: number, row: number, col: number, color: DiskColor): boolean {
    const [dRow, dCol] = DirectionMethods.toVector(direction);
    if (row < 0 || row > 7) return false;
    if (col < 0 || col > 7) return false;
    if (!this.board[row][col]) return false;

    if (this.board[row][col] === color) return toPaint > 0;
    if (this.tryPaintInDirection(direction, toPaint + 1, row + dRow, col + dCol, color)) {
      this.board[row][col] = color;
      return true;
    }
    return false;
  }
}
