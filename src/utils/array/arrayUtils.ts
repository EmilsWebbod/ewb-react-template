export const byId = (id: string) => (el: any) => el.id === id;

export const arrayRemove = (arr: any[], i: number) => {
  return [
    ...arr.slice( 0, i ),
    ...arr.slice( i + 1 )
  ];
};

export const arrayAddEl = (arr: any[], el: any) => {
  if (arr.findIndex( byId( el.id ) ) !== -1) {
    console.warn( 'Element already exist in array: ', arr, el );
    return arr;
  }
  return [ ...arr, el ];
};

export const arrayRemoveEl = (arr: any[], el: any) => {
  const i = arr.findIndex( byId( el.id ) );
  if (i === -1) {
    console.warn( 'Could not find element in Array: ', arr, el );
    return arr;
  }
  return arrayRemove( arr, i );
};

export const getIndexFrom2dArray = (arr: any[], id: string) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[ i ].length; j++) {
      if (arr[ i ][ j ].id === id) {
        return { i, j };
      }
    }
  }
  return { i: -1, j: -1 };
};

export const getIndexFromPropOf2dArray = (arr: any[], prop: any, id: string) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[ i ][ prop ].length; j++) {
      if (arr[ i ][ prop ][ j ].id === id) {
        return { i, j };
      }
    }
  }
  return { i: -1, j: -1 };
};

export default {
  arrayAddEl,
  arrayRemove,
  arrayRemoveEl,
  byId,
  getIndexFrom2dArray,
  getIndexFromPropOf2dArray
}