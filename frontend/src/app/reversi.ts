export enum DiskColor {
  BLACK = 'black',
  WHITE = 'white',
}

namespace Disk {
  export function inverse(disk: DiskColor): DiskColor {
    return disk === DiskColor.BLACK ? DiskColor.WHITE : DiskColor.BLACK;
  }
}

enum Direction { UPWARD, DOWNWARD, LEFT, RIGTH, DOWNRIGTH, DOWNLEFT, UPRIGHT, UPLEFT }

function enumKeys<O extends object, K extends keyof O>(obj: O): K[] {
  return Object.getOwnPropertyNames(obj).filter(k => isNaN(Number(k))) as K[];
}

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

  public board: DiskColor[][];

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
    let painted = false;

    for (const direction of enumKeys(Direction)) {
      const [dRow, dCol] = DirectionMethods.toVector(Direction[direction]);
      painted = painted || this.tryPaintInDirection(Direction[direction], 0, row + dRow, col + dCol, this.currentDisk);
    }
    // painted ||= this.tryPaintInDirection(Direction.UPWARD, 0, row -1 1, col, this.currentDisk);
    // painted ||= this.tryPaintInDirection(Direction.DOWNWARD, 0, row + 1, col, this.currentDisk);
    // painted ||= this.tryPaintInDirection(Direction.LEFT, 0, row, col - 1, this.currentDisk);
    // painted ||= this.tryPaintInDirection(Direction.RIGTH, 0, row, col + 1, this.currentDisk);
    // painted ||= this.tryPaintInDirection(Direction.DOWNRIGTH, 0, row + 1, col + 1, this.currentDisk);
    // painted ||= this.tryPaintInDirection(Direction.DOWNLEFT, 0, row + 1, col - 1, this.currentDisk);
    // painted ||= this.tryPaintInDirection(Direction.UPLEFT, 0, row - 1, col - 1, this.currentDisk);
    // painted ||= this.tryPaintInDirection(Direction.UPRIGHT, 0, row - 1, col + 1, this.currentDisk);

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
