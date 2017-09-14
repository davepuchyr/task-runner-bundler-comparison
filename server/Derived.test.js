import Base from 'Base';
import Derived from 'Derived';
import expect from 'expect';


const derived = new Derived();


describe( 'Derived', () => {
   it( 'derived should be an instance of Base & Derived', () => {
      expect( derived instanceof Base ).toBe( true );
      expect( derived instanceof Derived ).toBe( true );
   } );
} );
