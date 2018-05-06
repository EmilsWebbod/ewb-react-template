/**
 * Primary is the first filter step. Really broad selection
 * You have two more steps under secondary
 */

/**
 * You can ADD data. But don't REMOVE. Test checks lengths
 */

const mockPrimaries: Array<{id: string, text: string}> = [
  {
    id: '0',
    text: 'Daily'
  },
  {
    id: '1',
    text: 'Training'
  },
  {
    id: '2',
    text: 'Party'
  },
  {
    id: '3',
    text: 'Sleep'
  },
  {
    id: '4',
    text: 'Outdoor'
  }
];

const mockPrimary = {
  id: '5',
  text: 'Sexy'
};

export {mockPrimaries, mockPrimary};
