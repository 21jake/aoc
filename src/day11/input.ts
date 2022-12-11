export const test = {
  0: {
    startingItems: [79, 98],
    op: ['MUL', 19],
    test: 23,
    output: {
      '1': 2,
      '0': 3,
    },
  },
  1: {
    startingItems: [54, 65, 75, 74],
    op: ['ADD', 6],
    test: 19,
    output: {
      '1': 2,
      '0': 0,
    },
  },
  2: {
    startingItems: [79, 60, 97],
    op: ['MUL'],
    test: 13,
    output: {
      1: 1,
      0: 3,
    },
  },
  3: {
    startingItems: [74],
    op: ['ADD', 3],
    test: 17,
    output: {
      1: 0,
      0: 1,
    },
  },
};

export const real = {
  0: {
    startingItems: [65, 78],
    op: ['MUL', 3],
    test: 5,
    output: {
      '1': '2',
      '0': '3',
    },
  },
  1: {
    startingItems: [54, 78, 86, 79, 73, 64, 85, 88],
    op: ['ADD', 8],
    test: 11,
    output: {
      '1': '4',
      '0': 7,
    },
  },
  2: {
    startingItems: [69, 97, 77, 88, 87],
    op: ['ADD', 2],
    test: 2,
    output: {
      '1': '5',
      0: 3,
    },
  },
  3: {
    startingItems: [99],
    op: ['ADD', 4],
    test: 13,
    output: {
      '1': '1',
      0: 5,
    },
  },
  4: {
    startingItems: [60, 57, 52],
    op: ['MUL', 19],
    test: 7,
    output: {
      '1': '7',
      0: 6,
    },
  },
  5: {
    startingItems: [91, 82, 85, 73, 84, 53],
    op: ['ADD', 5],
    test: 3,
    output: {
      '1': '4',
      0: 1,
    },
  },
  6: {
    startingItems: [88, 74, 68, 56],
    op: ['MUL'],
    test: 17,
    output: {
      '1': '0',
      0: 2,
    },
  },
  7: {
    startingItems: [54, 82, 72, 71, 53, 99, 67],
    op: ['ADD', 1],
    test: 19,
    output: {
      '1': '6',
      0: 0,
    },
  },
};

// Monkey 0:
//   Starting items: 65, 78
//   Operation: new = old * 3
//   Test: divisible by 5
//     If true: throw to monkey 2
//     If false: throw to monkey 3

// Monkey 1:
//   Starting items: 54, 78, 86, 79, 73, 64, 85, 88
//   Operation: new = old + 8
//   Test: divisible by 11
//     If true: throw to monkey 4
//     If false: throw to monkey 7

// Monkey 2:
//   Starting items: 69, 97, 77, 88, 87
//   Operation: new = old + 2
//   Test: divisible by 2
//     If true: throw to monkey 5
//     If false: throw to monkey 3

// Monkey 3:
//   Starting items: 99
//   Operation: new = old + 4
//   Test: divisible by 13
//     If true: throw to monkey 1
//     If false: throw to monkey 5

// Monkey 4:
//   Starting items: 60, 57, 52
//   Operation: new = old * 19
//   Test: divisible by 7
//     If true: throw to monkey 7
//     If false: throw to monkey 6

// Monkey 5:
//   Starting items: 91, 82, 85, 73, 84, 53
//   Operation: new = old + 5
//   Test: divisible by 3
//     If true: throw to monkey 4
//     If false: throw to monkey 1

// Monkey 6:
//   Starting items: 88, 74, 68, 56
//   Operation: new = old * old
//   Test: divisible by 17
//     If true: throw to monkey 0
//     If false: throw to monkey 2

// Monkey 7:
//   Starting items: 54, 82, 72, 71, 53, 99, 67
//   Operation: new = old + 1
//   Test: divisible by 19
//     If true: throw to monkey 6
//     If false: throw to monkey 0
