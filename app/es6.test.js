import expect from 'expect';

const property = 69;


export default class ES6 {
   constructor() {
      this.property = property;
   }

   getProperty() {
      return this.property;
   }
}

const es6 = new ES6();


describe( 'ES6', () => {
   it( 'es6 should be an instanceof ES6', () => {
      expect( es6 instanceof ES6 ).toBe( true );
   } );

   it( 'es6.getProperty() should be module.property', () => {
      expect( es6.getProperty() ).toBe( property );
   } );
} );
