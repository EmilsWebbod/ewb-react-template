/**
 * Sections the filters into smaller parts. So you can undergroup them in list.
 * The list items can be mixed with other primaries and filterss can be mixed with other secondaries.
 * So you Only create a filters once and then link them together when items are added.
 */

interface IFilter {
  id: string;
  text: string;
  list?: any[];
  active?: boolean;
}

interface ISecondary {
  id: string;
  text: string;
  filters: IFilter[];
  active?: boolean;
}

/**
 * You can ADD data. But don't REMOVE. Test checks lengths
 */
// For Daily
const daily: ISecondary[] = [
  {
    filters: [
      {
        id: '100',
        list: [],
        text: 'Cap'
      }, {
        id: '101',
        text: 'Hat'
      }
    ],
    id: '10',
    text: 'Head'
  },
  {
    filters: [
      {
        id: '102',
        text: 'Shorts'
      }
    ],
    id: '11',
    text: 'Legs'
  }
];

const training: ISecondary[] = [
  {
    filters: [
      {
        id: '102',
        text: 'Shorts'
      },
      {
        id: '103',
        text: 'Pants'
      }
    ],
    id: '11',
    text: 'Legs'
  },
  {
    filters: [
      {
        id: '320',
        text: 'Watch'
      }
    ],
    id: '13',
    text: 'Arms'
  }
];

const party: ISecondary[] = [
  {
    filters: [
      {
        id: '104',
        text: 'Shirt'
      },
      {
        id: '105',
        text: 'Dress'
      }
    ],
    id: '12',
    text: 'Body'
  }
];

const outdoor: ISecondary[] = [
  {
    filters: [
      {
        id: '104',
        text: 'Shirt'
      },
      {
        id: '105',
        text: 'Dress'
      }
    ],
    id: '12',
    text: 'Body'
  }
];

const mockSecondary: ISecondary[] = [
  {
    filters: [
      {
        id: '110',
        text: 'Skinny'
      },
      {
        id: '111',
        text: 'Long'
      }
    ],
    id: '12',
    text: 'Dress'
  }
];

// Used to Mock api and get correct data
const mockSecondaries: Array<{id: string, secondary: ISecondary[]}> = [{
  id: '0',
  secondary: daily
}, {
  id: '1',
  secondary: training
}, {
  id: '2',
  secondary: party
}, {
  id:        '3',
  secondary: mockSecondary
}, {
  id: '4',
  secondary: outdoor
}];

export {mockSecondaries, mockSecondary};
