import Base from 'Base';

/**
 * Derived class.
 */
export default class Derived extends Base {
   /**
    * This overrides Base#hello.
    * @param {object} o args
    */
   hello( o = { audience:'World' } ) {
      return `Hello, ${o.audience}, from Derived!`;
   }
}
