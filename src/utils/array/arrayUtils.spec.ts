import utils, { arrayAddEl, arrayRemoveEl, byId, getIndexFromPropOf2dArray } from './arrayUtils';

describe( 'UTILS', () => {
  it( 'should exist', () => {
    expect( utils ).toBeTruthy();
  } );
  
  const elements = [ {
    id: '1'
  }, {
    id: '2'
  } ];
  
  const element = {
    id: '0'
  };
  
  describe( 'Array helpers', () => {
    it( 'should find by id', () => {
      const element2 = { id: 1 };
      expect( byId( element.id )( element2 ) ).toBe( false );
      expect( byId( element.id )( element ) ).toBe( true );
    } );
    
    it( 'should add element to pure array', () => {
      const arr = arrayAddEl( elements, element );
      expect( arr.length ).toBe( elements.length + 1 );
      const arr2 = arrayAddEl( elements, elements[ 0 ] );
      expect( arr2.length ).toBe( elements.length );
    } );
    
    it( 'should remove element from pure array', () => {
      const arr = arrayRemoveEl( elements, elements[ 0 ] );
      expect( arr.length ).toBe( elements.length - 1 );
      const arr2 = arrayRemoveEl( elements, element );
      expect( arr2.length ).toBe( elements.length );
    } );
    
    it( 'should find indexes of 2d Array', () => {
      const i = 0;
      const j = 0;
      const arr = [ {
        prop: [ { id: '1' }, { id: '2' } ]
      }, {
        prop: [ { id: '3' }, { id: '4' } ]
      } ];
      expect( getIndexFromPropOf2dArray( arr, 'prop', arr[ i ].prop[ j ].id ) ).toEqual( { i, j } );
    } );
  } );
} );
