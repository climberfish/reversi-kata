import ReversiGame, { DiskColor } from 'src/index';

test('primeiro jogador é o preto', () => {
  const tabuleiro = new ReversiGame();
  expect(tabuleiro.currentPlayer()).toBe(DiskColor.BLACK);
});

test('segundo jogador é o branco', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(2, 3);
  expect(tabuleiro.currentPlayer()).toBe(DiskColor.WHITE);
});

test('vira as peças numa coluna (para baixo)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(2, 3);
  expect(tabuleiro.pieceAt(3, 3)).toBe(DiskColor.BLACK);
});

test('vira as peças numa linha (para esquerda)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(4, 5);
  expect(tabuleiro.pieceAt(4, 4)).toBe(DiskColor.BLACK);
});

test('vira as peças numa linha (para direita)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(3, 2);
  expect(tabuleiro.pieceAt(3, 3)).toBe(DiskColor.BLACK);
});

test('vira as peças numa linha (para baixo)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(2, 3);
  expect(tabuleiro.pieceAt(3, 3)).toBe(DiskColor.BLACK);
});

test('vira as peças numa diagonal (para sudeste)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(2, 3);
  expect(tabuleiro.pieceAt(3, 3)).toBe(DiskColor.BLACK);
  tabuleiro.playsOn(2, 2);
  expect(tabuleiro.pieceAt(3, 3)).toBe(DiskColor.WHITE);
});

test('vira as peças numa diagonal (para noroeste)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(4, 5);
  expect(tabuleiro.pieceAt(4, 4)).toBe(DiskColor.BLACK);
  tabuleiro.playsOn(5, 5);
  expect(tabuleiro.pieceAt(4, 4)).toBe(DiskColor.WHITE);
});

test('vira as peças numa diagonal (para nordeste)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(4, 5);
  expect(tabuleiro.pieceAt(4, 4)).toBe(DiskColor.BLACK);
  tabuleiro.playsOn(5, 3);
  expect(tabuleiro.pieceAt(4, 3)).toBe(DiskColor.WHITE);
  tabuleiro.playsOn(5, 2);
  expect(tabuleiro.pieceAt(4, 3)).toBe(DiskColor.BLACK);
});

test('vira as peças numa diagonal (para sudoeste)', () => {
  const tabuleiro = new ReversiGame();
  tabuleiro.playsOn(3, 2);
  expect(tabuleiro.pieceAt(3, 3)).toBe(DiskColor.BLACK);
  tabuleiro.playsOn(2, 4);
  expect(tabuleiro.pieceAt(3, 4)).toBe(DiskColor.WHITE);
  tabuleiro.playsOn(2, 5);
  expect(tabuleiro.pieceAt(3, 4)).toBe(DiskColor.BLACK);
});

test('não pode jogar em qualquer lugar (Nenhum vizinho)', () => {
  const tabuleiro = new ReversiGame();
  expect(tabuleiro.playsOn(0, 0)).toBeFalsy();
});

test('não pode jogar em qualquer lugar (Vizinho da mesma cor)', () => {
  const tabuleiro = new ReversiGame();
  expect(tabuleiro.playsOn(3, 5)).toBeFalsy();
});

test('pode jogar se dá para pintar alguma pedra', () => {
  const tabuleiro = new ReversiGame();
  expect(tabuleiro.playsOn(4, 5)).toBeTruthy();
});
